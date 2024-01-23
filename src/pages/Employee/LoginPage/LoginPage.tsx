import React from 'react';

import './LoginPage.scss';
import LoginBlock from '../../../components/LoginBlock/LoginBlock';
import ClockInBlock from '../../../components/ClockInBlock/ClockInBlock';
import { InOut, SignInProps } from '../../../types';
import { useNavigate } from 'react-router-dom';
import ModalBase from '../../../components/ModalBase/ModalBase';
import ModalActions from '../../../components/AddStudentBlock/ModalActions/ModalActions';
import { nanoid } from 'nanoid';

const LoginPage = (): React.ReactElement => {
  // State
  const [clockIn, setClockin] = React.useState<InOut | null>(null);
  const [modalState, setModalState] = React.useState<boolean>(false);
  const ACTIONS = [
    {
      id: nanoid(),
      label: 'Cancel',
      action: () => setModalState(!modalState),
      color: 'btn-danger',
    },
  ];

  const navigate = useNavigate();
  const logUserIn = (e: SignInProps) => {
    console.log(e);
    navigate('/employee/home');
  };
  return (
    <section style={{ marginTop: '3rem' }}>
      <div className="container center">
        <LoginBlock onAction={logUserIn} />
        <div className="clock-block">
          <button
            className="btn btn-success"
            onClick={() => {
              setClockin(InOut.IN);
              setModalState(!modalState);
            }}
          >
            Clock In
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              setClockin(InOut.OUT);
              setModalState(!modalState);
            }}
          >
            Clock Out
          </button>
        </div>
        <ModalBase
          state={modalState}
          action={() => null}
          title={clockIn !== InOut.OUT ? 'Clock In' : 'Clock Out'}
          modalActions={<ModalActions actions={ACTIONS} />}
        >
          <ClockInBlock inOut={clockIn} />
        </ModalBase>
      </div>
    </section>
  );
};

export default LoginPage;
