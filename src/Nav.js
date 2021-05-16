import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Web3 from 'web3';
import './Nav.css';

//If connected, hide botton and show address


const Nav = ({ address }) => {
    // When button clicked, request Metamask to open
  
    const handleButtonClick = async () => {
      if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);
        return true;
      }
  
      return false;
    };
  
    const renderAddressOrButton = () => {
      if (!address || address.length === 0) {
        return (
          <div id="button" className="ml-auto">
            <Button variant="dark" onClick={handleButtonClick} aria-expanded="false">
              Sign in with Metamask
            </Button>
          </div>
        );
      }
      return <div>{address}</div>;
    };
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light static-top header-a">
        <div className="container-fluid">
          <Navbar bg="none" expand="lg">
            <Navbar.Brand href="#home">IndieDapps</Navbar.Brand>
          </Navbar>
          {renderAddressOrButton()}
        </div>
      </nav>
    );
  };

export default Nav;

