import { Box, BoxProps, Button, Typography } from '@mui/material';
import { useAdsFormatsStyles } from './useAdsFormatsStyles';
import { Fragment, useEffect, useState } from 'react';
import AdsBanner1 from './assets/12.png';
import AdsBanner2 from './assets/133.png';
import AdsBanner3 from './assets/9898.png';
import Banner001 from './assets/001.png';
import Banner002 from './assets/002.png';
import Banner003 from './assets/003.png';
import Banner004 from './assets/004.png';
import Banner005 from './assets/005.png';
import Banner006 from './assets/006.png';
import Banner007 from './assets/007.png';

const groupItems = ['Banner Ads', 'Interactive Ads', 'Task Ads'];

const descItems = [
  'Deliver visually appealing, memorable ads that effectively engage your audience among multiple mini app scenarios.',
  'Provide interactive, multi-scenario in-app ads and allow users to gain additional chance to continue the game, leading real quality users to stay longer and learn more about your product through immersive, action-driven experiences.',
  'Without disrupting the original app experience, we seamlessly embed tasks within apps scenarios, offering premium, rotating ad content for users to earn rewards like points by viewing designated ads.',
];

const bannerItems = [AdsBanner1, AdsBanner2, AdsBanner3];

function PreloadImages({ images }: { images: string[] }): JSX.Element {
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return <></>;
}

export function AdsFormats({ sx }: Pick<BoxProps, 'sx'>): JSX.Element {
  const { classes, cx } = useAdsFormatsStyles();
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
        <PreloadImages images={bannerItems} />

        <Box
          component="div"
          position="relative"
          key={`adsImg_${tabIndex}`}
          // sx={{ animation: 'fadeIn 1s forwards' }}
        >
          {tabIndex === 0 && (
            <Fragment>
              <Box
                component="img"
                src={Banner001}
                sx={theme => ({
                  position: 'absolute',
                  width: theme.typography.pxToRem(210),
                  animation: 'fadeIn001 1s forwards',
                  '@keyframes fadeIn001': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateX(-15%)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                })}
              />
              <Box
                component="img"
                src={Banner002}
                sx={theme => ({
                  position: 'absolute',
                  width: theme.typography.pxToRem(210),
                  left: theme.typography.pxToRem(194),
                  top: theme.typography.pxToRem(10),
                  animation: 'fadeIn002 1s forwards',
                  '@keyframes fadeIn002': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateX(15%)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                })}
              />
            </Fragment>
          )}

          {tabIndex === 1 && (
            <Fragment>
              <Box
                component="img"
                src={Banner003}
                sx={theme => ({
                  position: 'absolute',
                  width: theme.typography.pxToRem(210),
                  animation: 'fadeIn003 1s forwards',
                  '@keyframes fadeIn003': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateX(-15%)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                })}
              />
              <Box
                component="img"
                src={Banner004}
                sx={theme => ({
                  position: 'absolute',
                  width: theme.typography.pxToRem(210),
                  left: theme.typography.pxToRem(194),
                  top: theme.typography.pxToRem(10),
                  animation: 'fadeIn004 1s forwards',
                  '@keyframes fadeIn004': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateX(15%)',
                    },
                    '70%': {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                    '100%': {
                      opacity: 0,
                    },
                  },
                })}
              />
              <Box
                component="img"
                src={Banner005}
                sx={theme => ({
                  position: 'absolute',
                  width: theme.typography.pxToRem(210),
                  left: theme.typography.pxToRem(194),
                  top: theme.typography.pxToRem(10),
                  opacity: 0,
                  animation: 'fadeIn005 1s forwards 1s',
                  '@keyframes fadeIn005': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateX(15%)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                })}
              />
            </Fragment>
          )}

          {tabIndex === 2 && (
            <Fragment>
              <Box
                component="img"
                src={Banner006}
                sx={theme => ({
                  position: 'absolute',
                  width: theme.typography.pxToRem(210),
                  animation: 'fadeIn006 1.8s forwards',
                  '@keyframes fadeIn006': {
                    '0%': {
                      // opacity: 0,
                      transform: 'translateX(-15%)',
                    },
                    '100%': {
                      // opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                })}
              />
              <Box
                component="img"
                src={Banner007}
                sx={theme => ({
                  position: 'absolute',
                  width: theme.typography.pxToRem(210),
                  left: theme.typography.pxToRem(164),
                  top: theme.typography.pxToRem(24),
                  animation: 'fadeIn007 1.8s forwards',
                  '@keyframes fadeIn007': {
                    '0%': {
                      // opacity: 0,
                      transform: 'translateX(15%)',
                    },
                    '100%': {
                      // opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                })}
              />
            </Fragment>
          )}
        </Box>

        <Box component="div" className={classes.adsTxtBox}>
          <Typography variant="h3">{groupItems[tabIndex]}</Typography>
          <Typography>{descItems[tabIndex]}</Typography>
        </Box>
      </div>
    </Box>
  );
}
