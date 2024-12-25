import React from 'react';

const Divider: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      <p
        style={{ height: '1px', width: '700px', backgroundColor: 'white' }}
      ></p>
    </div>
  );
};

export default Divider;
