import type { AppProps } from 'next/app';
import { AuthProvider } from '@/contexts/auth.context';
import { ToastProvider } from '@/contexts/toast.context';
import '@/styles/globals.css';
import { BasketProvider } from '@/contexts/basket.context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <AuthProvider>
        <BasketProvider>
          <Component {...pageProps} />
        </BasketProvider>
      </AuthProvider>
    </ToastProvider>
  );
}
