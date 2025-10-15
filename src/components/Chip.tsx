import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ChipProps {
  className?: string;
  children: ReactNode;
  variant?: 'default' | 'accent';
}

export default function Chip({ className, children, variant = 'default' }: ChipProps) {
  const baseClasses = 'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium';

  const variantClasses = {
    default: 'bg-gray-200 text-gray-900',
    accent: 'bg-blue-100 text-blue-500'
  };

  return (
    <span className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </span>
  );
}