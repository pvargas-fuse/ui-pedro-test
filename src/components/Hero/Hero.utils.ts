import type { ReactNode } from 'react';

export const hasRenderableContent = (value?: ReactNode) => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  return true;
};
