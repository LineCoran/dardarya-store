import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { StyledTextarea } from '../StyledTextarea';

type ReactHookFormTextFieldTypes = {
  name: string;
  label: string;
};

export const ReactHookTextareaAutosize = ({ name, label }: ReactHookFormTextFieldTypes) => {
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
        <>
          {errorMessage && (
            <p style={{ color: '#d32f2f', fontSize: '14px', fontWeight: 400 }}>{errorMessage}</p>
          )}
          <StyledTextarea
            sx={{ color: errorMessage ? 'inherit' : 'red' }}
            placeholder={label}
            minRows={3}
            {...field}
          />
        </>
      )}
    />
  );
};
