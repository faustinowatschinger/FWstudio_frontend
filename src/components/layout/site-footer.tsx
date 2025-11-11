import Link from 'next/link';
import { cn } from '@/lib/utils';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn('py-6 md:px-8 md:py-0', className)}>
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} FWstudio. Todos los derechos reservados.
        </p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Política de Privacidad
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Términos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
}
