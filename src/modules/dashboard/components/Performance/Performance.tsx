import { Box, BoxProps, Typography } from '@mui/material';
import { usePerformanceStyles } from './usePerformanceStyles';
import { useEffect, useState } from 'react';

const items = [
  {
    banner:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTF86J58O8LUUIBXpbq63UYzKD2U8B5rAd1A&s',
    title: 'Real User Growth Highly Boosted',
    desc: "Banana TV, enabled by OpenAD's accurate targeted advertising strategy, obtained a large number of real high-quality user traffic.",
    data: [
      ['10%', 'User Retention Rate'],
      ['60%', 'Conversion Rate of Effective Users'],
    ],
    theme: '#FFF1A8',
  },
  {
    banner:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTF86J58O8LUUIBXpbq63UYzKD2U8B5rAd1A&s',
    title: 'Smart Ads Make Monetization Easy',
    desc: '“The platform’s intelligent ad delivery and transparent revenue-sharing mechanism have made it easy for us to maximize our ad revenue.”',
    data: [['90%', 'Interaction Rate Over Industry Average']],
    theme: '#000',
  },
];

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
    }, 3000);

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
          animation: 'fadeIn 1s forwards',
        }}
        key={`banner_${currentIndex}`}
      >
        <div className={classes.carouselItem}>
          <div className={classes.innerLeftBox}>
            <h3>{items[currentIndex].title}</h3>
            <p>{items[currentIndex].desc}</p>

            <ul className={classes.dataList}>
              {items[currentIndex].data.map((item, index) => (
                <li key={index}>
                  <h3>{item[0]}</h3>
                  <p>{item[1]}</p>
                </li>
              ))}
            </ul>
          </div>

          <img
            style={{
              backgroundColor: items[currentIndex].theme,
              border: 'none',
              outline: 'none',
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
