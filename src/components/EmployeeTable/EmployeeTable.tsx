import React from 'react';
import { EmployeeType } from '../../types';
import { CompactTable } from '@table-library/react-table-library/compact';
import { USDollar } from '../../utils';

const EmployeeTable = (): React.ReactElement => {
  const nodes = [
    {
      id: '2i9293',
      first_name: 'Mary',
      last_name: 'Gonzales',
      middle_initial: 'L',
      employee_type: EmployeeType.ADMIN,
      access_level: 2,
      hourly_pay: 7.5,
      employee_work_type: 2,
      accessCode: '334rrr44',
      userId: 'marygonzales',
      office: 'Espanola',
      phone: '(505)699-0909',
    },
    {
      id: '2id9293',
      first_name: 'Ruben',
      last_name: 'Salazar',
      middle_initial: 'J',
      employee_type: EmployeeType.SUPER,
      access_level: 1,
      hourly_pay: undefined,
      employee_work_type: 1,
      accessCode: '33443r44',
      userId: 'rubensalazar',
      office: 'Espanola/Santa Fe',
      phone: '(505)999-0909',
    },
  ];

  const COLUMNS = [
    {
      label: 'Name',
      renderCell: (item: any) =>
        `${item.last_name}, ${item.first_name}, ${item.middle_initial}`,
    },
    {
      label: 'Employee Type',
      renderCell: (item: any) => item.employee_type,
    },
    {
      label: 'Access Level',
      renderCell: (item: any) => item.access_level,
    },
    {
      label: 'Hourly Pay',
      renderCell: (item: any) =>
        item.employee_work_type === 1
          ? 'N/A'
          : `${USDollar.format(item.hourly_pay)}`,
    },
    {
      label: 'Employee Work Type',
      renderCell: (item: any) =>
        item.employee_work_type === 2 ? 'Part Time' : 'Full Time',
    },
    {
      label: 'Location',
      renderCell: (item: any) => item.office,
    },
    {
      label: 'Phone',
      renderCell: (item: any) => item.phone,
    },
    {
      label: 'Action',
      renderCell: () => <button className="btn btn-warning">Edit</button>,
    },
  ];
  const data = { nodes };
  return (
    <section style={{ marginTop: '3rem' }}>
      <div className="container-md">
        <h2 style={{ marginBottom: '3rem' }}>Employees</h2>
        <CompactTable columns={COLUMNS} data={data} />
      </div>
    </section>
  );
};

export default EmployeeTable;
