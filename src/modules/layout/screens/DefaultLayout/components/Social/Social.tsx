import { BoxProps, List, ListItem } from '@mui/material';
import { useSocialStyles } from './useSocialStyles';
import { FacebookIcon, TelegramIcon, UnknownIcon } from 'modules/common/icons';

const soscialItems = [
  { icon: TelegramIcon, link: '' },
  { icon: FacebookIcon, link: '' },
  { icon: UnknownIcon, link: '' },
];

export function Social({ sx }: Pick<BoxProps, 'sx'>): JSX.Element {
  const { classes } = useSocialStyles();

  return (
    <List className={classes.root} sx={sx}>
      {soscialItems.map((item, index) => (
        <ListItem disablePadding key={index} sx={{ width: { xs: 'auto' } }}>
          <a>
            <item.icon />
          </a>
        </ListItem>
      ))}
    </List>
  );
}
