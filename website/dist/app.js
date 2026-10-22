'use strict';
const modVersion = document.querySelector('#mod-version');
const gameVersion = document.querySelector('#game-version');
function updateCompatibility() {
  const source = modVersion.value;
  const target = gameVersion.value;
  document.querySelector('#compat-result-title').textContent = `${source}${source === '2.2' ? ' era' : ''} → ${target}`;
  document.querySelector('#compat-result-copy').textContent = `Bringing ${source === '2.2' ? '2.2-era' : source} mods to ${target} is a project goal. Compatibility has not been confirmed; individual mod and platform testing is still needed.`;
}
modVersion.addEventListener('change', updateCompatibility);
gameVersion.addEventListener('change', updateCompatibility);
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
