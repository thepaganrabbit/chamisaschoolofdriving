import React from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import moment from 'moment';
import TableAction from '../TableAction/TableAction';

const StudentTable = (): React.ReactElement => {
  const updateAction = () => {
    console.log('ready to edit');
  };

  const deleteAction = (e: string | any) => {
    console.log('deleted ' + e);
  };
  const nodes = [
    {
      id: '2i9293',
      first_name: 'John',
      last_name: 'Doe',
      middle_initial: 'L',
      folder_code: '334rrr44',
      studentId: '78898er',
      class_location: 'Espanola',
      phone: '(505)908-0999',
      email: 'johndoe@doe.com',
      initiated: moment().format('MMMM Do YYYY, h:mm:ss a'),
      completed: false,
    },
  ];

  const COLUMNS = [
    {
      label: 'Name',
      renderCell: (item: any) =>
        `${item.last_name}, ${item.first_name}, ${item.middle_initial}`,
    },
    {
      label: 'Access Code',
      renderCell: (item: any) => item.folder_code,
    },
    {
      label: 'Student ID',
      renderCell: (item: any) => item.studentId,
    },
    {
      label: 'Class Location',
      renderCell: (item: any) => item.class_location,
    },
    {
      label: 'Phone',
      renderCell: (item: any) => item.phone,
    },
    {
      label: 'Email',
      renderCell: (item: any) => item.email,
    },
    {
      label: 'Student As of',
      renderCell: (item: any) => item.initiated,
    },
    {
      label: 'Action',
      renderCell: (item: any) => (
        <TableAction
          id={item.id}
          firstAction={updateAction}
          secondAction={deleteAction}
        />
      ),
    },
  ];
  const data = { nodes };
  return (
    <section style={{ marginTop: '3rem' }}>
      <div className="container-md">
        <h2 style={{ marginBottom: '3rem' }}>Current Students</h2>
        <CompactTable columns={COLUMNS} data={data} />
      </div>
    </section>
  );
};

export default StudentTable;
