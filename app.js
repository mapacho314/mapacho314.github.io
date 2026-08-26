/**
 * Dr. Mariana Vázquez Pacho, PhD — Executive Landing Page & CV Logic
 * Features: Bilingual Switcher (EN/ES), Theme Toggle, Dynamic Filters, BibTeX Copy, Email Copy
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Current Year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Language Switcher Engine
  const langToggle = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');
  const htmlElement = document.documentElement;

  // Determine initial language (saved > browser > 'es')
  const savedLang = localStorage.getItem('executive_lang') || 
    (navigator.language && navigator.language.startsWith('en') ? 'en' : 'es');

  function applyLanguage(lang) {
    const dict = typeof translations !== 'undefined' && translations[lang] ? translations[lang] : null;
    if (!dict) return;

    htmlElement.setAttribute('lang', lang);

    // Update all elements with data-i18n
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        // Use innerHTML to preserve bold/italic/links formatting in strings
        if (el.tagName === 'META') {
          el.setAttribute('content', dict[key]);
        } else if (el.tagName === 'TITLE') {
          document.title = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });

    // Update Language Toggle Button UI
    if (langLabel) {
      langLabel.textContent = lang === 'es' ? 'EN' : 'ES';
    }
    if (langToggle) {
      langToggle.setAttribute('title', dict.langToggleTitle || (lang === 'es' ? 'Switch to English' : 'Cambiar a Español'));
      langToggle.setAttribute('aria-label', dict.langToggleTitle || 'Switch language');
    }

    // Update Phone Label if needed
    const labelPhone = document.getElementById('labelPhone');
    if (labelPhone) {
      labelPhone.textContent = lang === 'es' ? 'Teléfono:' : 'Phone:';
    }

    // Update Filter Label
    const filterLabel = document.getElementById('filterLabel');
    if (filterLabel) {
      filterLabel.textContent = lang === 'es' ? 'Filtro:' : 'Filter:';
    }

    localStorage.setItem('executive_lang', lang);
  }

  // Initialize Language
  applyLanguage(savedLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const currentLang = htmlElement.getAttribute('lang') || 'es';
      const nextLang = currentLang === 'es' ? 'en' : 'es';
      applyLanguage(nextLang);
      showToast(nextLang === 'en' ? 'Language switched to English' : 'Idioma cambiado a Español');
    });
  }

  // 3. Theme Toggle (Dark / Light)
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  const savedTheme = localStorage.getItem('executive_theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    localStorage.setItem('executive_theme', theme);
  }

  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      const isEn = htmlElement.getAttribute('lang') === 'en';
      showToast(isEn 
        ? `Theme switched to ${next === 'dark' ? 'dark' : 'light'} mode` 
        : `Tema cambiado a modo ${next === 'dark' ? 'oscuro' : 'claro'}`
      );
    });
  }

  // 4. Experience Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const timelineItems = document.querySelectorAll('.timeline-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      timelineItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || filter === category) {
          item.classList.remove('hidden');
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 50);
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // 5. Copy BibTeX Citation
  const citationButtons = document.querySelectorAll('.btn-citation');
  citationButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const citationText = btn.getAttribute('data-citation');
      if (!citationText) return;

      try {
        await navigator.clipboard.writeText(citationText);
        const indicator = btn.parentElement.querySelector('.copied-indicator');
        if (indicator) {
          indicator.classList.add('visible');
          setTimeout(() => {
            indicator.classList.remove('visible');
          }, 2500);
        }
        const isEn = htmlElement.getAttribute('lang') === 'en';
        showToast(isEn ? 'BibTeX citation copied to clipboard!' : '¡Cita BibTeX copiada al portapapeles!');
      } catch (err) {
        console.error('Error copying text:', err);
      }
    });
  });

  // 6. Copy Email Button
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  const emailText = 'mariana.vazquezpacho@gmail.com';
  const copiedEmailTag = document.getElementById('copiedEmailTag');

  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailText);
        if (copiedEmailTag) {
          copiedEmailTag.classList.add('visible');
          setTimeout(() => {
            copiedEmailTag.classList.remove('visible');
          }, 2500);
        }
        const isEn = htmlElement.getAttribute('lang') === 'en';
        showToast(isEn ? 'Email copied to clipboard!' : '¡Email copiado al portapapeles!');
      } catch (err) {
        console.error('Error copying email:', err);
      }
    });
  }

  // 7. Toast Notification Utility
  const toast = document.getElementById('toast');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
});
