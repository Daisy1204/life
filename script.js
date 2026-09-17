const copy = {
  zh: {
    lang: "zh-Hant",
    eyebrow: "從源頭，重新理解營養",
    title: "一顆充滿使命的種子",
    intro: "一切始於一顆微小種子。以科學為方法，探索黑小茴香蘊藏的原生力量，讓每日營養回到純粹本質。",
    placeholder: "黑小茴香種子<br>高解析真實影像預留位置",
    caption: "黑小茴香種子",
    note: "源自植物的智慧<br>經由現代科學驗證",
    discover: "向下探索",
  },
  en: {
    lang: "en",
    eyebrow: "RETHINKING NUTRITION, FROM THE SOURCE",
    title: "A Seed with Purpose.",
    intro: "It begins with something remarkably small. Guided by science, we uncover the inherent potential of Nigella sativa—and return daily nutrition to its purest form.",
    placeholder: "BLACK SEED<br>HIGH-RES REAL IMAGE PLACEHOLDER",
    caption: "Black seed",
    note: "BOTANICAL INTELLIGENCE<br>VALIDATED BY MODERN SCIENCE",
    discover: "DISCOVER",
  },
};

const languageButtons = document.querySelectorAll(".language");

function setLanguage(language) {
  const selected = copy[language];
  document.documentElement.lang = selected.lang;

  document.querySelectorAll("[data-copy]").forEach((element) => {
    element.innerHTML = selected[element.dataset.copy];
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

let ticking = false;

function updateScrollEffect() {
  const progress = Math.min(window.scrollY / (window.innerHeight * 0.7), 1);
  document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(3));
  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollEffect);
      ticking = true;
    }
  },
  { passive: true },
);
