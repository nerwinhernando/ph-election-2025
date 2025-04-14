import React from 'react';
import Image from 'next/image';
import { PartyList } from '../types';

interface PartyListCardProps {
  partyList: PartyList;
}

const PartyListCard: React.FC<PartyListCardProps> = ({ partyList }) => {
  const { id, name, acronym, platform, image } = partyList;
  
  return (
    <div className="party-list-card">
      <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <Image 
          src={image} 
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          className="party-list-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="party-list-info">
        <div className="party-list-number">{id}</div>
        <div className="party-list-acronym">{acronym}</div>
        <div className="party-list-name">{name}</div>
        <div className="party-list-platform">{platform}</div>
      </div>
    </div>
  );
};

export default PartyListCard;
