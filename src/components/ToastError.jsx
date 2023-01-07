import { toast } from 'react-toastify';

export const ToastError = msg => {
  if (document.documentElement.classList.value === 'dark') {
    toast.error(msg, {
      theme: 'dark'
    });
  } else {
    toast.error(msg, {
      theme: 'light'
    });
  }
};
