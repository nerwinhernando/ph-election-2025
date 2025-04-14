'use client';

import React, { useState } from 'react';
import politicians from '../data/politicians';

const BallotPreview: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openPreview = (): void => setIsOpen(true);
  const closePreview = (): void => setIsOpen(false);

  return (
    <>
      <button className="button" onClick={openPreview}>
        View Sample Ballot
      </button>

      <div className={`ballot-preview ${isOpen ? 'active' : ''}`}>
        <div className="ballot-content">
          <button className="close-ballot" onClick={closePreview}>
            Close
          </button>
          
          <h1 style={{ textAlign: 'center', color: '#0038a8' }}>OFFICIAL SAMPLE BALLOT</h1>
          <h2 style={{ textAlign: 'center' }}>Republic of the Philippines</h2>
          
          <div style={{ margin: '30px 0', borderTop: '2px solid #333', borderBottom: '2px solid #333', padding: '20px 0' }}>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
              INSTRUCTIONS: Shade completely the circle beside the name of your chosen candidate.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            <div style={{ border: '1px solid #ccc', padding: '10px' }}>
              {politicians.slice(0, 6).map((politician) => (
                <div key={politician.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid #333', marginRight: '10px' }}></div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{politician.id}. {politician.name.toUpperCase().split(' ').reverse().join(', ')}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{politician.party}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ border: '1px solid #ccc', padding: '10px' }}>
              {politicians.slice(6, 12).map((politician) => (
                <div key={politician.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid #333', marginRight: '10px' }}></div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{politician.id}. {politician.name.toUpperCase().split(' ').reverse().join(', ')}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{politician.party}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center', fontStyle: 'italic', color: '#666' }}>
            This is a sample ballot for educational purposes only.
            <br />
            NOT VALID FOR ACTUAL VOTING
          </div>

          <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ borderTop: '1px solid #333', paddingTop: '5px', width: '200px', textAlign: 'center' }}>
              Voter's Signature
            </div>
            <div style={{ borderTop: '1px solid #333', paddingTop: '5px', width: '200px', textAlign: 'center' }}>
              Election Officer
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BallotPreview;
