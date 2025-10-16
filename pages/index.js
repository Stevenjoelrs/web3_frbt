import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

import styles from "../styles/Home.module.css";
import { connector } from "../config/web3";

export default function Home() {
  const {
    activate,
    active,
    deactivate,
    error,
    account,
    chainId
  } = useWeb3React()

  const connect = useCallback(() => {
    activate(connector)
    localStorage.setItem('previouslyConnected', true)
  }, [activate]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem('previouslyConnected')
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('previouslyConnected') === 'true') {
      connect()
    }
  }, [connect])

  if (error) {
    return <p>Error connecting to wallet</p>
  }

  return (
    <div className={styles.container}>
      <h1>web3 demo app</h1>
      {
        active
        ? <>
            <button onClick={disconnect}>
              Disconnect Wallet
            </button>
            <p>
              You are connected to the network ID: {chainId}.<br />
              Your account is {account}.
            </p>
          </>
        : <button onClick={connect}>Connect Wallet</button>
      }
    </div>
  );
}
