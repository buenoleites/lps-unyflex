/*! Unyflex — popup.js
 *
 * Aviso de turma para o site institucional (unyflex.com.br, PHP). Fica em
 * public/, o export copia para out/ e o nginx serve em
 * https://mkt.unyflex.com.br/popup.js. No site, antes de </body>:
 *
 *   <script src="https://mkt.unyflex.com.br/popup.js" defer></script>
 *
 * Script único, sem dependências, sem coleta de dado nenhum: a única gravação
 * é a data da última exibição em localStorage (intervalo de 7 dias) e isso
 * nunca sai do navegador do visitante. Sem cookie, sem fetch, sem pixel.
 *
 * Comportamento:
 *   - desktop (>= 768 px): modal centralizado depois de 8 s OU quando o mouse
 *     sai pelo topo da janela (intenção de saída), o que vier primeiro;
 *   - celular (< 768 px): faixa fixa embaixo, sem cobrir a tela, depois de 8 s;
 *   - no máximo 1 exibição a cada 7 dias por visitante; fechar (X, Esc ou
 *     clique fora do modal) não encurta nem alonga o intervalo;
 *   - não aparece na própria página de destino.
 *
 * Estilo isolado: tudo sob o id #uxp-root (prefixo "uxp-"), com reset nos
 * elementos internos — o CSS do site não entra e o do popup não sai.
 *
 * Para testar: tools/popup-test/index.html (simula o site) e, no console,
 * UnyflexPopup.show(true) (ignora o intervalo) e UnyflexPopup.reset().
 */
