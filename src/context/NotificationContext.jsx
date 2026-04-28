import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const NotificationContext = createContext(null);

const TOAST_DURATION = 2200;

export const NotificationProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success') => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setToasts((currentToasts) => [...currentToasts, { id, message, type }]);

    window.setTimeout(() => {
      setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
    }, TOAST_DURATION);
  }, []);

  const value = useMemo(
    () => ({
      showToast,
    }),
    [showToast]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <div className="fixed right-4 bottom-4 z-50 flex w-full max-w-sm flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast-slide relative overflow-hidden rounded-2xl border bg-white px-4 py-3 text-sm shadow-[0_10px_30px_rgba(15,23,42,0.12)] ${
              toast.type === 'error'
                ? 'border-rose-200 text-rose-700'
                : 'border-slate-200 text-slate-700'
            }`}
          >
            <div
              className={`absolute left-0 top-0 h-full w-1 ${
                toast.type === 'error' ? 'bg-rose-400' : 'bg-slate-400'
              }`}
            />
            <p className="pl-2 text-sm font-medium">{toast.message}</p>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used inside NotificationProvider');
  }
  return context;
};
