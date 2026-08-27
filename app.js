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

  // 5. BibTeX Citations Dictionary
  const bibtexCitations = {
    btnCopyBibtex1: [
      '@article{vazquez2025strategy,',
      '  title={From strategy to impact: how MNCs innovate their business models for social value in BoP contexts?},',
      '  author={V{\\\'a}zquez-Pacho, Mariana Guadalupe and Payaud, Marielle A.},',
      '  journal={Journal of Strategy and Management},',
      '  volume={18},',
      '  number={1},',
      '  pages={123--147},',
      '  year={2025},',
      '  publisher={Emerald Publishing Limited},',
      '  doi={10.1108/JSMA-06-2023-0145}',
      '}'
    ].join('\n'),

    btnCopyBibtex2: [
      '@incollection{vazquez2025blended,',
      '  title={Blended Value Proposition (BVP), Triple Bottom Line (TBL), Creating Shared Value (CSV) and Bottom of the Pyramid (BoP) Concepts: What Are the Differences? A Comparative Analysis Using Morse\'s Methodology},',
      '  author={V{\\\'a}zquez-Pacho, Mariana and Payaud, Marielle A.},',
      '  booktitle={Values in Contemporary International Business},',
      '  pages={94--129},',
      '  year={2025},',
      '  publisher={Routledge}',
      '}'
    ].join('\n'),

    btnCopyBibtex3: [
      '@incollection{vazquezpacho2023proposition,',
      '  title={Proposition de valeur mixte, triple bilan, cr{\\\'e}ation de valeur partag{\\\'e}e, et base de la pyramide, quelles diff{\\\'e}rences ? Une analyse comparative avec la m{\\\'e}thodologie de Morse},',
      '  author={V{\\\'a}zquez-Pacho, Mariana and Payaud, Marielle A.},',
      '  booktitle={Management international et valeurs},',
      '  editor={Goxe, Fran{\\c{c}}ois and Viegas-Pires, Micha{\\"e}l},',
      '  pages={115--156},',
      '  year={2023},',
      '  publisher={Vuibert}',
      '}'
    ].join('\n'),

    btnCopyBibtex4: [
      '@phdthesis{vazquezpacho2024these,',
      '  title={L\'organisation interne et externe des mod{\\`e}les d\'affaires des FMN pour la cr{\\\'e}ation de valeur mutuelle},',
      '  author={V{\\\'a}zquez-Pacho, Mariana Guadalupe},',
      '  year={2024},',
      '  school={Universit{\\\'e} Jean Moulin Lyon 3}',
      '}'
    ].join('\n')
  };

  // Robust Clipboard Copy Helper (works on HTTPS, localhost, file://)
  async function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (e) {
        console.warn('navigator.clipboard failed, trying execCommand fallback', e);
      }
    }
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    } catch (err) {
      console.error('Fallback execCommand failed:', err);
      textArea.remove();
      return false;
    }
  }

  // Copy BibTeX Citation
  const citationButtons = document.querySelectorAll('.btn-citation');
  citationButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const citationText = (bibtexCitations && bibtexCitations[btn.id]) || btn.getAttribute('data-citation');
      if (!citationText) return;

      const success = await copyTextToClipboard(citationText);
      if (success) {
        const indicator = btn.parentElement.querySelector('.copied-indicator');
        if (indicator) {
          indicator.classList.add('visible');
          setTimeout(() => {
            indicator.classList.remove('visible');
          }, 2500);
        }
        const isEn = htmlElement.getAttribute('lang') === 'en';
        showToast(isEn ? 'BibTeX citation copied to clipboard!' : '¡Cita BibTeX copiada al portapapeles!');
      }
    });
  });

  // 6. Copy Email Button
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  const emailText = 'mariana.vazquezpacho@gmail.com';
  const copiedEmailTag = document.getElementById('copiedEmailTag');

  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', async () => {
      const success = await copyTextToClipboard(emailText);
      if (success) {
        if (copiedEmailTag) {
          copiedEmailTag.classList.add('visible');
          setTimeout(() => {
            copiedEmailTag.classList.remove('visible');
          }, 2500);
        }
        const isEn = htmlElement.getAttribute('lang') === 'en';
        showToast(isEn ? 'Email copied to clipboard!' : '¡Email copiado al portapapeles!');
      }
    });
  }

  // 7. Mobile Navigation Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function closeMobileMenu() {
    if (mobileMenuBtn && mobileNavDrawer) {
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileNavDrawer.classList.remove('open');
    }
  }

  function toggleMobileMenu() {
    if (mobileMenuBtn && mobileNavDrawer) {
      const isOpen = mobileNavDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        mobileMenuBtn.classList.add('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        mobileNavDrawer.classList.add('open');
      }
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // Close mobile drawer when tapping any mobile nav link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close mobile menu on click outside
  document.addEventListener('click', (e) => {
    if (mobileNavDrawer && mobileNavDrawer.classList.contains('open')) {
      const isInsideNavbar = e.target.closest('#navbar');
      if (!isInsideNavbar) {
        closeMobileMenu();
      }
    }
  });

  // Close mobile menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });

  // Close mobile menu on window resize if larger than tablet breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });

  // 8. Toast Notification Utility
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
