/**
 * Dr. Mariana Vázquez Pacho, PhD — Executive Landing Page & CV Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Current Year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Theme Toggle (Dark / Light)
  const htmlElement = document.documentElement;
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
      showToast(`Tema cambiado a modo ${next === 'dark' ? 'oscuro' : 'claro'}`);
    });
  }

  // 3. Experience Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const timelineItems = document.querySelectorAll('.timeline-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button state
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

  // 4. Copy BibTeX Citation
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
        showToast('¡Cita BibTeX copiada al portapapeles!');
      } catch (err) {
        console.error('Error al copiar texto:', err);
      }
    });
  });

  // 5. Copy Email Button
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  const emailText = 'marianapacho@gmail.com';
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
        showToast('¡Email copiado al portapapeles!');
      } catch (err) {
        console.error('Error al copiar email:', err);
      }
    });
  }

  // 6. Toast Notification Utility
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
