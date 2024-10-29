import { Box, BoxProps, Typography } from '@mui/material';
import { usePerformanceStyles } from './usePerformanceStyles';
import { useEffect, useState } from 'react';
import Banner1 from './assets/001.png';
import Banner2 from './assets/002.png';
import useCounterAnimation from 'modules/dashboard/hooks/useCounterAnimation';

const items = [
  {
    banner:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTF86J58O8LUUIBXpbq63UYzKD2U8B5rAd1A&s',
    title: 'Real User Growth Highly Boosted',
    desc: "Banana TV, enabled by OpenAD's accurate targeted advertising strategy, obtained a large number of real high-quality user traffic.",
    data: [
      [10, 'User Retention Rate'],
      [60, 'Conversion Rate of Effective Users'],
    ],
    image: Banner1,
  },
  {
    banner:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTF86J58O8LUUIBXpbq63UYzKD2U8B5rAd1A&s',
    title: 'Smart Ads Make Monetization Easy',
    desc: '“The platform’s intelligent ad delivery and transparent revenue-sharing mechanism have made it easy for us to maximize our ad revenue.”',
    data: [[90, 'Interaction Rate Over Industry Average']],
    image: Banner2,
  },
];

function Counter({
  targetValue,
  duration,
}: {
  targetValue: number;
  duration?: number;
}) {
  const { currentValue } = useCounterAnimation(targetValue, duration);

  return currentValue;
}

export function Performance({ sx }: Pick<BoxProps, 'sx'>): JSX.Element {
  const { classes } = usePerformanceStyles();

  const [currentIndex, setCurrentIndex] = useState(0);

  // const nextImage = () => {
  //   setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
  // };

  // const prevImage = () => {
  //   setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
  // };

  useEffect(() => {
    const intervel = setInterval(() => {
      setCurrentIndex(index => (index + 1) % 2);
    }, 5000);

    return () => {
      clearInterval(intervel);
    };
  }, []);

  return (
    <Box className={classes.root} sx={sx}>
      <Typography variant="h1">{`Real Growth Performance`}</Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        key={`banner_${currentIndex}`}
      >
        <div className={classes.carouselItem}>
          <div className={classes.innerLeftBox}>
            <div
              style={{
                animation:
                  'fadeInFromLeft 1s forwards ease-in, fadeInFromRight 1s forwards ease-out 4s',
              }}
            >
              <h3>{items[currentIndex].title}</h3>
              <p>{items[currentIndex].desc}</p>

              <ul className={classes.dataList}>
                {items[currentIndex].data.map((item, index) => {
                  const percent = item[0] as number;
                  const duration = percent < 20 ? 700 : undefined;

                  return (
                    <li key={index}>
                      <h3>
                        <Counter targetValue={percent} duration={duration} />%
                      </h3>
                      <p>{item[1]}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <img
            src={items[currentIndex].image}
            style={{
              border: 'none',
              outline: 'none',
              animation: 'fadeIn 0.5s forwards, fadeOut 0.5s forwards 4.5s',
            }}
          />
        </div>

        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            mt: 2,
          }}
        >
          <Button
            variant="contained"
            onClick={prevImage}
            disabled={currentIndex === 0}
          >
            Prev
          </Button>
          <Button
            variant="contained"
            onClick={nextImage}
            disabled={currentIndex === items.length - 1}
          >
            Next
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
}
