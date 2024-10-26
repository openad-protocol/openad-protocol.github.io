import { Box, BoxProps, Button, Typography } from '@mui/material';
import { useAdsFormatsStyles } from './useAdsFormatsStyles';
import { useEffect, useState } from 'react';
import Video1 from './assets/1.webm';
import Video2 from './assets/2.webm';
import Video3 from './assets/3.webm';

const groupItems = ['Banner Ads', 'Interactive Ads', 'Task Ads'];

const descItems = [
  'Deliver visually appealing, memorable ads that effectively engage your audience among multiple mini app scenarios.',
  'Provide interactive, multi-scenario in-app ads and allow users to gain additional chance to continue the game, leading real quality users to stay longer and learn more about your product through immersive, action-driven experiences.',
  'Without disrupting the original app experience, we seamlessly embed tasks within apps scenarios, offering premium, rotating ad content for users to earn rewards like points by viewing designated ads.',
];

const videos = [Video1, Video2, Video3];

function PreloadImages({ images }: { images: string[] }): JSX.Element {
  useEffect(() => {
    images.forEach(src => {
      const preloadVideo = document.createElement('video');
      preloadVideo.src = src;
      preloadVideo.preload = 'auto'; // 设置为自动预加载
    });
  }, [images]);

  return <></>;
}

export function AdsFormats({ sx }: Pick<BoxProps, 'sx'>): JSX.Element {
  const { classes, cx } = useAdsFormatsStyles();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box id="for-advertiser" className={classes.root} sx={sx}>
      <Typography variant="h1">
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
        {`offers various ads formats`}
      </Typography>

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
        <PreloadImages images={videos} />

        <Box component="div" position="relative" key={`adsImg_${tabIndex}`}>
          <video autoPlay muted>
            <source src={videos[tabIndex]} type="video/webm" />
          </video>
        </Box>

        <Box component="div" className={classes.adsTxtBox}>
          <Typography variant="h3">{groupItems[tabIndex]}</Typography>
          <Typography>{descItems[tabIndex]}</Typography>
        </Box>
      </div>
    </Box>
  );
}
