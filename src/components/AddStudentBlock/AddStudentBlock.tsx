import React from 'react';

import './AddStudentBlock.scss';
import ModalBase from '../ModalBase/ModalBase';
import ModalActions from './ModalActions/ModalActions';
import { Action } from '../../types';
import { nanoid } from 'nanoid';
import StudentForm from './StudentForm/StudentForm';

const AddStudentBlock = (): React.ReactElement => {
  const [modalOpen, setOpenModal] = React.useState<boolean>(false);
  const myActions: Action[] = [
    {
      id: nanoid(),
      label: 'Submit',
      action: () => setOpenModal(!modalOpen),
      color: 'btn-primary',
    },
    {
      id: nanoid(),
      label: 'Cancel',
      action: () => setOpenModal(!modalOpen),
      color: 'btn-danger',
    },
  ];
  return (
    <section style={{ marginTop: '3rem' }}>
      <div className="container-md">
        <ModalBase
          action={setOpenModal}
          state={modalOpen}
          modalActions={<ModalActions actions={myActions} />}
          title="Register Student"
        >
          <StudentForm />
        </ModalBase>

        <div className="action-block">
          <button
            className="btn btn-primary btn-large"
            onClick={() => setOpenModal(!modalOpen)}
          >
            <i className="bi bi-plus-square"></i>
          </button>
          <h1>Enroll a Student</h1>
        </div>
      </div>
    </section>
  );
};

export default AddStudentBlock;
