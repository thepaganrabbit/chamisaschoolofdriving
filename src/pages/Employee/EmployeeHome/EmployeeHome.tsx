import React from 'react';
import StudentTable from '../../../components/StudentTable/StudentTable';
import AddStudentBlock from '../../../components/AddStudentBlock/AddStudentBlock';

const EmployeeHome = (): React.ReactElement => {
  return (
    <section>
      <AddStudentBlock />
      <StudentTable />
    </section>
  );
};

export default EmployeeHome;
