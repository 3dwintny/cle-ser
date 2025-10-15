import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: ReactNode;
}

interface CardHeaderProps {
  className?: string;
  children: ReactNode;
}

interface CardBodyProps {
  className?: string;
  children: ReactNode;
}

interface CardFooterProps {
  className?: string;
  children: ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn('rounded-2xl border border-gray-200 bg-white shadow-sm', className)}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <div className={cn('p-6 pb-4', className)}>
      {children}
    </div>
  );
}

export function CardBody({ className, children }: CardBodyProps) {
  return (
    <div className={cn('px-6 py-4', className)}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children }: CardFooterProps) {
  return (
    <div className={cn('p-6 pt-4', className)}>
      {children}
    </div>
  );
}