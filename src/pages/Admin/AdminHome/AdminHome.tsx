import React from 'react';
import EmployeeTable from '../../../components/EmployeeTable/EmployeeTable';
import StudentTable from '../../../components/StudentTable/StudentTable';
import AddStudentBlock from '../../../components/AddStudentBlock/AddStudentBlock';

const AdminHome = (): React.ReactElement => {
  return (
    <section>
      <EmployeeTable />
      <StudentTable />
      <AddStudentBlock />
    </section>
  );
};

export default AdminHome;
