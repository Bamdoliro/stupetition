import { toast } from 'react-toastify';

export const useSuccesToast = (message: string) => {
  toast.success(message);
};

export const useErrorToast = (message: string) => {
  toast.error(message);
};
