import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

type ReactHookFormTextFieldTypes = {
  name: string;
  label: string;
  type?: string;
};

export const ReactHookFormTextField = ({
  name,
  label,
  type = 'text',
}: ReactHookFormTextFieldTypes) => {
  const {
    formState: { errors },
    control,
  } = useFormContext();
  const errorMessage = errors[name]?.message?.toString();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          placeholder={label}
          label={label}
          fullWidth
          minRows={22}
          rows={20}
          type={'textarea'}
          error={!!errors[name]}
          helperText={errorMessage || ''}
          {...field}
        />
      )}
    />
  );
};
