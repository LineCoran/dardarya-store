import React from 'react';
import { Grid, Typography, Divider, Button } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, array, number, date } from 'yup';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { ReactHookFormTextField } from '../../Components/RHF/ReactHookFormTextField';
import { ReactHookFormImage } from '../../Components/RHF/ReactHookFormImage';
import { ReactHookTextareaAutosize } from '../../Components/RHF/ReactHookFormTextarea';
import { useCreateOrderMutation } from './api/createOrderSlice';
import { CreateOrderType } from './api/apiTypes/createOrderSliceType';
import { Pages } from '../../core/Pages';

export const CreateOrder = () => {
  const validationScheme = object({
    description: string().required(`Добавьте краткое описание`),
    link: string().required(`Ссылка на товар обязательна`),
    img: array().min(1, 'Скриншот обязателен').required('Скриншот обязателен'),
    cost: number(),
    weight: number(),
    createdat: string().required(),
  });

  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      description: '',
      link: '',
      img: [] as File[],
      cost: 0,
      weight: 0,
      createdat: format(new Date(), 'yyyy-MM-dd'),
    },
    mode: 'onTouched',
    resolver: yupResolver(validationScheme),
  });

  const onSubmit = (order: CreateOrderType) => {
    const formData = new FormData();
    formData.append('cost', `${order.cost}`);
    formData.append('description', `${order.description}`);
    formData.append('img', order.img[0]);
    formData.append('link', `${order.link}`);
    formData.append('weight', `${order.weight}`);
    formData.append('createdat', `${order.createdat}`);
    createOrder(formData).then((res) => {
      navigate(-1);
    });
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
                  disabled={isLoading}
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
