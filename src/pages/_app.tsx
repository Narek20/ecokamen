import type { AppProps } from 'next/app';
import { AuthProvider } from '@/contexts/auth.context';
import { ToastProvider } from '@/contexts/toast.context';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ToastProvider>
  );
}
