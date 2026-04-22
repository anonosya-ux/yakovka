'use client';

import Link from 'next/link';
import { AlertTriangle, Home, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-amber-600" />
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-stone-900 mb-4">
          Что-то пошло не так
        </h2>
        <p className="text-stone-500 text-lg mb-8 leading-relaxed">
          Произошла непредвиденная ошибка. Попробуйте обновить страницу или вернуться на главную.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={reset}
            size="lg"
            className="bg-primary text-white hover:bg-stone-900 rounded-2xl py-6 px-8 font-bold"
          >
            <RotateCcw className="mr-2 w-4 h-4" />
            Попробовать снова
          </Button>
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-stone-200 rounded-2xl py-6 px-8 font-bold"
            >
              <Home className="mr-2 w-4 h-4" />
              На главную
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