(function () {
  "use strict";

  /* ───────────────────────── CONFIG — edite só aqui ─────────────────────────
   * Copy: tudo do hero da /licitacao-out26 (app/licitacao-out26/content.tsx);
   * nada foi escrito para o popup. Trocou a turma? Troque também a storageKey:
   * é ela que zera o intervalo de 7 dias para quem já viu a turma anterior. */
  var CONFIG = {
    turma: "27 a 30 de outubro · Curitiba-PR · presencial ou ao vivo",
    titulo: "Licitações com Inteligência Artificial",
    frase: "DFD, ETP, TR e Mapa de Riscos",
    cta: "Quero receber a proposta",
    imagem: "", // opcional: URL absoluta de uma imagem (só no modal); vazio = sem imagem
    url: "https://mkt.unyflex.com.br/licitacao-out26?c=popup#inscricao",
    accent: "#4EABE9", // ciano da vertical Licitações (theme.css da LP)
    atrasoMs: 8000, // desktop e celular
    diasEntreExibicoes: 7,
    larguraMobile: 768, // abaixo disso vira faixa
    storageKey: "unyflex.popup.licitacao-out26",
  };
  /* ──────────────────────────────────────────────────────────────────────── */

  var ID = "uxp-root";
  var DAY_MS = 864e5;
  var state = { shown: false, timer: null, mode: "", lastFocus: null };

  /* ---- localStorage, sempre com try/catch (Safari privado, storage cheio,
          política de bloqueio): sem storage o popup aparece uma vez por carga. */
  function lastShownAt() {
    try {
      var v = window.localStorage.getItem(CONFIG.storageKey);
      return v ? parseInt(v, 10) || 0 : 0;
    } catch (e) {
      return 0;
    }
  }
  function markShown() {
    try {
      window.localStorage.setItem(CONFIG.storageKey, String(Date.now()));
    } catch (e) {
      /* best-effort */
    }
  }
  function clearShown() {
    try {
      window.localStorage.removeItem(CONFIG.storageKey);
    } catch (e) {
      /* best-effort */
    }
  }
  function withinInterval() {
    return Date.now() - lastShownAt() < CONFIG.diasEntreExibicoes * DAY_MS;
  }

  function isMobile() {
    return window.innerWidth < CONFIG.larguraMobile;
  }

  /* Na própria LP de destino o popup não faz sentido. */
  function onDestination() {
    try {
      var u = new URL(CONFIG.url, window.location.href);
      var strip = function (p) {
        return p.replace(/\/+$/, "") || "/";
      };
      return (
        window.location.host === u.host &&
        strip(window.location.pathname) === strip(u.pathname)
      );
    } catch (e) {
      return false;
    }
  }

  /* ---- CSS isolado: cada regra começa com #uxp-root. */
  function css() {
    var a = CONFIG.accent;
    return [
      "#uxp-root,#uxp-root *{all:unset;box-sizing:border-box;}",
      "#uxp-root *::before,#uxp-root *::after{box-sizing:border-box;}",
      "#uxp-root{display:block;position:fixed;z-index:2147483647;font-family:Montserrat,system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;font-size:16px;line-height:1.45;color:#0a0e14;-webkit-font-smoothing:antialiased;text-align:left;}",
      "#uxp-root[hidden]{display:none;}",
      "#uxp-root .uxp-close{display:flex;align-items:center;justify-content:center;position:absolute;width:40px;height:40px;border-radius:999px;cursor:pointer;font-size:22px;line-height:1;font-weight:700;}",
      "#uxp-root .uxp-close:focus-visible{outline:3px solid " + a + ";outline-offset:2px;}",
      "#uxp-root .uxp-cta{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;background:" + a + ";color:#0a0e14;font-weight:700;border-radius:999px;text-decoration:none;white-space:nowrap;}",
      "#uxp-root .uxp-cta:hover{filter:brightness(1.06);}",
      "#uxp-root .uxp-cta:focus-visible{outline:3px solid #0a0e14;outline-offset:2px;}",
      "#uxp-root .uxp-turma{display:block;color:" + a + ";font-weight:700;font-size:12px;letter-spacing:.08em;text-transform:uppercase;}",
      /* modal (desktop) */
      "#uxp-root.uxp--modal{inset:0;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(10,14,20,.62);}",
      "#uxp-root .uxp-card{display:flex;align-items:stretch;gap:0;position:relative;width:100%;max-width:640px;background:#fff;border-radius:18px;box-shadow:0 24px 64px rgba(0,0,0,.35);overflow:hidden;}",
      "#uxp-root .uxp-img{display:block;flex:0 0 220px;object-fit:cover;width:220px;min-height:100%;}",
      "#uxp-root .uxp-body{display:flex;flex-direction:column;min-width:0;}",
      "#uxp-root.uxp--modal .uxp-body{gap:12px;padding:36px 32px 32px;flex:1 1 auto;}",
      "#uxp-root .uxp-title{display:block;font-size:26px;line-height:1.15;font-weight:800;letter-spacing:-.01em;}",
      "#uxp-root .uxp-text{display:block;font-size:17px;color:#2b3340;}",
      "#uxp-root.uxp--modal .uxp-cta{margin-top:8px;padding:14px 24px;font-size:16px;align-self:flex-start;}",
      "#uxp-root.uxp--modal .uxp-close{top:10px;right:10px;color:#0a0e14;background:transparent;}",
      "#uxp-root.uxp--modal .uxp-close:hover{background:rgba(10,14,20,.08);}",
      /* faixa (celular) */
      "#uxp-root.uxp--bar{left:0;right:0;bottom:0;display:block;padding:12px 16px;padding-bottom:calc(12px + env(safe-area-inset-bottom,0px));background:#0a0e14;color:#fff;box-shadow:0 -8px 24px rgba(0,0,0,.3);}",
      "#uxp-root.uxp--bar .uxp-body{gap:2px;padding-right:40px;}",
      "#uxp-root.uxp--bar .uxp-turma{font-size:11px;}",
      "#uxp-root.uxp--bar .uxp-title{display:block;font-size:15px;line-height:1.25;font-weight:700;color:#fff;}",
      "#uxp-root.uxp--bar .uxp-cta{display:flex;width:100%;margin-top:10px;padding:12px 16px;font-size:14px;}",
      "#uxp-root.uxp--bar .uxp-close{top:4px;right:4px;color:#fff;background:transparent;}",
      "#uxp-root.uxp--bar .uxp-close:hover{background:rgba(255,255,255,.12);}",
      "@media (prefers-reduced-motion:no-preference){#uxp-root .uxp-card{animation:uxp-in .22s ease-out;}#uxp-root.uxp--bar{animation:uxp-up .22s ease-out;}}",
      "@keyframes uxp-in{from{opacity:0;transform:translateY(12px);}to{opacity:1;transform:none;}}",
      "@keyframes uxp-up{from{transform:translateY(100%);}to{transform:none;}}",
    ].join("\n");
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text; // textContent: nunca innerHTML
    return n;
  }

  function build(mode) {
    var root = el("div");
    root.id = ID;
    root.className = "uxp--" + mode;
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", mode === "modal" ? "true" : "false");
    root.setAttribute("aria-label", CONFIG.titulo + " — " + CONFIG.turma);

    var body = el("div", "uxp-body");
    body.appendChild(el("span", "uxp-turma", CONFIG.turma));
    body.appendChild(el("strong", "uxp-title", CONFIG.titulo));
    if (mode === "modal" && CONFIG.frase) {
      body.appendChild(el("span", "uxp-text", CONFIG.frase));
    }

    var cta = el("a", "uxp-cta", CONFIG.cta);
    cta.href = CONFIG.url;
    body.appendChild(cta);

    var close = el("button", "uxp-close", "×");
    close.type = "button";
    close.setAttribute("aria-label", "Fechar aviso");
    close.addEventListener("click", hide);

    if (mode === "modal") {
      var card = el("div", "uxp-card");
      if (CONFIG.imagem) {
        var img = el("img", "uxp-img");
        img.src = CONFIG.imagem;
        img.alt = "";
        img.loading = "lazy";
        card.appendChild(img);
      }
      card.appendChild(body);
      card.appendChild(close);
      root.appendChild(card);
      // clique no fundo escuro fecha; dentro do card, não
      root.addEventListener("click", function (e) {
        if (e.target === root) hide();
      });
    } else {
      root.appendChild(body);
      root.appendChild(close);
    }
    return root;
  }

  function onKey(e) {
    if (e.key === "Escape" || e.key === "Esc") hide();
  }

  function show(force) {
    if (state.shown) return;
    if (!force && withinInterval()) return;
    if (!document.body) return;
    cancelTriggers();
    state.shown = true;
    state.mode = isMobile() ? "bar" : "modal";

    if (!document.getElementById(ID + "-style")) {
      var style = el("style");
      style.id = ID + "-style";
      style.textContent = css();
      document.head.appendChild(style);
    }
    var root = build(state.mode);
    document.body.appendChild(root);
    markShown();

    document.addEventListener("keydown", onKey);
    if (state.mode === "modal") {
      state.lastFocus = document.activeElement;
      var cta = root.querySelector(".uxp-cta");
      if (cta && cta.focus) cta.focus({ preventScroll: true });
    }
  }

  function hide() {
    var root = document.getElementById(ID);
    if (root && root.parentNode) root.parentNode.removeChild(root);
    document.removeEventListener("keydown", onKey);
    if (state.lastFocus && state.lastFocus.focus) {
      try {
        state.lastFocus.focus({ preventScroll: true });
      } catch (e) {
        /* ignore */
      }
    }
    state.lastFocus = null;
  }

  /* ---- gatilhos */
  function onMouseLeave(e) {
    // Saiu pelo topo da janela (barra de endereço/abas) = intenção de saída.
    if (e.clientY <= 0) show(false);
  }
  function armTriggers() {
    state.timer = window.setTimeout(function () {
      show(false);
    }, CONFIG.atrasoMs);
    if (!isMobile()) {
      document.documentElement.addEventListener("mouseleave", onMouseLeave);
    }
  }
  function cancelTriggers() {
    if (state.timer) window.clearTimeout(state.timer);
    state.timer = null;
    document.documentElement.removeEventListener("mouseleave", onMouseLeave);
  }

  function init() {
    if (window.top !== window.self) return; // dentro de iframe, não
    if (onDestination()) return;
    if (withinInterval()) return;
    armTriggers();
  }

  // API mínima, só para teste e para a página de teste.
  window.UnyflexPopup = {
    show: function (force) {
      show(force === true);
    },
    close: hide,
    reset: function () {
      clearShown();
      state.shown = false;
      hide();
    },
    config: CONFIG,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
