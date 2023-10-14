import React, { useState, ChangeEvent } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Button, Fab, Box, IconButton, Grid } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { makeStyles } from 'tss-react/mui';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const useStyles = makeStyles({ name: 'ReactHookFormImage' })(() => ({
  wrapper: {},
  imageWrapper: {
    width: '200px',
    height: '200px',
    position: 'relative',
    objectFit: 'fill',
  },
  addButton: {
    maxWidth: '200px',
    maxHeight: '200px',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.3)',
    ':hover': {
      background: 'rgba(0, 0, 0, 0.5)',
    },
  },
  button: {
    position: 'absolute',
    right: '0',
    top: '0',
    width: '30px',
    height: '30px',
  },
}));

type ReactHookFormImageTypes = {
  name: string;
  label: string;
};

export const ReactHookFormImage = ({ name, label }: ReactHookFormImageTypes) => {
  const {
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useFormContext();
  const errorMessage = errors[name]?.message?.toString();
  const [file, setFile] = useState<string[]>([]);
  const [blur, setBlur] = useState(false);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBlur(true);
    if (e && e.target && e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setValue(name, [...getValues(name), file]);
      setFile((prev) => [...prev, url]);
    }
  };

  const clearImage = (index: number) => {
    setFile((prev) => [...prev].filter((item, i) => i !== index));
    setValue(
      name,
      getValues(name).filter((_item, i) => i !== index),
    );
  };

  const { classes } = useStyles();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Grid className={classes.wrapper} item xs>
          <Grid container direction={'row'} columnGap={4}>
            {errorMessage && file.length === 0 && (
              <p style={{ color: '#d32f2f', fontSize: '14px', fontWeight: 400 }}>{errorMessage}</p>
            )}
            {file &&
              file.length > 0 &&
              file.map((img, index) => {
                return (
                  <Box sx={{ marginBottom: '1rem' }} key={img} className={classes.imageWrapper}>
                    <img width={'100%'} height={'100%'} alt={'screen'} src={img} />
                    <IconButton
                      className={classes.button}
                      onClick={() => clearImage(index)}
                      color={'error'}
                    >
                      <CancelIcon sx={{ width: '24px', height: '24px' }} />
                    </IconButton>
                  </Box>
                );
              })}
            {file.length < 3 && (
              <Button className={classes.addButton} component={'label'}>
                Фото*
                <AddAPhotoIcon sx={{ height: '150px', width: '150px' }} />
                <input type={'file'} hidden name={name} onChange={(e) => onFileChange(e)} />
              </Button>
            )}
          </Grid>
        </Grid>
      )}
    />
  );
};
