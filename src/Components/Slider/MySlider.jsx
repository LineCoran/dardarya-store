import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Fab } from '@mui/material';
import Rating from '@mui/material/Rating';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const steps = [
  {
    label: 'Виктория',
    description: `Спасибо большое за шапки!! Наконец-то добралась написать тебе! Я в восторге! Одну себе, а вторую маме подарила)) За такую цену да и еще 2, я в очень хорошем восторге! Ждем следующие заказики!`,
  },
  {
    label: 'Татьяна',
    description:
      'Наконец-тоооо!!! Какие же они классные))) Спасибо за быструю доставку) Хорошее качество и размер идеально подошел',
  },
  {
    label: 'Полина',
    description: `Приветик. Угги огонь! Выглядят очень хорошо, спасибо тебе огромное!!`,
  },
];

export default function TextMobileStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          height: 50,
          pl: 2,
          background: 'rgba(255, 255, 255, 0)',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          {steps[activeStep].label}
        </Typography>
        <StyledRating
          name={'customized-color'}
          defaultValue={5}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize={'inherit'} />}
          emptyIcon={<FavoriteBorderIcon fontSize={'inherit'} />}
        />
      </Paper>
      <Box
        sx={{
          height: '30vh',
          maxWidth: 400,
          width: '100%',
          p: 2,
          borderRadius: '50px',
          marginBottom: '1rem',
          color: 'black',
          padding: '10px 25px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          letterSpacing: '-0.5px',
        }}
      >
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant={'dots'}
        steps={maxSteps}
        position={'static'}
        activeStep={activeStep}
        nextButton={
          <Fab onClick={handleNext} disabled={activeStep === maxSteps - 1} color={'primary'}>
            <ArrowForwardIcon />
          </Fab>
        }
        backButton={
          <Fab onClick={handleBack} disabled={activeStep === 0} color={'primary'}>
            <ArrowBackIcon />
          </Fab>
        }
        sx={{ background: 'rgba(0, 0, 0, 0)', border: '2px solid #1976d2', borderRadius: '30px' }}
      />
    </Box>
  );
}
