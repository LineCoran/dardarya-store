import React from 'react';
import { Grid, Typography, TextField, Divider, Button } from '@mui/material';

export const Order = () => {
  return (
    <Grid
      container
      padding={10}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      rowGap={2}
    >
      <Grid item>
        <Typography variant={'h2'}>Заказ</Typography>
      </Grid>
      <Grid xs container item>
        <Divider orientation={'horizontal'} sx={{ minWidth: '100%', height: '2px' }} />
      </Grid>
      <Grid container item direction={'column'}>
        <form action={'post'}>
          <TextField label={'hello'} />
          <TextField label={'hello'} />
          <TextField label={'hello'} />
          <TextField label={'hello'} />
          <TextField label={'hello'} />
          <Button disabled={false} variant={'contained'}>Отправить</Button>
        </form>
      </Grid>
    </Grid>
  );
};
