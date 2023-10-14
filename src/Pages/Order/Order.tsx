import React from 'react';
import { Grid, Typography, Divider, Button } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, array } from 'yup';
import { ReactHookFormTextField } from '../../Components/RHF/ReactHookFormTextField';
import { ReactHookFormImage } from '../../Components/RHF/ReactHookFormImage';
import { ReactHookTextareaAutosize } from '../../Components/RHF/ReactHookFormTextarea';

interface IOrder {
  description: string;
  file: File[];
  cost: number;
  weight: number;
  link: string;
}

export const Order = () => {
  const validationScheme = object({
    description: string().required(`Добавьте краткое описание`),
    link: string().required(`Ссылка на товар обязательна`),
    file: array().min(1, 'Скриншот обязателен'),
  });
  const methods = useForm({
    defaultValues: {
      description: '',
      file: [],
      cost: 0,
      weight: 0,
    },
    mode: 'onTouched',
    resolver: yupResolver(validationScheme),
  });

  const handleSubmit = (order: IOrder) => {
    console.log(order);
  };

  return (
    <Grid container padding={3} alignItems={'center'} justifyContent={'center'} rowGap={2}>
      <Grid item>
        <Typography color={'black'} variant={'h2'}>
          Заказ
        </Typography>
      </Grid>
      <Grid container item direction={'column'}>
        <FormProvider {...methods}>
          <form
            action={'post'}
            style={{ width: '100%' }}
            onSubmit={methods.handleSubmit(handleSubmit)}
          >
            <Grid
              container
              justifyContent={'center'}
              alignItems={'center'}
              item
              xs
              direction={'row'}
              spacing={2}
            >
              <Grid item xs={12}>
                <ReactHookFormImage label={'Скриншот'} name={'file'} />
              </Grid>
              <Grid item xs={12}>
                <ReactHookTextareaAutosize label={'Описание товара*'} name={'description'} />
              </Grid>
              <Grid item xs={12}>
                <ReactHookFormTextField label={'Ссылка*'} name={'link'} />
              </Grid>
              <Grid item xs={6}>
                <ReactHookFormTextField type={'number'} label={'Цена'} name={'cost'} />
              </Grid>
              <Grid item xs={6}>
                <ReactHookFormTextField type={'number'} label={'Вес'} name={'weight'} />
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  sx={{ padding: '25px 20px' }}
                  type={'submit'}
                  variant={'contained'}
                >
                  Отправить
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Grid>
    </Grid>
  );
};
