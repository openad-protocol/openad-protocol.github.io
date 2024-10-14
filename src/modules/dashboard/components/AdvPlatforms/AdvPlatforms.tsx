import { Box, BoxProps, List, ListItem, Typography } from '@mui/material';
import { useAdvPlatformsStyles } from './useAdvPlatformsStyles';
import PlatformIcon1 from './assets/112.png';
import PlatformIcon2 from './assets/113.png';
import PlatformIcon3 from './assets/114.png';
import PlatformIcon4 from './assets/115.png';

const items = [
  {
    icon: PlatformIcon1,
    desc: 'Effectively promote your app to a fresh audience.',
    backgroundColor: '#FFF7E1',
  },
  {
    icon: PlatformIcon2,
    desc: 'Keep users active and engaged longer within your app.',
    backgroundColor: '#E9F0FE',
  },
  {
    icon: PlatformIcon3,
    desc: 'Increase exposure to potential users and drive higher interaction.',
    backgroundColor: '#FCE8E5',
  },
  {
    icon: PlatformIcon4,
    desc: 'Manage your advertising budget and strategy with complete autonomy.',
    backgroundColor: '#E7F4EB',
  },
];

export function AdvPlatforms({ sx }: Pick<BoxProps, 'sx'>): JSX.Element {
  const { classes } = useAdvPlatformsStyles();

  return (
    <Box id="features" className={classes.root} sx={sx}>
      <Typography variant="h1">{`One-stop Smart Adverstising Platform`}</Typography>

      <List className={classes.advBox}>
        {items.map(item => (
          <ListItem
            key={item.icon}
            sx={{ backgroundColor: item.backgroundColor }}
          >
            <img src={item.icon} />
            <Typography>{item.desc}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
