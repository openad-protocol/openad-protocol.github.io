import { BoxProps, List, ListItem } from '@mui/material';
import { useSocialStyles } from './useSocialStyles';
import { FacebookIcon, TelegramIcon, UnknownIcon } from 'modules/common/icons';
import { DOC_LINK } from 'modules/common/const';

const soscialItems = [
  { icon: TelegramIcon, link: 'https://t.me/OpenAD_protocol' },
  { icon: FacebookIcon, link: 'https://x.com/OpenAD_Protocol' },
  { icon: UnknownIcon, link: DOC_LINK },
];

export function Social({ sx }: Pick<BoxProps, 'sx'>): JSX.Element {
  const { classes } = useSocialStyles();

  return (
    <List className={classes.root} sx={sx}>
      {soscialItems.map((item, index) => (
        <ListItem disablePadding key={index} sx={{ width: { xs: 'auto' } }}>
          <a href={item.link} target="_blank">
            <item.icon />
          </a>
        </ListItem>
      ))}
    </List>
  );
}
