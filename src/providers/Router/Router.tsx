import { Routes, Route } from 'react-router';
import { Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { Pages } from '../../core/Pages';
import { Layout } from '../../Pages/Layout/Layout';
import { Main } from '../../Pages/Main/Main';
import { About } from '../../Pages/About/About/About';
import { Calculate } from '../../Pages/Calculate/Calculate';
import { Reviews } from '../../Pages/Reviews/Reviews';
import { CalculateSite } from '../../Pages/CalculateSite/CalculateSite';
import { CreateOrder } from '../../Pages/CreateOrder/CreateOrder';
import { Orders } from '../../Pages/Orders/Orders';
import { OrderItem } from '../../Pages/OrderItem/OrderItem';
import Sites from '../../enums/enums';

const Fallback = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
};

export const Router = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes location={location}>
        <Route path={Pages.Main} element={<Layout />}>
          <Route path={Pages.Main} element={<Main />} />
          <Route path={Pages.About} element={<About />} />
          <Route path={Pages.Calculate} element={<Calculate />} />
          <Route path={Pages.Taobao} element={<CalculateSite site={Sites.taobao} />} />
          <Route path={Pages.Alibaba} element={<CalculateSite site={Sites.alibaba} />} />
          <Route path={Pages.Reviews} element={<Reviews />} />
          <Route path={Pages.CreateOrder} element={<CreateOrder />} />
          <Route path={Pages.Orders} element={<Orders />} />
          <Route path={Pages.OrderItem} element={<OrderItem />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
