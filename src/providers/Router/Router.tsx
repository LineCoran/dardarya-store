import { Routes, Route } from 'react-router';
import { Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { Pages } from '../../core/Pages';
import { Layout } from '../../Pages/Layout/Layout';
import { Main } from '../../Components/Main/Main';
import About from '../../Pages/About/About/About';

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
          {/* <Route path={Pages.About} element={<Calculate />} /> */}
          <Route path={Pages.Main} element={<Main />} />
        </Route>
        {/* <Route path={Pages.} element={<Stars />} /> */}
        {/* <Route path={PagesRoutes.EventDetails} element={<EventDetails />} />
          <Route path={PagesRoutes.Main} element={<Dashboard />} />
          <Route path={PagesRoutes.Events} element={<Events />} />
          <Route path={PagesRoutes.Payment} element={<Payment />} />
          <Route path={PagesRoutes.InformationError} element={<Service />} />
          <Route path={PagesRoutes.ServerError} element={<ServerError />} />
          <Route path={PagesRoutes.Booking} element={<Booking />} />
          <Route path={PagesRoutes.NotFound} element={<NotFound />} />
          <Route path={PagesRoutes.Profile} element={<Profile />} /> */}
        {/* </Route> */}
        {/* <Route path={PagesRoutes.Registration} element={<SignUp />} /> */}
      </Routes>
    </Suspense>
  );
};
