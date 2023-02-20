import { toast } from 'react-toastify';

export const ToastSuccess = msg => {
  if (document.documentElement.classList.value === 'dark') {
    toast.success(msg, {
      theme: 'dark'
    });
  } else {
    toast.success(msg, {
      theme: 'light'
    });
  }
};
