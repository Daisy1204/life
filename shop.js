(() => {
  const key = "on-shop-cart";
  const q = (selector) => document.querySelector(selector);
  const cart = JSON.parse(localStorage.getItem(key) || "[]");
  cart.forEach((item) => {
    if (item.name === "皇牌種籽油") item.name = "Life";
  });
  const words = {
    empty: "購物袋暫時未有商品。",
    remove: "移除",
    minus: "減少數量",
    plus: "增加數量",
  };
  const fmt = (value) => `HK$${value.toLocaleString("en-HK")}`;
  const save = () => localStorage.setItem(key, JSON.stringify(cart));
  const lifeUnitPrice = (quantity) =>
    quantity >= 24 ? 748 : quantity >= 12 ? 758 : quantity >= 6 ? 768 : 788;

  const render = () => {
    const count = q(".cart-count"),
      total = q("[data-cart-total]"),
      items = q("[data-cart-items]");
    if (!count || !total || !items) return;
    count.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    total.textContent = fmt(
      cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    );
    items.innerHTML = cart.length
      ? cart
          .map(
            (item, index) =>
              `<div class="cart-item"><div>${item.name}<small>${fmt(item.price)} × ${item.qty}</small><div class="cart-adjust"><button type="button" data-cart-change="-1" data-cart-index="${index}" aria-label="${words.minus}">−</button><span>${item.qty}</span><button type="button" data-cart-change="1" data-cart-index="${index}" aria-label="${words.plus}">＋</button><button type="button" class="cart-remove" data-cart-remove="${index}">${words.remove}</button></div></div><b>${fmt(item.price * item.qty)}</b></div>`,
          )
          .join("")
      : `<div class="cart-item">${words.empty}</div>`;
    document.querySelectorAll("[data-cart-change]").forEach(
      (button) =>
        (button.onclick = () => {
          const item = cart[+button.dataset.cartIndex];
          if (!item) return;
          item.qty += +button.dataset.cartChange;
          if (item.qty <= 0) cart.splice(+button.dataset.cartIndex, 1);
          else if (item.name === "Life") item.price = lifeUnitPrice(item.qty);
          save();
          render();
        }),
    );
    document.querySelectorAll("[data-cart-remove]").forEach(
      (button) =>
        (button.onclick = () => {
          cart.splice(+button.dataset.cartRemove, 1);
          save();
          render();
        }),
    );
  };

  const add = (name, price, quantity = 1) => {
    const item = cart.find((entry) => entry.name === name);
    if (item) {
      item.qty += quantity;
      if (name === "Life") item.price = lifeUnitPrice(item.qty);
    } else cart.push({ name, price, qty: quantity });
    save();
    render();
    q(".cart-panel")?.classList.add("open");
  };
  const syncControl = (control) =>
    (control.querySelector("[data-quantity-value]").textContent =
      control.dataset.lifeQuantity || control.dataset.quantity);
  const updateLife = () => {
    const control = q("[data-life-quantity]");
    if (!control) return;
    const quantity = +control.dataset.lifeQuantity,
      unitPrice = lifeUnitPrice(quantity);
    q("[data-life-price]").textContent = fmt(quantity * unitPrice);
    q("[data-life-summary]").textContent =
      `${quantity} 盒 · ${fmt(unitPrice)}／盒`;
  };
  document.querySelectorAll("[data-quantity-control]").forEach((control) => {
    syncControl(control);
    control.querySelectorAll("[data-quantity-change]").forEach(
      (button) =>
        (button.onclick = () => {
          const property = control.hasAttribute("data-life-quantity")
            ? "lifeQuantity"
            : "quantity";
          control.dataset[property] = Math.max(
            1,
            +control.dataset[property] + +button.dataset.quantityChange,
          );
          syncControl(control);
          if (property === "lifeQuantity") updateLife();
        }),
    );
  });
  updateLife();
  const lifeAdd = q("[data-life-add]");
  if (lifeAdd)
    lifeAdd.onclick = () => {
      const quantity = +q("[data-life-quantity]").dataset.lifeQuantity;
      add("Life", lifeUnitPrice(quantity), quantity);
    };
  document.querySelectorAll("[data-product]").forEach(
    (button) =>
      (button.onclick = () => {
        const control = button
          .closest(".product")
          ?.querySelector("[data-quantity-control]");
        add(
          button.dataset.product,
          +button.dataset.price,
          +(control?.dataset.quantity || 1),
        );
      }),
  );
  document
    .querySelectorAll("[data-open-cart]")
    .forEach(
      (button) =>
        (button.onclick = () => q(".cart-panel")?.classList.add("open")),
    );
  const close = q("[data-close-cart]");
  if (close) close.onclick = () => q(".cart-panel")?.classList.remove("open");
  render();
})();
