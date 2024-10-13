import { Box, BoxProps, Button, Typography } from '@mui/material';
import { useForAdvertiserStyles } from './useForAdvertiserStyles';
import { useState } from 'react';
import AdsBanner1 from './assets/12.png';
import AdsBanner2 from './assets/133.png';
import AdsBanner3 from './assets/9898.png';
import AdsFloating1 from './assets/float-item-1.png';
import AdsFloating2 from './assets/float-item-2.png';
import AdsFloating3 from './assets/float-item-3.png';
import AdsFloating4 from './assets/float-item-4.png';
import AdsFloating5 from './assets/float-item-5.png';
import AdsFloating6 from './assets/float-item-6.png';

const groupItems = ['Banner Ads', 'Interactive Ads', 'Task Ads'];

const descItems = [
  'To create memorable and visually appealing ads that resonate with mini-app users, focus on captivating design and clear messaging',
  'TUnlock your next level by watching a quick video—gain an extra chance to continue the adventure!',
  'Turn ads into tasks—engage your users while they earn rewards for completing simple actions!',
];

const bannerItems = [AdsBanner1, AdsBanner2, AdsBanner3];

const floatingItems = [
  [AdsFloating1, AdsFloating2],
  [AdsFloating3, AdsFloating4],
  [AdsFloating5, AdsFloating6],
];

const floatingPositions = [
  [300, 0],
  [0, 260],
  [0, 260],
];

export function ForAdvertiser({ sx }: Pick<BoxProps, 'sx'>): JSX.Element {
  const { classes, cx } = useForAdvertiserStyles();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box id="for-advertiser" className={classes.root} sx={sx}>
      <Typography variant="h1">{`OpenAD offers various ads formats`}</Typography>

      <Box component="div" className={classes.buttonGroup}>
        {groupItems.map((item, index) => (
          <Button
            key={item}
            className={cx({ active: index === tabIndex })}
            onMouseEnter={() => setTabIndex(index)}
          >
            {item}
          </Button>
        ))}
      </Box>

      <div className={classes.adsBox}>
        <Box
          component="div"
          position="relative"
          key={`adsImg_${tabIndex}`}
          sx={{ animation: 'fadeIn 1s forwards' }}
        >
          <img className={classes.adsBg} src={bannerItems[tabIndex]} />

          <Box
            component="img"
            className={cx(classes.adsFloating, 'up')}
            src={floatingItems[tabIndex][0]}
            sx={theme => ({
              left: theme.typography.pxToRem(floatingPositions[tabIndex][0]),
            })}
          />
          <Box
            component="img"
            className={cx(classes.adsFloating, 'down')}
            src={floatingItems[tabIndex][1]}
            sx={theme => ({
              left: theme.typography.pxToRem(floatingPositions[tabIndex][1]),
            })}
          />
        </Box>

        <Box component="div" className={classes.adsTxtBox}>
          <Typography variant="h3">{groupItems[tabIndex]}</Typography>
          <Typography>{descItems[tabIndex]}</Typography>
        </Box>
      </div>
    </Box>
  );
}
