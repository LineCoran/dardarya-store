import { Grid, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import './Footer.css'

export const Footer = () => {
  const [show, setShow] = useState(false)

  const showPdf = () => {
    setShow(true)
  }
  const hidePdf = () => {
    setShow(false)
  }


  return (
    <Grid padding={2} container direction={'row'} justifyContent={'space-around'}>
      <Grid item xs container display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'left'}>
        <Typography fontWeight={600} sx={{cursor: 'pointer'}} onClick={showPdf}>Договор оферты</Typography>
        <Grid item xs sx={{width: '100%'}}>
            <div className="logo-logo" />
          </Grid>
        {show && <div className="pdf-wrapper pdf-wrapper-show"/> }
          <div className={show ? 'pdf pdf-show' : 'pdf'}>
          <Button sx={{position: 'absolute', left: 0, top: 0 }} variant='contained' onClick={hidePdf}>Закрыть</Button>
            <iframe  src="https://drive.google.com/file/d/1y3fAvXAPzraUItMeL2CL1iDazqGUVBVJ/preview" width="100%" height="100%" allow="autoplay"></iframe>
          </div>

      </Grid>
      <Grid item xs container display={'flex'} flexDirection={'column'} rowGap={2} alignItems={'left'} justifyContent={'center'}>
        <Typography fontWeight={600}>Адрес:</Typography>
        <Typography>РБ, Г. ГОМЕЛЬ, УЛ. СВИРИДОВА, Д. 77 ОФ. 86</Typography>
        <Typography>ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ ЧУЯНОВА ДАРЬЯ АЛЕКСАНДРОВНА</Typography>
        <Typography>«Текущий (расчетный): BY04ALFA30132D87060010270000 в BYN в ЗАО «Альфа-Банк», БИК: ALFABY2X»</Typography>
        <Typography>КОД ПЛАТЕЖА (вводить только если это необходимо) : 90401</Typography>
        <Typography>НАЗНАЧЕНИЕ ПЛАТЕЖА : Оказание услуг</Typography>
      </Grid>
    </Grid>
  );
};
