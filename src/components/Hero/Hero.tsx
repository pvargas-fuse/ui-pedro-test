import { hasRenderableContent } from './Hero.utils';
import { useHero } from './Hero.hooks';
import cn from 'classnames';
import styles from './Hero.module.scss';
import type { FC } from 'react';
import type { HeroProps } from './Hero.types';

export const Hero: FC<HeroProps> = (props) => {
  const {
    children,
    className,
    onPrimaryAction,
    onSecondaryAction,
    primaryActionLabel,
    secondaryActionLabel,
    subtitle,
    title,
    ...rest
  } = props;

  const { handlePrimaryAction, handleSecondaryAction } = useHero({
    onPrimaryAction,
    onSecondaryAction,
  });

  const showActions =
    Boolean(primaryActionLabel) || Boolean(secondaryActionLabel);

  const testId = rest.testId || 'hero';
  const headerTestId = `${testId}-header`;
  const mainTestId = `${testId}.main`;
  const actionsTestId = `${testId} actions`;

  return (
    <div data-testid={testId} className={cn(styles.root, className)} {...rest}>
      {(hasRenderableContent(title) || hasRenderableContent(subtitle)) && (
        <header className={styles.header} data-testid={headerTestId}>
          {hasRenderableContent(title) && (
            <h1 className={styles.title}>{title}</h1>
          )}
          {hasRenderableContent(subtitle) && (
            <p className={styles.subtitle}>{subtitle}</p>
          )}
        </header>
      )}

      <main className={styles.main} data-testid={mainTestId}>
        {children}
      </main>

      {showActions && (
        <div className={styles.actions} data-testid={actionsTestId}>
          <div>
            {secondaryActionLabel && (
              <button type="button" onClick={handleSecondaryAction}>
                {secondaryActionLabel}
              </button>
            )}
            {primaryActionLabel && (
              <button type="button" onClick={handlePrimaryAction}>
                {primaryActionLabel}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
