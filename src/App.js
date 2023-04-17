import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route, Outlet } from "react-router-dom"
import { NavMenu } from './components/NavMenu'
import { HashConnect } from 'hashconnect'
import { Home } from './components/Home'
import { League } from './components/League'
import { Profile } from './components/Profile'
import { NotFound } from './components/NotFound';
import { Predict_Entry } from './components/Predict_Entry';
import { Scoreboard_League } from './components/Scoreboard_League';

function App() {

  const [hashconnect, setHashconnect] = useState(null);
  const [pairingData, setPairingData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const appMetadata = {
    name: "football",
    description: "predict results",
    url: "http://localhost:3000/"
  };

  const initHashconnect = async () => {
    const hc = new HashConnect();
    setHashconnect(hc);

    hc.pairingEvent.on((pairingData) => {
      console.log('Pairing data:', pairingData);
      localStorage.setItem("pairingData", JSON.stringify(pairingData));
      setPairingData(pairingData);
    });

    const savedPairingData = localStorage.getItem("pairingData");
    if (savedPairingData) {
      setPairingData(JSON.parse(savedPairingData));
    }

    const initData = await hc.init(appMetadata, "testnet", false);
    console.log('Init data:', initData);
  };

  const connectWallet = () => {
    hashconnect.connectToLocalWallet();
  };

  const disconnectPairing = (pairing) => {
    hashconnect.disconnect(pairing.topic);
    const updatedPairings = hashconnect.hcData.savedPairings;
    console.log('Updated pairings:', updatedPairings);
    localStorage.removeItem("pairingData");
    setPairingData(null);
  };

  useEffect(() => {
    initHashconnect();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log('THIS IS HOME DATA: ', pairingData);

  return (
    <div className="App">
      <NavMenu pairingData={pairingData} connectWallet={connectWallet}
      // disconnectPairing={disconnectPairing} 
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/leagues'>
          <Route exact path=':leagueAlias' element={<League />} />
        </Route>

        <Route path='/leagues/:leagueAlias'>
          <Route path='picks' element={<Predict_Entry />} />
          <Route path='scoreboard' element={<Scoreboard_League />} />
        </Route>


        {/* REDIRECT */}
        {/* {pairingData &&  */}
        <Route path='me' element={<Profile pairingData={pairingData} disconnectPairing={disconnectPairing} />} />
        {/* } */}

        <Route path='*' element={<NotFound />} />
      </Routes>


    </div>
  );
}

export default App;
