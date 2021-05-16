// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import Nav from './Nav';
import Body from './Body';

//Create nav component with button to connect to Metamask
//Change sign in with metamask --> address/ account and profile photo 

const App = () => {
  const [address, changeAddress] = useState("");

  useEffect(async () => {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const accounts = await web3.eth.getAccounts()
    changeAddress(accounts[0]);
  });

  return (
    <div className="App">
      <div>
        <Nav address={address} />
        <Body address={address} />
      {/* <Router>
        <HomePage>
          <TopSection>
            <Title></Title>
            <Filter></Filter>
          </TopSection>
          <BottomSection>
            <CardList>
              {
                data.forEach(cardData => {
                  return (
                    <Card data={cardData}></Card>
                  )
                })
              }
            </CardList>
          </BottomSection>
        </HomePage>
        <DetailsPage />
      </Router> */}
      </div>
    </div>
  );
}

export default App;