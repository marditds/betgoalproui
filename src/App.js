import './App.css';
import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { NavMenu } from './components/NavMenu/NavMenu'
// import { HashConnect } from 'hashconnect'
// import { AuthCheck } from './components/AuthCheck/AuthCheck';
import { WelcomePage } from './components/WelcomePage/WelcomePage';
// import { ConnectWallet } from './components/WelcomePage/ConnectWallet/ConnectWallet';
// import { GuestLogin } from './components/WelcomePage/GuestLogin/GuestLogin';
import { Home } from './components/Home/Home'
import { League } from './components/League/League'
import { Profile } from './components/Profile/Profile'
import { NotFound } from './components/404/NotFound';
import { Picks } from './components/League/Picks/Picks';
import { Scoreboard } from './components/League/Scoreboard/Scoreboard';
// import { Club } from './components/Club';
// import { Picks } from './components/Picks/Picks';

function App() {

  // const [guestName, setGuestName] = useState("");
  // const [guestData, setGuestData] = useState({
  //   guestName: guestName
  // });
  // const [guestNameMsg, setGuestNameMsg] = useState(false);
  const [guestCheck, setGuestCheck] = useState(false);

  const handleGuestLogin = (event) => {
    event.preventDefault();
    // setGuestData({ ...guestData, guestName });
    setGuestCheck(true);
  }

  // const updateGuestName = (name) => {
  //   setGuestName(name);
  // };




  // const [hashconnect, setHashconnect] = useState(null);
  const [pairingData, setPairingData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [chk, setChk] = useState(false);
  // const [totoId, setTotoId] = useState('');


  // const appMetadata = {
  //   name: "football",
  //   description: "predict results",
  //   url: "http://localhost:3000/"
  // };

  // const initHashconnect = async () => {
  //   const hc = new HashConnect();
  //   setHashconnect(hc);

  //   hc.pairingEvent.on((pairingData) => {
  //     // console.log('Pairing data:', pairingData);
  //     localStorage.setItem("pairingData", JSON.stringify(pairingData));
  //     setPairingData(pairingData);
  //   });

  //   const savedPairingData = localStorage.getItem("pairingData");
  //   if (savedPairingData) {
  //     setPairingData(JSON.parse(savedPairingData));
  //   }

  //   const initData = await hc.init(appMetadata, "testnet", false);
  //   // console.log('Init data:', initData);
  // };

  const connectWallet = () => {
    //   hashconnect.connectToLocalWallet();
    console.log('Connect wallet clicked.');
  };

  const disconnectPairing = (pairing) => {
    // hashconnect.disconnect(pairing.topic);
    // const updatedPairings = hashconnect.hcData.savedPairings;
    // console.log('Updated pairings:', updatedPairings);
    localStorage.removeItem("pairingData");
    setPairingData(null);
  };

  // useEffect(() => {
  //   initHashconnect();
  //   setIsLoading(false);

  //   document.title = 'BetGoalPro';

  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // const handleChange = (e) => {
  //   setTotoId(preVal => e.target.value);
  // }

  // const handleSubmit = () => {
  //   if (totoId === '123') {
  //     setChk(preVal => true);
  //   } else {
  //     setChk(preVal => false);
  //   }
  // }


  // console.log('THIS IS HOME DATA: ', pairingData);

  return (
    <div className="App">

      {
        // (pairingData || guestData.guestName)
        (pairingData || guestCheck)
          ?
          <NavMenu pairingData={pairingData}
            connectWallet={handleGuestLogin}
          // connectWallet={connectWallet}
          // disconnectPairing={disconnectPairing} 
          />
          : null}



      <Routes>
        {/* <Route path='/' element={chk ? <Home /> : <AuthCheck totoId={totoId} handleChange={handleChange} handleSubmit={handleSubmit} />} /> */}
        {/* <Route path='/' element={pairingData ? <Picks pairingData={pairingData} /> : <ConnectWallet connectWallet={connectWallet} />} /> */}

        {/* HOME START */}
        <Route path='/'
          element={
            // (pairingData || guestData.guestName) ?
            (pairingData || guestCheck) ?
              <Home />
              :
              <WelcomePage
                connectWallet={handleGuestLogin}
                // guestName={guestData.guestName}
                handleGuestLogin={handleGuestLogin}
              // updateGuestName={updateGuestName}
              // guestNameMsg={guestNameMsg}
              />
            // <>
            //   <ConnectWallet connectWallet={connectWallet} />
            //   <GuestLogin guestName={guestData.guestName} handleGuestLogin={handleGuestLogin} updateGuestName={updateGuestName} />
            // </>
          } />
        {/* HOME END */}




        <Route path='/leagues'>
          <Route exact path=':leagueAlias' element={<League pairingData={pairingData} />} />
        </Route>

        <Route path='/leagues/:leagueAlias'>
          <Route path='picks' element={<Picks pairingData={pairingData} connectWallet={connectWallet} />} />
          <Route path='scoreboard' element={<Scoreboard pairingData={pairingData} />} />
          {/* <Route path=':clubAlias' element={<Club pairingData={pairingData} />} /> */}
        </Route>


        {/* REDIRECT */}
        {/* {pairingData &&  */}
        <Route path='me' element={<Profile pairingData={pairingData} disconnectPairing={disconnectPairing}
        // guestData={guestData} 
        />} />
        {/* } */}

        <Route path='*' element={<NotFound />} />
      </Routes>


    </div>
  );
}

export default App;
