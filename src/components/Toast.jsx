import React from 'react';

export default function Toast({ message, visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 transform transition-all duration-300 px-4 py-3 rounded-xl bg-inverse-surface text-inverse-on-surface flex items-center gap-2.5 shadow-xl border border-outline-variant/30 animate-bounce">
      <span className="material-symbols-outlined text-tertiary-fixed text-[20px] shrink-0">
        check_circle
      </span>
      <span className="font-body-sm text-body-sm font-medium flex-1 min-w-0 break-words">
        {message}
      </span>
      <button 
        onClick={onClose}
        className="ml-2 text-on-surface-variant hover:text-white shrink-0 p-1 cursor-pointer"
      >
        <span className="material-symbols-outlined text-[16px]">close</span>
      </button>
    </div>
  );
}
