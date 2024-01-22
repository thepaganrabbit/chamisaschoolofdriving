import React from 'react';

import './LoginPage.scss';
import LoginBlock from '../../../components/LoginBlock/LoginBlock';
import ClockInBlock from '../../../components/ClockInBlock/ClockInBlock';
import { SignInProps } from '../../../types';
import { useNavigate } from 'react-router-dom';


const LoginPage = (): React.ReactElement => {
    const navigate = useNavigate();
    const logUserIn = (e: SignInProps) => {
        console.log(e);
        navigate('/employee/home')
    }
  return (
    <section style={{ marginTop: '3rem' }}>
      <div className="container-md two-grid center">
        <LoginBlock onAction={logUserIn}/>
        <ClockInBlock />
      </div>
    </section>
  );
};

export default LoginPage;
