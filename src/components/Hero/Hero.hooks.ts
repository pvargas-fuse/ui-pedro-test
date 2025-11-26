import { useCallback } from 'react';
import type { HeroProps } from './Hero.types';

export const useHero = (
  props: Pick<HeroProps, 'onPrimaryAction' | 'onSecondaryAction'>
) => {
  const { onPrimaryAction, onSecondaryAction } = props;

  const handlePrimaryAction = useCallback(() => {
    if (onPrimaryAction) onPrimaryAction();
  }, [onPrimaryAction]);

  const handleSecondaryAction = useCallback(() => {
    if (onSecondaryAction) onSecondaryAction();
  }, [onSecondaryAction]);

  return {
    handlePrimaryAction,
    handleSecondaryAction,
  };
};
