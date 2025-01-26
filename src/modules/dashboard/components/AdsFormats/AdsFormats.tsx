import { Box, BoxProps, Button, Typography } from '@mui/material';
import { useAdsFormatsStyles } from './useAdsFormatsStyles';
import { useEffect, useState } from 'react';
import Video1 from './assets/1.webm';
import Video2 from './assets/2.webm';
// import Video3 from './assets/3.webm';
import Video4 from './assets/4.webm';

const groupItems = ['Banner Ads', 'Interactive Ads', 'OneLink'];

const descItems = [
  'Deliver visually appealing, memorable ads that effectively engage your audience among multiple mini app scenarios.',
  'Provide interactive, multi-scenario in-app ads and allow users to gain additional chance to continue the game, leading real quality users to stay longer and learn more about your product through immersive, action-driven experiences.',
  // 'Without disrupting the original app experience, we seamlessly embed tasks within apps scenarios, offering premium, rotating ad content for users to earn rewards like points by viewing designated ads.',
  "OneLink is an innovative AI-powered mini-program designed to simplify and accelerate traffic exchange for your projects.",
  "One-to-Many Traffic Exchange allows you to easily access OpenAD's vast, ever-updating traffic pool through a single, efficient deployment."
];

const videos = [Video1, Video2, Video4];

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

const goTo = () => {
  console.log(222)
  // const button = document.getElementById('goToJoinUs');

  // // 添加点击事件监听器
  // button.addEventListener('click', function () {
  // 	// 跳转到新的页面
  // 	// window.location.href = 'https://forms.gle/B1YDRPhbEfczmnSH6'; // 将网址替换为你想跳转到的页面
  	window.open('https://forms.gle/B1YDRPhbEfczmnSH6', '_blank');
  // });
};

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
        {groupItems.map((item, index) => {
          if(index=== 2){
            return (
              <Button
                key={item}
                className={cx({ active: index === tabIndex }, 'btnOrange')}
                onMouseEnter={() => setTabIndex(index)}
                sx={{
                  // backgroundColor: '#ef9d17 !important',
                  // color: '#fff !important',
                  '&:hover': {
                    backgroundColor: '#ef9d17 !important',
                    color: '#fff',
                  },
                  '&.active': {
                    backgroundColor: '#ef9d17 !important',
                    color: '#fff',
                  },
                }}
              >
                {item}<svg width="23" height="22" viewBox="0 0 23 22" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.00272 12.6021H5.31314C4.83143 12.6021 4.49914 12.1199 4.67055 11.6701L8.33676 2.04691C8.38636 1.91672 8.47434 1.80467 8.58906 1.7256C8.70377 1.64653 8.83979 1.60419 8.97912 1.60416H15.1657C15.6538 1.60416 15.9866 2.09871 15.8023 2.55085L13.6676 7.79052H17.6863C18.2773 7.79052 18.5927 8.48719 18.2028 8.93131L8.35005 20.1582C7.87109 20.7041 6.98307 20.2311 7.16893 19.5291L9.00272 12.6021Z"
							fill="currentColor" />
					</svg>
              </Button>
            )

          }else{
            return (
              <Button
                key={item}
                className={cx({ active: index === tabIndex })}
                onMouseEnter={() => setTabIndex(index)}
              >
                {item}
              </Button>
            )
          }
          
        })}
      </Box>

      <div className={classes.adsBox}>
        <PreloadImages images={videos} />

        <Box
          component="div"
          position="relative"
          display="flex"
          alignItems="center"
          key={`adsImg_${tabIndex}`}
        >
          <video autoPlay muted loop playsInline>
            <source src={videos[tabIndex]} type="video/webm" />
          </video>
        </Box>

        <Box component="div" className={classes.adsTxtBox}>
          <Typography variant="h3">{groupItems[tabIndex]}</Typography>
          {/* <Typography>{descItems[tabIndex]}</Typography> */}
          <Typography>
            {
              tabIndex === 2 ?
                <span>
                  <span style={{
                    display: 'block',
                    marginBottom: '1rem'
                  }}>{descItems[tabIndex]}</span>
                  <span>{descItems[tabIndex + 1]}</span>
                  <span className={classes.buttonGroup}
                    style={{
                      display: 'block',
                      marginBottom: '1rem'
                    }}
                  ><Button
                    className={'btnOrange'}
                    onClick={() => goTo()}
                    sx={{
                      backgroundColor: '#ef9d17 !important',
                      color: '#fff !important',
                    }}
                  >
                      {groupItems[tabIndex]}
                    </Button>
                  </span>
                </span> :
                descItems[tabIndex]
            }
          </Typography>
        </Box>
      </div>
    </Box>
  );
}
