import React from 'react';
import Image from 'next/image';
import { Politician } from '../types';

interface PoliticianCardProps {
  politician: Politician;
}

const PoliticianCard: React.FC<PoliticianCardProps> = ({ politician }) => {
  const { id, name, party, image } = politician;
  
  return (
    <div className="politician-card">
      <div style={{ position: 'relative', width: '100%', height: '250px' }}>
        <Image 
          src={image} 
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          className="politician-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="politician-info">
        <div className="politician-number">{id}</div>
        <div className="politician-name">{name}</div>
        <div className="politician-party">{party}</div>
      </div>
    </div>
  );
};

export default PoliticianCard;
