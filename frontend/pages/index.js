import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import Greeter from "../../src/artifacts/contracts/Greeter.sol/Greeter.json";

import { ethers } from "ethers";

export default function Home() {
  const [greeting, setGreeting] = useState("");
  const [newGreeting, setNewGreeting] = useState("");

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts);
      fetchGreetings();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGreetings = async () => {
    let contractAddress = "YOUR_CONTRACT_ADDRESS";
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      Greeter.abi,
      provider
    );

    const greet = await contract.greet();
    setGreeting(greet);
    console.log(greeting);
  };

  useEffect(() => {
    connectWallet();
  }, []);

  const handleClick = async () => {
    let contractAddress = "YOUR_CONTRACT_ADDRESS";
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, Greeter.abi, signer);

    const a = await contract.setGreeting(newGreeting);
    setGreeting(newGreeting);
  };

  return (
    <div>
      <Header />
      <div className="flex dark:bg-[#0e1217] h-screen justify-center items-center flex-col">
        <img
          src="./logo.png"
          className="w-auto max-h-96 h-screen"
          alt="ethereum"
        />
        <br />
        <br />

        <div className="flex w-full justify-center align-middle">
          <input
            className="w-full max-w-sm rounded-lg px-4 py-2 bg-gray-100 border border-gray-400 focus:outline-none focus:border-gray-500"
            placeholder="Set greeting"
            type="text"
            onChange={(e) => setNewGreeting(e.target.value)}
          />

          <button
            className=" rounded-lg px-4 py-2 bg-gray-100 border border-gray-400 focus:outline-none focus:border-gray-500 ml-3"
            onClick={() => handleClick(newGreeting)}
          >
            Set greeting
          </button>
        </div>
        <br />
        <br />
        <p className="text-center text-gray-100 text-xl">{greeting}</p>
      </div>
    </div>
  );
}
