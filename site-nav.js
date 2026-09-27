(() => {
  const isEnglish = document.documentElement.lang.startsWith("en");
  const page = document.body.dataset.page || "home";
  const topNav = document.querySelector("header > nav");
  const currentPath = window.location.pathname;
  const currentTopItem = currentPath.includes("member")
    ? "member"
    : currentPath.includes("legal")
      ? "legal"
      : page;
  const topItems = isEnglish
    ? [
        ["home", "Home", "en.html#top"],
        ["shop", "Shop", "en-shop.html"],
        ["products", "Products", "en.html#products"],
        ["ingredients", "Ingredients", "en.html#ingredients"],
        ["quality", "Certification", "en-quality.html"],
        ["story", "Our approach", "en.html#science", true],
        ["member", "Sign in", "en-member.html", true],
        ["language", "繁中", "index.html"],
        ["contact", "Contact", "en-contact.html"],
      ]
    : [
        ["home", "首頁", "index.html#top"],
        ["shop", "網店", "shop.html"],
        ["products", "產品系列", "index.html#products"],
        ["ingredients", "成分研究", "ingredients.html"],
        ["quality", "認證", "quality.html"],
        ["story", "品牌理念", "index.html#story", true],
        ["faq", "常見問題", "index.html#faq", true],
        ["member", "登入", "member.html", true],
        ["language", "EN", "en.html"],
        ["contact", "聯絡我們", "contact.html"],
      ];
  if (topNav) {
    topNav.innerHTML = topItems
      .map(([key, label, href, optional]) => {
        const classes = [
          key === "language" ? "lang" : "",
          key === "contact" ? "navcta" : "",
        ]
          .filter(Boolean)
          .join(" ");
        const current = key === currentTopItem ? ' aria-current="page"' : "";
        const optionalAttribute = optional ? " data-nav-optional" : "";
        return `<a${classes ? ` class="${classes}"` : ""}${optionalAttribute}${current} href="${href}">${label}</a>`;
      })
      .join("");
  }
  const icon = {
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/><path d="M9 21v-7h6v7"/></svg>',
    products:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></svg>',
    science:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="12" r="2.5"/><circle cx="17.5" cy="6" r="2.5"/><circle cx="17.5" cy="18" r="2.5"/><path d="m8.2 10.8 7.1-3.6M8.2 13.2l7.1 3.6"/></svg>',
    story:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-3.8-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.2-7 10-7 10Z"/></svg>',
    cert: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 19 6v5c0 4.6-2.9 8-7 10-4.1-2-7-5.4-7-10V6l7-3Z"/><path d="m8.8 12 2.1 2.1 4.4-4.5"/></svg>',
    faq: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.6 2.6 0 1 1 4.4 1.9c-1.5 1.2-1.9 1.6-1.9 3.1M12 17.2h.01"/></svg>',
    shop: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9h14l-1 11H6L5 9Z"/><path d="M9 10V7a3 3 0 0 1 6 0v3"/></svg>',
  };
  const copy = isEnglish
    ? {
        home: [
          ["home", "Home", "#top"],
          ["shop", "Shop", "en-shop.html"],
          ["products", "Products", "#products"],
          ["science", "Ingredients", "#ingredients"],
          ["cert", "Certification", "en-quality.html"],
          ["faq", "Contact", "en-contact.html"],
        ],
        ingredients: [
          ["home", "Home", "en.html#top"],
          ["shop", "Shop", "en-shop.html"],
          ["products", "Products", "en.html#products"],
          ["science", "Ingredients", "#ingredients"],
          ["cert", "Certification", "en-quality.html"],
          ["faq", "Contact", "en-contact.html"],
        ],
        quality: [
          ["home", "Home", "en.html#top"],
          ["shop", "Shop", "en-shop.html"],
          ["products", "Products", "en.html#products"],
          ["science", "Ingredients", "en.html#ingredients"],
          ["cert", "Certification", "#top"],
          ["faq", "Contact", "en-contact.html"],
        ],
        shop: [
          ["home", "Home", "en.html#top"],
          ["shop", "Shop", "#top"],
          ["products", "Products", "en.html#products"],
          ["science", "Ingredients", "en.html#ingredients"],
          ["cert", "Certification", "en-quality.html"],
          ["faq", "Contact", "en-contact.html"],
        ],
        contact: [
          ["home", "Home", "en.html#top"],
          ["shop", "Shop", "en-shop.html"],
          ["products", "Products", "en.html#products"],
          ["science", "Ingredients", "en.html#ingredients"],
          ["cert", "Certification", "en-quality.html"],
          ["faq", "Contact", "#top"],
        ],
        legal: [
          ["home", "Home", "en.html#top"],
          ["shop", "Shop", "en-shop.html"],
          ["products", "Products", "en.html#products"],
          ["science", "Ingredients", "en.html#ingredients"],
          ["cert", "Certification", "en-quality.html"],
          ["faq", "Contact", "en-contact.html"],
        ],
      }
    : {
        home: [
          ["home", "首頁", "#top"],
          ["shop", "網店", "shop.html"],
          ["products", "產品", "#products"],
          ["science", "成分", "ingredients.html"],
          ["cert", "認證", "quality.html"],
          ["faq", "問答", "#faq"],
        ],
        ingredients: [
          ["home", "首頁", "index.html#top"],
          ["shop", "網店", "shop.html"],
          ["products", "產品", "index.html#products"],
          ["science", "成分", "#ingredients"],
          ["cert", "認證", "quality.html"],
          ["faq", "問答", "index.html#faq"],
        ],
        quality: [
          ["home", "首頁", "index.html#top"],
          ["shop", "網店", "shop.html"],
          ["products", "產品", "index.html#products"],
          ["science", "成分", "ingredients.html"],
          ["cert", "認證", "#top"],
          ["faq", "問答", "index.html#faq"],
        ],
        shop: [
          ["home", "首頁", "index.html#top"],
          ["shop", "網店", "#top"],
          ["products", "產品", "index.html#products"],
          ["science", "成分", "ingredients.html"],
          ["cert", "認證", "quality.html"],
          ["faq", "問答", "index.html#faq"],
        ],
        contact: [
          ["home", "首頁", "index.html#top"],
          ["shop", "網店", "shop.html"],
          ["products", "產品", "index.html#products"],
          ["science", "成分", "ingredients.html"],
          ["cert", "認證", "quality.html"],
          ["faq", "聯絡", "#top"],
        ],
        legal: [
          ["home", "首頁", "index.html#top"],
          ["shop", "網店", "shop.html"],
          ["products", "產品", "index.html#products"],
          ["science", "成分", "ingredients.html"],
          ["cert", "認證", "quality.html"],
          ["faq", "問答", "index.html#faq"],
        ],
      };
  if (page === "legal") {
    const legal = document.querySelector(".legal");
    if (legal)
      legal.insertAdjacentHTML(
        "afterbegin",
        isEnglish
          ? '<section class="section" id="returns"><div class="eyebrow">04 / RETURNS & REFUNDS</div><h2>Returns must be safe, clear and agreed first.</h2><p>This policy applies once official online checkout is enabled. It does not limit rights that cannot be excluded under applicable law. Please contact customer care before sending anything back; a return without approval may not be accepted.</p><h3>Change-of-mind returns</h3><p>You may request a return within 7 calendar days after delivery. Products must be unused, unopened, in their original sealed packaging, in resalable condition, and accompanied by the order reference or proof of purchase. Approval is required before return.</p><h3>Items we cannot accept for return</h3><p>For product-safety and hygiene reasons, we cannot accept products with a broken or removed seal, opened or used products, products damaged after delivery, free gifts, or items returned without prior approval.</p><h3>Incorrect, damaged or incomplete orders</h3><p>Please contact us within 48 hours of delivery and provide clear photos of the outer parcel, product and label. After review, we will arrange an appropriate remedy, such as replacement, refund or another reasonable solution.</p><h3>SF Express freight collect and return delivery</h3><p>Orders are sent by SF Express freight collect: the recipient pays the delivery charge directly to the courier. For approved change-of-mind returns, the customer pays the return delivery cost. Do not send an unapproved freight-collect return. For a verified incorrect or damaged order, we will confirm the return-delivery arrangement with you first.</p><h3>Refund timing</h3><p>After an approved return is received and inspected, any eligible refund is made to the original product-payment method within 14 business days. SF Express freight charges paid directly to the courier are not included in a normal refund. We will explain the outcome in writing where a claim is not approved.</p></section><section class="section"><div class="eyebrow">MEMBERSHIP PREVIEW</div><h2>Local browser storage only.</h2><p>The membership-preview page stores the name, email address and optional phone number that you enter only in the local storage of the browser and device you are using. It does not transmit these details to ON Original Nutrition or a server. You can remove them at any time from the membership page or by clearing browser data.</p></section>'
          : '<section class="section" id="returns"><div class="eyebrow">04 / 退貨及退款條款</div><h2>以產品安全、程序清晰為先。</h2><p>本條款會在正式網上付款啟用後適用，亦不會限制任何不可依法排除的消費者權利。寄回貨品前，請先聯絡客服並取得確認；未獲批准的退件可能不獲接收。</p><h3>因個人原因退貨</h3><p>你可於收貨後 7 個曆日內提出申請。貨品必須未曾使用、未開封、原有封條完整、保留原裝包裝及可再次售賣的狀態，並附上訂單編號或購買證明。退貨前必須先獲確認。</p><h3>不接受退貨的情況</h3><p>基於產品安全及衛生考慮，已拆除或破損封條、已開封或使用過的產品、收貨後因人為造成損壞的產品、贈品，以及未經事先確認而寄回的貨品，均不接受退貨。</p><h3>錯貨、運送損壞或漏件</h3><p>請於收貨後 48 小時內聯絡我們，並提供外箱、產品及標籤的清晰相片。經核實後，我們會按實際情況安排補寄、退款或其他合理處理方式。</p><h3>順豐到付及退貨運費</h3><p>所有訂單均以順豐到付寄出，運費由收件人直接向順豐支付。獲批准的個人原因退貨，退件運費由客人承擔；請勿以未經批准的順豐到付方式退件。如屬經核實的錯貨或運送損壞，我們會先與你確認退貨運送安排。</p><h3>退款時間</h3><p>已獲批准的退貨在收回及檢查後，如符合退款資格，將於 14 個工作天內按原商品付款方式處理。一般退款不包括已直接支付予順豐的運費；如個案不獲批准，我們會以書面說明處理結果。</p></section><section class="section"><div class="eyebrow">會員示範版</div><h2>資料只儲存於本機瀏覽器。</h2><p>會員登記示範頁所輸入的稱呼、電郵及選填電話，只會儲存在你正在使用的裝置及瀏覽器本機儲存空間，並不會傳送至 ON Original Nutrition 或任何伺服器。你可以隨時在會員頁清除，或透過瀏覽器設定刪除。</p></section>',
      );
  }
  if (isEnglish && page === "shop") {
    const style = document.createElement("style");
    style.textContent =
      ".quantity{display:inline-flex;align-items:center;gap:12px;margin:4px 0 17px;padding:5px 8px;border:1px solid #d7cbd5;border-radius:999px}.quantity button{width:30px;height:30px;border:0;border-radius:50%;background:#f1ebf1;color:#3f174d;font:700 1.1rem/1 sans-serif;cursor:pointer}.quantity output{min-width:22px;text-align:center;font-weight:700}.selected-price{margin:14px 0;color:#85103f;font-size:1.45rem;font-weight:700}.selected-price small{color:#766a70;font-size:.78rem;font-weight:400}";
    document.head.append(style);
    document.querySelectorAll(".card").forEach((card, index) => {
      const anchor = card.querySelector(".button");
      const priceTarget =
        card.querySelector(".price") || card.querySelector(".tiers");
      if (!anchor || !priceTarget) return;
      let quantity = 1;
      const control = document.createElement("div");
      control.className = "quantity";
      control.setAttribute("aria-label", "Choose quantity");
      control.innerHTML =
        '<button type="button" aria-label="Decrease quantity">−</button><output>1</output><button type="button" aria-label="Increase quantity">＋</button>';
      priceTarget.after(control);
      const output = control.querySelector("output");
      const price =
        index === 0
          ? () =>
              quantity >= 24
                ? 748
                : quantity >= 12
                  ? 758
                  : quantity >= 6
                    ? 768
                    : 788
          : () => (index === 1 ? 560 : 360);
      const refresh = () => {
        output.textContent = quantity;
        anchor.textContent = `Enquire about ${quantity} ${quantity === 1 ? "unit" : "units"}`;
        if (index === 0) {
          let selected = card.querySelector(".selected-price");
          if (!selected) {
            selected = document.createElement("div");
            selected.className = "selected-price";
            control.after(selected);
          }
          selected.innerHTML = `HK$${(price() * quantity).toLocaleString("en-HK")} <small>· HK$${price().toLocaleString("en-HK")} / box</small>`;
        }
      };
      control.querySelectorAll("button")[0].onclick = () => {
        quantity = Math.max(1, quantity - 1);
        refresh();
      };
      control.querySelectorAll("button")[1].onclick = () => {
        quantity += 1;
        refresh();
      };
      refresh();
    });
    const footer = document.querySelector("footer");
    if (footer)
      footer.insertAdjacentHTML(
        "beforeend",
        '<a href="en-legal.html#returns">RETURNS &amp; REFUNDS</a>',
      );
  }
  const noticeSeenKey = "on-payment-notice-seen";
  let shouldShowNotice = false;
  try {
    shouldShowNotice = !sessionStorage.getItem(noticeSeenKey);
  } catch (_) {
    shouldShowNotice = true;
  }
  if (shouldShowNotice) {
    const notice = isEnglish
      ? '<section class="purchase-notice" role="dialog" aria-modal="true" aria-labelledby="purchase-notice-title"><div class="purchase-notice__panel"><button class="purchase-notice__close" type="button" aria-label="Close notice">×</button><div class="purchase-notice__eyebrow">IMPORTANT NOTICE</div><h2 id="purchase-notice-title">Card payment is not available yet</h2><p>Online credit-card payment is not available at this stage. For product details, prices and ordering arrangements, please contact us on WhatsApp.</p><div class="purchase-notice__actions"><a class="purchase-notice__primary" target="_blank" rel="noopener" href="https://wa.me/85298677427?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20ON%20Original%20Nutrition%20products.">WhatsApp us</a><button class="purchase-notice__secondary" type="button">Browse first</button></div><small>All orders are arranged with customer care before confirmation.</small></div></section>'
      : '<section class="purchase-notice" role="dialog" aria-modal="true" aria-labelledby="purchase-notice-title"><div class="purchase-notice__panel"><button class="purchase-notice__close" type="button" aria-label="關閉提醒">×</button><div class="purchase-notice__eyebrow">重要提醒</div><h2 id="purchase-notice-title">現階段未支援信用卡付款</h2><p>網站現時未設信用卡網上付款。如想了解產品詳情、價格及訂購安排，請透過 WhatsApp 聯絡我們。</p><div class="purchase-notice__actions"><a class="purchase-notice__primary" target="_blank" rel="noopener" href="https://wa.me/85298677427?text=你好，我想查詢%20ON%20Original%20Nutrition%20產品詳情。">WhatsApp 查詢</a><button class="purchase-notice__secondary" type="button">先瀏覽網站</button></div><small>所有訂單均會先由客服確認安排。</small></div></section>';
    document.body.insertAdjacentHTML("beforeend", notice);
    const modal = document.querySelector(".purchase-notice");
    const closeNotice = () => {
      modal?.remove();
      try {
        sessionStorage.setItem(noticeSeenKey, "1");
      } catch (_) {}
    };
    modal
      ?.querySelectorAll("button")
      .forEach((button) => button.addEventListener("click", closeNotice));
    modal?.addEventListener("click", (event) => {
      if (event.target === modal) closeNotice();
    });
    document.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Escape") closeNotice();
      },
      { once: true },
    );
    modal?.querySelector(".purchase-notice__close")?.focus();
  }
  const entries = copy[page] || copy.home;
  document.body.insertAdjacentHTML(
    "beforeend",
    `<nav class="site-bottom-nav" aria-label="${isEnglish ? "Site navigation" : "網站導覽"}">${entries.map(([kind, label, href]) => `<a href="${href}" data-bottom-nav="${href}">${icon[kind]}<span>${label}</span></a>`).join("")}</nav>`,
  );
  const links = [...document.querySelectorAll("[data-bottom-nav]")];
  const targets = links
    .map((link) => ({ link, id: link.getAttribute("href").replace(/^#/, "") }))
    .filter((item) => item.id && document.getElementById(item.id));
  const activate = (id) =>
    links.forEach((link) =>
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${id}`,
      ),
    );
  if (targets.length) {
    const observer = new IntersectionObserver(
      (items) =>
        items.forEach((item) => {
          if (item.isIntersecting) activate(item.target.id);
        }),
      { rootMargin: "-38% 0px -47% 0px", threshold: 0 },
    );
    targets.forEach(({ id }) => observer.observe(document.getElementById(id)));
  }
})();
