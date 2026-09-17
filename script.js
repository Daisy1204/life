const copy = {
  zh: {
    lang: "zh-Hant", eyebrow: "從自然，到理解", title: "一顆充滿使命的種子",
    intro: "從一顆完整的黑小茴香種子開始，逐層觀察、開啟與理解，探索大自然蘊藏其中的營養價值。",
    seed: "種子", layer: "外層", inner: "內層", core: "營養核心", compounds: "天然活性成分", thymoquinone: "概念成分階段",
    discover: "捲動以逐層理解", botanical: "黑小茴香 · 植物研究",
    assetSeed: "預留予經驗證的完整黑小茴香種子微距照片", assetLayer: "預留予經驗證的種子外層照片",
    assetInner: "預留予經驗證的內部結構照片", assetCore: "預留予經驗證的營養核心照片",
    assetCompounds: "預留予經科學審閱的天然活性成分視覺", assetThymoquinone: "預留予經科學審閱的百里醌概念視覺",
  },
  en: {
    lang: "en", eyebrow: "FROM NATURE, TO UNDERSTANDING", title: "A Seed with Purpose.",
    intro: "Beginning with one whole Nigella sativa seed, we observe, open and understand each successive layer—exploring the nutritional value held within nature.",
    seed: "SEED", layer: "OUTER LAYER", inner: "INNER STRUCTURE", core: "NUTRITIONAL CORE", compounds: "NATURAL COMPOUNDS", thymoquinone: "CONCEPTUAL CONSTITUENT",
    discover: "SCROLL TO UNDERSTAND", botanical: "BLACK SEED · BOTANICAL STUDY",
    assetSeed: "Reserved for verified macro photograph of a whole Nigella sativa seed", assetLayer: "Reserved for verified outer layer photographic asset",
    assetInner: "Reserved for verified inner structure photographic asset", assetCore: "Reserved for verified nutritional core photographic asset",
    assetCompounds: "Reserved for scientifically reviewed natural compounds visual", assetThymoquinone: "Reserved for scientifically reviewed conceptual thymoquinone visual",
  },
};

const buttons = document.querySelectorAll(".language");
function setLanguage(language) {
  const selected = copy[language];
  document.documentElement.lang = selected.lang;
  document.querySelectorAll("[data-copy]").forEach((element) => { element.textContent = selected[element.dataset.copy]; });
  document.querySelectorAll("[data-copy-aria]").forEach((element) => { element.setAttribute("aria-label", selected[element.dataset.copyAria]); });
  buttons.forEach((button) => { const active = button.dataset.lang === language; button.classList.toggle("active", active); button.setAttribute("aria-pressed", String(active)); });
}
buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

const hero = document.querySelector(".hero");
const counter = document.querySelector("#progress-count");
let ticking = false;
function renderProgress() {
  const distance = Math.max(hero.offsetHeight - window.innerHeight, 1);
  const progress = Math.max(0, Math.min(-hero.getBoundingClientRect().top / distance, 1));
  document.documentElement.style.setProperty("--progress", progress.toFixed(3));
  counter.textContent = String(Math.min(6, Math.floor(progress * 6) + 1)).padStart(2, "0");
  ticking = false;
}
window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(renderProgress); ticking = true; } }, { passive: true });
window.addEventListener("resize", renderProgress);
renderProgress();
