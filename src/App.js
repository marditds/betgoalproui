import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { NavMenu } from './components/NavMenu/NavMenu'
import { HashConnect } from 'hashconnect'
import { AuthCheck } from './components/AuthCheck/AuthCheck';
import { ConnectWallet } from './components/ConnectWallet/ConnectWallet';
import { GuestLogin } from './components/GuestLogin/GuestLogin';
import { Home } from './components/Home/Home'
import { League } from './components/League/League'
import { Profile } from './components/Profile/Profile'
import { NotFound } from './components/404/NotFound';
import { Picks } from './components/League/Picks/Picks';
import { Scoreboard } from './components/League/Scoreboard/Scoreboard';
import { Club } from './components/Club';
// import { Picks } from './components/Picks/Picks';

function App() {

  const [guestName, setGuestName] = useState("");
  const [guestData, setGuestData] = useState({
    guestName: guestName
  });

  const handleGuestLogin = (event) => {
    event.preventDefault();
    setGuestData({ ...guestData, guestName: guestName });
  }

  const updateGuestName = (name) => {
    setGuestName(name);
  };

  useEffect(() => {
    console.log('THIS IS GUEST DATA:', guestData.guestName);
  }, [guestData]);


  const [hashconnect, setHashconnect] = useState(null);
  const [pairingData, setPairingData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [chk, setChk] = useState(false);
  const [totoId, setTotoId] = useState('');


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

    document.title = 'BetGoalPro';

  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleChange = (e) => {
    setTotoId(preVal => e.target.value);
  }

  const handleSubmit = () => {
    if (totoId === '123') {
      setChk(preVal => true);
    } else {
      setChk(preVal => false);
    }
  }


  console.log('THIS IS HOME DATA: ', pairingData);

  return (
    <div className="App">

      {pairingData ? <NavMenu pairingData={pairingData} connectWallet={connectWallet}
      // disconnectPairing={disconnectPairing} 
      /> : null}



      <Routes>
        {/* <Route path='/' element={chk ? <Home /> : <AuthCheck totoId={totoId} handleChange={handleChange} handleSubmit={handleSubmit} />} /> */}
        {/* <Route path='/' element={pairingData ? <Picks pairingData={pairingData} /> : <ConnectWallet connectWallet={connectWallet} />} /> */}
        <Route path='/'
          element={
            (pairingData || guestData.guestName) ?
              <Home />
              :
              <>
                <GuestLogin guestName={guestData.guestName} handleGuestLogin={handleGuestLogin} updateGuestName={updateGuestName} />
                <ConnectWallet connectWallet={connectWallet} />
              </>} />



        <Route path='/leagues'>
          <Route exact path=':leagueAlias' element={<League pairingData={pairingData} />} />
        </Route>

        <Route path='/leagues/:leagueAlias'>
          <Route path=':clubAlias' element={<Club pairingData={pairingData} />} />
          <Route path='picks' element={<Picks pairingData={pairingData} />} />
          <Route path='scoreboard' element={<Scoreboard pairingData={pairingData} />} />
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
