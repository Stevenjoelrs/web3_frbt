import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";



export default function Home() {
  useEffect(() => {

  })

  const connect = () => {

  }
  
  const disconnect = () => {
    
  }

  return (
    <div className={styles.container}>
      <h1>web3 demo app</h1>

      <button onClick={connect}>Connect Wallet</button>
    </div>
  );
}
