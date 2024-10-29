import { Box, BoxProps, Typography } from '@mui/material';
import { usePerformanceStyles } from './usePerformanceStyles';
import { useCallback, useEffect, useState } from 'react';
import Banner1 from './assets/001.png';
import Banner2 from './assets/002.png';
import ScrollIcon from './assets/003.svg?react';
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

  const [update, setUpdate] = useState(0);

  useEffect(() => {
    const intervel = setInterval(() => {
      setCurrentIndex(index => (index + 1) % 2);
    }, 5000);

    return () => {
      clearInterval(intervel);
    };
  }, [update]);

  const onPrev = useCallback(() => {
    setUpdate(count => count + 1);
    setCurrentIndex(index => Math.abs(index - 1) % 2);
  }, []);

  const onNext = useCallback(() => {
    setUpdate(count => count + 1);
    setCurrentIndex(index => (index + 1) % 2);
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
      >
        <Box
          component="div"
          sx={theme => ({
            display: 'flex',
            alignItems: 'center',
            gap: theme.typography.pxToRem(20),

            [theme.breakpoints.down('lg')]: {
              display: 'grid',
            },
          })}
        >
          <Box
            component="a"
            style={{ display: 'inline-flex', cursor: 'pointer' }}
            onClick={onPrev}
            sx={theme => ({
              [theme.breakpoints.down('lg')]: {
                order: 2,
                gridRowStart: 2,
              },
            })}
          >
            <ScrollIcon />
          </Box>

          <Box
            className={classes.carouselItem}
            component="div"
            sx={theme => ({
              [theme.breakpoints.down('lg')]: {
                gridColumnStart: 1,
                gridColumnEnd: 3,
              },
            })}
          >
            <div
              className={classes.innerLeftBox}
              key={`bannerText_${currentIndex}`}
            >
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

            <Box
              component="div"
              position="relative"
              sx={{ overflow: 'hidden' }}
            >
              {items.map((item, index) => (
                <Box
                  key={index}
                  component="img"
                  src={item.image}
                  sx={{
                    border: 'none',
                    outline: 'none',
                    opacity: currentIndex === index ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box
            component="a"
            style={{
              display: 'inline-flex',
              transform: 'rotateY(180deg)',
              cursor: 'pointer',
              order: 3,
            }}
            onClick={onNext}
            sx={theme => ({
              [theme.breakpoints.down('lg')]: {
                gridRowStart: 2,
              },
            })}
          >
            <ScrollIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}