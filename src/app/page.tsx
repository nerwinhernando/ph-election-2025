import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PoliticianCard from '../components/PoliticianCard';
import PartyListCard from '../components/PartyListCard';
import BallotPreview from '../components/BallotPreview';
import { Tabs, Tab } from '../components/TabSystem';
import politicians from '../data/politicians';
import partyLists from '../data/partyLists';

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

        <Tabs defaultTab="politicians">
          <Tab id="politicians" title="Senators (12)">
            <h2>Senatorial Candidates</h2>
            <p className="tab-description">Vote for up to 12 senatorial candidates.</p>
            <div className="politicians-grid">
              {politicians.map((politician) => (
                <PoliticianCard
                  key={politician.id}
                  politician={politician}
                />
              ))}
            </div>
          </Tab>
          
          <Tab id="partyList" title="Party List">
            <h2>Party List Groups</h2>
            <p className="tab-description">Vote for one (1) party list group that represents your interests and advocacies.</p>
            <div className="politicians-grid">
              {partyLists.map((partyList) => (
                <PartyListCard
                  key={partyList.id}
                  partyList={partyList}
                />
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>

      <Footer />
    </>
  );
}