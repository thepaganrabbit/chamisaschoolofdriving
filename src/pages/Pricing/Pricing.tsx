import React from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';

const Pricing = (): React.ReactElement => {
  const COLUMNS = [
    { label: 'Description', renderCell: (item: any) => item.description },
    { label: 'Price', renderCell: (item: any) => item.price },
    { label: 'Notes', renderCell: (item: any) => item.notes },
  ];

  const nodes = [
    {
      description: 'Classes/Register Online',
      price: 300,
      notes: 'Covers class and instructor drives',
    },
    {
      description: 'Classes/Purchased Online',
      price: 309,
      notes:
        'Covers class and instructor drives, Up-charge for card processing.',
    },
    {
      description: 'Missing/Not Canceling within the 24 hour notice',
      price: 25,
      notes: 'Be responsible and cancel 24 hours before missing class.',
    },
    {
      description: 'Lost Certificate',
      price: 300,
      notes: 'It costs us to replace them so be aware this is non-refundable',
    },
  ];

  const data = { nodes };
  return (
    <section style={{ marginTop: '3rem' }}>
      <div className="container-md">
        <div className="price-block">
          <h1 style={{ marginBottom: '2rem' }}>Pricing:</h1>
          <CompactTable columns={COLUMNS} data={data} />
        </div>
        <div className="information">
            <h2>Notes</h2>
          <p>
            Benefits to buying online is that it will automatically guarantee
            you a spot in the class. Registration will place you on the list and
            you will need to physically come in and pay before class. You cannot attend class without paying. 
          </p>
          <p>
            Both fees for missing or not informing the instructor of your absence 24 hours prior to drive times are not refundable and must be paid before you can get your certificate.
          </p>
          <p>The max amount of times you can miss your drive times without alerting the instructor is 3 with a maximum non refundable cost to you of $75.00.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
