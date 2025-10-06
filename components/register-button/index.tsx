import React from 'react';
import { LightLoadingButton } from 'components/light-loading-button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { RESTAURANT_DASHBOARD_URL } from 'lib/constants';

const RegisterButton = () => {
  return (
    <a className="text-inherit" href={`${RESTAURANT_DASHBOARD_URL}/register`}>
      <LightLoadingButton sx={{ fontSize: 16, minWidth: 110 }}>
        <AppRegistrationIcon sx={{ mr: 0.5 }} fontSize="small" /> Register
      </LightLoadingButton>
    </a>
  );
};

export default RegisterButton;
