import Image from 'next/image';
import { cn } from '@/lib/utils';

export function FWLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/Logo.png"
      alt="FWstudio"
      width={200}
      height={53}
      className={cn('w-auto', className)}
      priority
    />
  );
}
