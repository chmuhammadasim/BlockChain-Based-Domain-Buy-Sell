# ETH Daddy 

## Overview

ETH Daddy is a decentralized application (dApp) built on the Ethereum blockchain. It provides a platform for users to interact with smart contracts for managing and distributing funds. The application utilizes Solidity for writing smart contracts, JavaScript for both backend and frontend development, and Hardhat as the development framework. Ethers.js is used for interacting with the Ethereum blockchain, while React.js is employed for building the frontend user interface.

## Technology Stack & Tools

- **Solidity:** Solidity is used for writing smart contracts that define the business logic of the application and enforce rules for fund management.
  
- **JavaScript:** JavaScript is utilized for backend development tasks such as writing scripts for deployment, testing, and interacting with the Ethereum blockchain. It's also used for frontend development using the React.js framework.

- **[Hardhat](https://hardhat.org/):** Hardhat is a development framework for Ethereum that facilitates tasks such as compiling, testing, debugging, and deploying smart contracts.

- **[Ethers.js](https://docs.ethers.io/v5/):** Ethers.js is a JavaScript library for interacting with the Ethereum blockchain. It provides a simple and intuitive API for sending transactions, interacting with smart contracts, and working with Ethereum wallets.

- **[React.js](https://reactjs.org/):** React.js is a popular JavaScript library for building user interfaces. It's used in ETH Daddy for creating a dynamic and responsive frontend application.

## Requirements For Initial Setup

- **NodeJS:** Ensure NodeJS is installed on your system. You can download and install it from the official website: [NodeJS](https://nodejs.org/en/)

## Setting Up

### 1. Clone/Download the Repository
   Clone or download the ETH Daddy repository from the provided source.

### 2. Install Dependencies:
   Run the following command in your terminal to install the required dependencies:
   ```
   $ npm install
   ```

### 3. Run tests
   Execute the following command to run tests and ensure the smart contracts behave as expected:
   ```
   $ npx hardhat test
   ```

### 4. Start Hardhat node
   Run the following command to start a local Hardhat node, which will act as a local Ethereum blockchain for development purposes:
   ```
   $ npx hardhat node
   ```

### 5. Run deployment script
   In a separate terminal window, execute the following command to deploy the smart contracts to the local blockchain:
   ```
   $ npx hardhat run ./scripts/deploy.js --network localhost
   ```

### 6. Configure Frontend
   Modify the frontend code as necessary to connect to the local Ethereum blockchain. Update network configurations, contract addresses, and other relevant settings.

### 7. Start frontend
   Start the frontend application using the following command:
   ```
   $ npm run start
   ```

## Usage
After completing the setup process, you can interact with the ETH Daddy application by accessing the frontend interface through a web browser. Users can perform various actions such as depositing funds, withdrawing funds, and executing transactions as defined by the smart contracts.

## Conclusion
ETH Daddy provides a robust platform for managing and distributing funds using Ethereum smart contracts. By leveraging technologies such as Solidity, Hardhat, Ethers.js, and React.js, the application offers a secure and user-friendly experience for interacting with the Ethereum blockchain.
