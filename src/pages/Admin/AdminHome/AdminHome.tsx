import React from 'react';
import EmployeeTable from '../../../components/EmployeeTable/EmployeeTable';
import StudentTable from '../../../components/StudentTable/StudentTable';

const AdminHome = (): React.ReactElement => {
  return (
    <section>
      <EmployeeTable />
      <StudentTable />
    </section>
  );
};

export default AdminHome;
