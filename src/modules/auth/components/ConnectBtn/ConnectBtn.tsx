import { useTranslation } from 'modules/i18n';

import { ButtonBase, Tooltip } from '@mui/material';
import { Spinner } from 'modules/common/components/Spinner';
import { translation } from './translation';
import { useConnectBtnStyles } from './useConnectBtnStyles';

export interface IConnectBtnProps {
  title: string;
  iconSlot?: JSX.Element;
  isDisabled?: boolean;
  isLoading?: boolean;
  link?: string;
  withInstallLabel?: boolean;
  tooltip?: string;
  onClick?: () => void;
}

export function ConnectBtn({
  title,
  iconSlot,
  isDisabled,
  isLoading,
  link,
  withInstallLabel,
  tooltip,
  onClick,
}: IConnectBtnProps): JSX.Element {
  const { t, keys } = useTranslation(translation);
  const { classes, cx } = useConnectBtnStyles();

  const props = link
    ? {
        component: 'a',
        href: link,
        target: '_blank',
        rel: 'noreferrer',
      }
    : {
        component: 'button',
        onClick,
      };

  const button = (
    <ButtonBase {...props} className={cx(classes.root)} disabled={isDisabled}>
      <i className={cx(classes.icon, isDisabled && classes.iconDisabled)}>
        {iconSlot}
      </i>

      {title}

      {isLoading ? (
        <Spinner size={20} />
      ) : (
        <span className={classes.label}>
          {t(withInstallLabel ? keys.install : keys.connect)}
        </span>
      )}
    </ButtonBase>
  );

  return tooltip ? (
    <Tooltip title={tooltip}>
      <span>{button}</span>
    </Tooltip>
  ) : (
    button
  );
}
