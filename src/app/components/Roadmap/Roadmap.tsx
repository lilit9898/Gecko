'use client';

import React, { useState } from 'react';
import PDFModal from '../../Shared/PdfModal';

const Roadmap: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPDF, setCurrentPDF] = useState('');

  const openModal = (pdfPath: React.SetStateAction<string>) => {
    setCurrentPDF(pdfPath);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPDF('');
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap:"30px"
      }}
    >
      {/* <h1>Roadmap</h1> */}
      <p
        onClick={() => openModal('/Litepaper.pdf')}
        style={{
          // padding: '10px 20px',
          fontSize: '20px',
          // marginRight: '10px',
          cursor: 'pointer',
          // backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
 
        }}
      >
         LITEPAPER
      </p>
      <p
        onClick={() => openModal('/Whitepaper.pdf')}
        style={{
          // padding: '10px 20px',
          fontSize: '20px',
          cursor: 'pointer',
          // backgroundColor: '#28A745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
         WHITEPAPER
      </p>


      <PDFModal
        isOpen={isModalOpen}
        onClose={closeModal}
        pdfPath={currentPDF}
      />
    </div>
  );
};

export default Roadmap;
