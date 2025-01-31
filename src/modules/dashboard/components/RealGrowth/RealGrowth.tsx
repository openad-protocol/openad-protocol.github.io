import { Box, BoxProps, List, ListItem, Typography } from '@mui/material';
import { useRealGrowthStyles } from './useRealGrowthStyles';
import Icon1 from './assets/001.svg?react';
import Icon2 from './assets/002.svg?react';
import Icon3 from './assets/003.svg?react';
import Banner from './assets/99.png';

const items = [
  {
    icon: Icon1,
    title: 'Make sure to reach out to real users',
    desc: 'We employ advanced anti-bot measures to ensure real user engagement and prevent fraudulent activity.',
  },
  {
    icon: Icon2,
    title: '24/7 and omni-channel coverage',
    desc: 'OpenAD Protocol has abundant apps and projects to cover all scenarios and help seamlessly connect you and your target audience.',
  },
  {
    icon: Icon3,
    title: 'Learn from campaign reports for better returns',
    desc: 'Maximize the impact of every budget spent with highly efficient ad campaigns that deliver real value for your investment.',
  },
];

export function RealGrowth({ sx }: Pick<BoxProps, 'sx'>): JSX.Element {
  const { classes } = useRealGrowthStyles();

  return (
    <Box className={classes.root} sx={sx}>
      <Typography variant="h1">
        {'Leverage '}
        {`Open`}
        <Typography
          sx={theme => ({
            display: 'contents !important',
            color: theme.palette.primary.main,
            fontSize: theme.typography.pxToRem(64),
            fontWeight: 700,
            whiteSpace: 'pre-wrap',

            [theme.breakpoints.down('sm')]: {
              fontSize: theme.typography.pxToRem(32),
            },
          })}
        >
          AD
        </Typography>{' '}
        {`Protocol for Real Growth`}
      </Typography>

      <div className={classes.gridBox}>
        <List className={classes.pointsBox}>
          {items.map(item => (
            <ListItem key={item.title} disablePadding>
              <item.icon />
              <Typography variant="h3">{item.title}</Typography>
              <Typography>{item.desc}</Typography>
            </ListItem>
          ))}
        </List>

        <img className={classes.banner} src={Banner} />
      </div>
    </Box>
  );
}
