interface DialogOptions<T> {
  data: T;
  content: (close: () => void) => HTMLElement;
  onClose?: () => void;
}

export function createDialog<T>(options: DialogOptions<T>): HTMLElement {
  const backdrop = document.createElement('div');
  backdrop.className = 'dialog-backdrop';

  const dialog = document.createElement('div');
  dialog.className = 'dialog';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');

  const close = () => {
    backdrop.classList.remove('dialog-backdrop--open');

    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== dialog) return;
      dialog.removeEventListener('transitionend', handleTransitionEnd);
      backdrop.remove();
      options.onClose?.();
    };

    dialog.addEventListener('transitionend', handleTransitionEnd);
  };

  const content = options.content(close);
  dialog.appendChild(content);

  backdrop.appendChild(dialog);
  document.body.appendChild(backdrop);

  requestAnimationFrame(() => {
    backdrop.classList.add('dialog-backdrop--open');
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') close();
  };
  document.addEventListener('keydown', handleEscape);

  backdrop.addEventListener(
    'transitionend',
    () => {
      if (!backdrop.isConnected) {
        document.removeEventListener('keydown', handleEscape);
      }
    },
    { once: true },
  );

  return backdrop;
}
