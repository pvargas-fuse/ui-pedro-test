import cn from 'classnames';
import type { FC } from 'react';

import { hasRenderableContent } from './Hero.utils';
import { useHero } from './Hero.hooks';
import styles from './Hero.module.scss';
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

  const showHeader =
    hasRenderableContent(title) || hasRenderableContent(subtitle);
  const showActions =
    Boolean(primaryActionLabel) || Boolean(secondaryActionLabel);

  const testId = 'hero';
  const headerTestId = `${testId}.header`;
  const mainTestId = `${testId}.main`;
  const actionsTestId = `${testId}.actions`;

  return (
    <div data-testid={testId} className={cn(styles.root, className)} {...rest}>
      {showHeader && (
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
        <div>{children}</div>
      </main>

      {showActions && (
        <div className={styles.actions} data-testid={actionsTestId}>
          {secondaryActionLabel && (
            <button type="button">{secondaryActionLabel}</button>
          )}
          {primaryActionLabel && (
            <button type="button">{primaryActionLabel}</button>
          )}
        </div>
      )}
    </div>
  );
};
