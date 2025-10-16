import "@/styles/globals.css";
import { getLibrary } from "../config/web3";
import { Web3BaseProvider } from "@web3-react/core";


export default function App({ Component, pageProps }) {
  return (
  <Web3BaseProvider getLibrary={getLibrary}>
    <Component> ( ...pageProps)</Component>
  </Web3BaseProvider>
  )
}