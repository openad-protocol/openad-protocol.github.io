import { Box, BoxProps, Typography, Button } from '@mui/material';
import { usePerformanceStyles } from './usePerformanceStyles';
import { useState } from 'react';

const items = [
  {
    banner:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTF86J58O8LUUIBXpbq63UYzKD2U8B5rAd1A&s',
    title: 'Smart Ads Make Monetization Easy',
    desc: '“The platform’s intelligent ad delivery and transparent revenue-sharing mechanism have made it easy for us to maximize our ad revenue.”',
  },
  {
    banner:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTF86J58O8LUUIBXpbq63UYzKD2U8B5rAd1A&s',
    title: '222',
    desc: '“333”',
  },
];

export function Performance({ sx }: Pick<BoxProps, 'sx'>): JSX.Element {
  const { classes } = usePerformanceStyles();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  const prevImage = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
  };

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
        <div className={classes.carouselItem}>
          <div className={classes.innerLeftBox}>
            <h3>{items[currentIndex].title}</h3>
            <p>{items[currentIndex].desc}</p>
          </div>

          <img style={{ backgroundColor: '#000' }} />
        </div>
        <Box
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
        </Box>
      </Box>
    </Box>
  );
}
