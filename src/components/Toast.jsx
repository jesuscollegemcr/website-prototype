import React from 'react';
import { IconCheck } from './Icons';

export default function Toast({ toasts, removeToast }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast">
          <IconCheck size={18} style={{ color: 'var(--color-gold-light)', flexShrink: 0 }} />
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
