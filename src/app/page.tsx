import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PoliticianCard from '../components/PoliticianCard';
import BallotPreview from '../components/BallotPreview';
import politicians from '../data/politicians';

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="container">
        <div className="buttons no-print">
          <Link href="/ballot-print" className="button">
            Print Sample Ballot
          </Link>
          <BallotPreview />
        </div>

        <div className="politicians-grid">
          {politicians.map((politician) => (
            <PoliticianCard
              key={politician.id}
              politician={politician}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
