// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const right = document.querySelector('.header-right');
toggle.addEventListener('click', () => {
  const open = right.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

// Header turns solid violet when the page is scrolled
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Show or hide the yellow review notes
const notesButton = document.querySelector('.toggle-notes');
const applyNotes = (hidden) => {
  document.body.classList.toggle('hide-notes', hidden);
  notesButton.textContent = hidden ? 'Show notes' : 'Hide notes';
  notesButton.setAttribute('aria-pressed', String(hidden));
};
let hidden = false;
try { hidden = localStorage.getItem('hideNotes') === '1'; } catch (e) {}
applyNotes(hidden);
notesButton.addEventListener('click', () => {
  hidden = !hidden;
  applyNotes(hidden);
  try { localStorage.setItem('hideNotes', hidden ? '1' : '0'); } catch (e) {}
});

// Accessible tabs (Student Opportunities)
document.querySelectorAll('[role="tablist"]').forEach((list) => {
  const tabs = [...list.querySelectorAll('[role="tab"]')];
  const select = (tab, focus) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t, false));
    t.addEventListener('keydown', (e) => {
      let n = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === 'Home') n = tabs[0];
      if (e.key === 'End') n = tabs[tabs.length - 1];
      if (n) { e.preventDefault(); select(n, true); }
    });
  });
});

// Our Work filters
const filters = document.querySelector('.filters');
if (filters) {
  filters.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    filters.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    const f = b.dataset.filter;
    document.querySelectorAll('.project').forEach((p) => {
      p.hidden = !(f === 'all' || p.dataset.cats.split(' ').includes(f));
    });
  });
}

// Contact form (draft only)
const form = document.querySelector('form[data-draft]');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'This is a draft, so nothing was sent.';
  });
}
