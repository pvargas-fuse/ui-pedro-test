import type { HTMLAttributes, ReactNode } from 'react';

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  title?: any;
  subtitle?: any;
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  children?: ReactNode;
}
