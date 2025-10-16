# Web3 FRBT

A Next.js-based Web3 application that demonstrates wallet connection and blockchain interaction using Web3.js and web3-react.

## 📋 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Usage](#usage)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## ✨ Features

- 🔐 **Wallet Connection**: Connect to MetaMask and other Web3 wallets
- 🔗 **Ethereum Network Support**: Configured for Ethereum Mainnet
- 💾 **Persistent Connection**: Remembers wallet connection using localStorage
- ⚡ **Real-time Updates**: Displays connected account and network ID
- 🎨 **Modern UI**: Built with Next.js and React
- 🔄 **Auto-reconnect**: Automatically reconnects to previously connected wallets

## 🛠 Technologies

This project is built with:

- **[Next.js 15.5.5](https://nextjs.org/)** - React framework for production
- **[React 19.1.0](https://react.dev/)** - JavaScript library for building user interfaces
- **[Web3.js 4.16.0](https://web3js.readthedocs.io/)** - Ethereum JavaScript API
- **[@web3-react/core](https://github.com/Uniswap/web3-react)** - Simple, powerful React framework for building modern Ethereum dApps
- **[@web3-react/injected-connector](https://github.com/Uniswap/web3-react)** - Connector for injected Web3 providers (MetaMask, etc.)
- **ESLint** - Code linting and formatting

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.17 or higher recommended)
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- **MetaMask** or another Web3-compatible browser extension

## 🚀 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Stevenjoelrs/web3_frbt.git
cd web3_frbt
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## 🎯 Getting Started

1. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

2. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

3. **Connect your wallet**

Click the "Connect Wallet" button and approve the connection in your MetaMask extension.

## 📁 Project Structure

```
web3_frbt/
├── config/
│   └── web3/
│       └── index.js          # Web3 configuration and connector setup
├── pages/
│   ├── _app.js               # Custom App component with Web3ReactProvider
│   ├── _document.js          # Custom Document component
│   ├── index.js              # Main page with wallet connection UI
│   └── api/
│       └── hello.js          # Example API route
├── public/                   # Static files
├── styles/
│   ├── globals.css           # Global styles
│   └── Home.module.css       # Component-specific styles
├── eslint.config.mjs         # ESLint configuration
├── jsconfig.json             # JavaScript configuration
├── next.config.mjs           # Next.js configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

## ⚙️ Configuration

### Web3 Configuration

The Web3 configuration is located in `config/web3/index.js`:

```javascript
import Web3 from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector';

const ETHEREUM_NETWORK_ID = 1; // Ethereum Mainnet

export const connector = new InjectedConnector({
    supportedChainIds: [ETHEREUM_NETWORK_ID],
})

export const getLibrary = (provider) => {
    const library = new Web3(provider);
    return library;
}
```

**Supported Network:**
- Network ID: `1` (Ethereum Mainnet)

To support additional networks, add their chain IDs to the `supportedChainIds` array:

```javascript
export const connector = new InjectedConnector({
    supportedChainIds: [
        1,    // Ethereum Mainnet
        5,    // Goerli Testnet
        137,  // Polygon Mainnet
        // Add more as needed
    ],
})
```

## 💡 Usage

### Connecting a Wallet

1. Click the **"Connect Wallet"** button on the homepage
2. Approve the connection request in your MetaMask extension
3. Once connected, you'll see:
   - Your connected wallet address
   - The network ID you're connected to
   - A "Disconnect Wallet" button

### Disconnecting a Wallet

Click the **"Disconnect Wallet"** button to disconnect your wallet from the application.

### Persistent Connection

The application automatically saves your connection preference in localStorage. When you revisit the page, it will attempt to reconnect to your wallet automatically.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Components

#### `pages/_app.js`

Wraps the application with `Web3ReactProvider` to enable Web3 functionality throughout the app:

```javascript
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from '../config/web3';

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
```

#### `pages/index.js`

Main component that handles wallet connection and displays connection status using the `useWeb3React` hook.

### Web3React Hooks

The application uses the `useWeb3React` hook which provides:

- `activate` - Function to connect wallet
- `deactivate` - Function to disconnect wallet
- `active` - Boolean indicating if wallet is connected
- `account` - Connected wallet address
- `chainId` - Connected network ID
- `error` - Error object if connection fails

