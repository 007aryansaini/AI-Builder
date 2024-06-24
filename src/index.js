import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FormProvider from "./context/store";
import { ResponseProvider } from "./context/AiContext";
import { BrowserRouter as Router } from "react-router-dom";
import { AiProvider } from "./context/Generated";
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet, sepolia } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = 'b534a3a93b66b9fccda2a2f70d875708'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet , sepolia] 
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WagmiProvider config={config}>
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <Router>
      <AiProvider>
        <ResponseProvider>
          <FormProvider>
            <App />
          </FormProvider>
        </ResponseProvider>
      </AiProvider>
    </Router>
  </React.StrictMode>
  </QueryClientProvider>
    </WagmiProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
