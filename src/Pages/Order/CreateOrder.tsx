import React from 'react';
import { Grid, Typography, Divider, Button } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, array, number } from 'yup';
import { ReactHookFormTextField } from '../../Components/RHF/ReactHookFormTextField';
import { ReactHookFormImage } from '../../Components/RHF/ReactHookFormImage';
import { ReactHookTextareaAutosize } from '../../Components/RHF/ReactHookFormTextarea';
import { useCreateOrderMutation } from './api/createOrderSlice';
import { CreateOrderType } from './api/apiTypes/createOrderSliceType';

export const CreateOrder = () => {
  const validationScheme = object({
    description: string().required(`Добавьте краткое описание`),
    link: string().required(`Ссылка на товар обязательна`),
    img: array().min(1, 'Скриншот обязателен').required('Скриншот обязателен'),
    cost: number(),
    weight: number(),
  });

  const [createOrder] = useCreateOrderMutation();

  const methods = useForm({
    defaultValues: {
      description: '',
      link: '',
      img: [] as File[],
      cost: 0,
      weight: 0,
    },
    mode: 'onTouched',
    resolver: yupResolver(validationScheme),
  });

  const onSubmit = (order: CreateOrderType) => {
    const formData = new FormData();
    const data = new Date();
    formData.append('cost', `${order.cost}`);
    formData.append('description', `${order.description}`);
    formData.append('img', order.img[0]);
    formData.append('link', `${order.link}`);
    formData.append('weight', `${order.weight}`);
    formData.append('createdat', `${data}`);
    createOrder(formData);
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
          <form action={'post'} style={{ width: '100%' }} onSubmit={methods.handleSubmit(onSubmit)}>
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
                <ReactHookFormImage label={'Скриншот'} name={'img'} />
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
