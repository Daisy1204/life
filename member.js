(() => {
  const key = 'on-member-profile';
  const form = document.querySelector('[data-member-form]');
  const saved = document.querySelector('[data-member-saved]');
  if (!form || !saved) return;
  const name = document.querySelector('[data-member-name]');
  const email = document.querySelector('[data-member-email]');
  const phone = document.querySelector('[data-member-phone]');
  const english = document.documentElement.lang.startsWith('en');
  const profile = JSON.parse(localStorage.getItem(key) || 'null');
  const show = data => {
    form.hidden = !!data;
    saved.hidden = !data;
    if (data) saved.querySelector('[data-member-greeting]').textContent = english ? `Welcome, ${data.name}.` : `${data.name}，歡迎加入。`;
  };
  if (profile) show(profile);
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = { name: name.value.trim(), email: email.value.trim(), phone: phone.value.trim() };
    localStorage.setItem(key, JSON.stringify(data));
    show(data);
  });
  document.querySelector('[data-member-edit]')?.addEventListener('click', () => {
    const data = JSON.parse(localStorage.getItem(key) || 'null');
    if (data) { name.value = data.name || ''; email.value = data.email || ''; phone.value = data.phone || ''; }
    show(null);
  });
  document.querySelector('[data-member-clear]')?.addEventListener('click', () => { localStorage.removeItem(key); form.reset(); show(null); });
})();
