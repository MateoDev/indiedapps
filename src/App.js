import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Web3 from 'web3';

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
        {address}
      </div>
    </div>
  );
}

export default App;
