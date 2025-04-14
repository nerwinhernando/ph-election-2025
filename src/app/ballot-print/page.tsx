'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import politicians from '../../data/politicians';
import partyLists from '../../data/partyLists';

export default function BallotPrint() {
  const [activePage, setActivePage] = useState<string>('senators');

  // Auto-open print dialog when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="ballot-container">
      <div className="actions no-print">
        <button onClick={() => window.print()} className="button">
          Print Ballot
        </button>
        <Link href="/" className="button" style={{ marginLeft: '10px' }}>
          Back to Home
        </Link>
        <div style={{ marginTop: '20px' }}>
          <button 
            onClick={() => setActivePage('senators')} 
            className={`button ${activePage === 'senators' ? 'active' : ''}`}
            style={{ marginRight: '10px', opacity: activePage === 'senators' ? 1 : 0.7 }}
          >
            Senators Ballot
          </button>
          <button 
            onClick={() => setActivePage('partyList')} 
            className={`button ${activePage === 'partyList' ? 'active' : ''}`}
            style={{ opacity: activePage === 'partyList' ? 1 : 0.7 }}
          >
            Party List Ballot
          </button>
        </div>
      </div>

      {activePage === 'senators' ? (
        // Senators Ballot
        <>
          <div className="ballot-header">
            <h1 className="ballot-title">OFFICIAL SAMPLE BALLOT - SENATORS</h1>
            <h2>Republic of the Philippines</h2>
          </div>
          
          <div className="instructions">
            <p>INSTRUCTIONS: Shade completely the circle beside the name of your chosen candidate.</p>
            <p style={{ marginTop: '5px' }}>Vote for up to twelve (12) Senators.</p>
          </div>

          <div className="candidates-container">
            <div className="candidates-column">
              {politicians.slice(0, 6).map((politician) => (
                <div key={politician.id} className="candidate-item">
                  <div className="candidate-circle"></div>
                  <div className="candidate-info">
                    <div style={{ fontWeight: 'bold' }}>
                      {politician.id}. {politician.name.toUpperCase().split(' ').reverse().join(', ')}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      {politician.party}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="candidates-column">
              {politicians.slice(6, 12).map((politician) => (
                <div key={politician.id} className="candidate-item">
                  <div className="candidate-circle"></div>
                  <div className="candidate-info">
                    <div style={{ fontWeight: 'bold' }}>
                      {politician.id}. {politician.name.toUpperCase().split(' ').reverse().join(', ')}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      {politician.party}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        // Party List Ballot
        <>
          <div className="ballot-header">
            <h1 className="ballot-title">OFFICIAL SAMPLE BALLOT - PARTY LIST</h1>
            <h2>Republic of the Philippines</h2>
          </div>
          
          <div className="instructions">
            <p>INSTRUCTIONS: Shade completely the circle beside the name of your chosen Party List.</p>
            <p style={{ marginTop: '5px' }}>Vote for only one (1) Party List.</p>
          </div>

          <div className="candidates-container">
            <div className="candidates-column">
              {partyLists.slice(0, 6).map((partyList) => (
                <div key={partyList.id} className="candidate-item">
                  <div className="candidate-circle"></div>
                  <div className="candidate-info">
                    <div style={{ fontWeight: 'bold' }}>
                      {partyList.id}. {partyList.acronym} - {partyList.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="candidates-column">
              {partyLists.slice(6, 12).map((partyList) => (
                <div key={partyList.id} className="candidate-item">
                  <div className="candidate-circle"></div>
                  <div className="candidate-info">
                    <div style={{ fontWeight: 'bold' }}>
                      {partyList.id}. {partyList.acronym} - {partyList.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="ballot-footer">
        <p>This is a sample ballot for educational purposes only.</p>
        <p style={{ fontWeight: 'bold', marginTop: '5px' }}>NOT VALID FOR ACTUAL VOTING</p>
      </div>

      <div className="signature-area">
        <div className="signature-line">
          Voter's Signature
        </div>
        <div className="signature-line">
          Election Officer
        </div>
      </div>
      
      <div className="no-print" style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        <h3>Voting Reminders:</h3>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>Bring a valid ID to your designated polling place</li>
          <li>Follow health and safety protocols at voting centers</li>
          <li>Properly shade the circles (not check marks or X marks)</li>
          <li>Do not overvote (select more than the required number of candidates)</li>
          <li>Keep your ballot clean and free from unnecessary markings</li>
        </ul>
      </div>
    </div>
  );
}
