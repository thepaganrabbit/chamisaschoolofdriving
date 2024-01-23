import React from 'react';
import StudentTable from '../../../components/StudentTable/StudentTable';
import AddStudentBlock from '../../../components/AddStudentBlock/AddStudentBlock';
import ModalBase from '../../../components/ModalBase/ModalBase';

const EmployeeHome = (): React.ReactElement => {
  return (
    <section>
      <AddStudentBlock />
      <StudentTable />
    </section>
  );
};

export default EmployeeHome;
