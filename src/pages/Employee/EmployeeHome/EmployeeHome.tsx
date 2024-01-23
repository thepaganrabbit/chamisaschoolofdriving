import React from 'react';
import StudentTable from '../../../components/StudentTable/StudentTable';
import AddStudentBlock from '../../../components/AddStudentBlock/AddStudentBlock';
import SimpleActions from '../../../components/SimpleActions/SimpleActions';

const EmployeeHome = (): React.ReactElement => {
  return (
    <section>
      <SimpleActions />
      <AddStudentBlock />
      <StudentTable />
    </section>
  );
};

export default EmployeeHome;
