document.querySelectorAll('.copy-ip').forEach(btn => {
  btn.addEventListener('click', async () => {
    const value = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      const old = btn.textContent;
      btn.textContent = 'IP copiado!';
      setTimeout(() => btn.textContent = old, 1200);
    } catch (e) {
      alert('IP: ' + value);
    }
  });
});
