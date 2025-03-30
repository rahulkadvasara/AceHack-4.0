# **Decentralized Research Publisher**  

🚀 **A Blockchain-powered Open Science Platform for Publishing, Funding, and Reviewing Research Papers.**  

## **📌 Overview**  
The **Decentralized Research Publisher** is a **trustless, immutable, and open-access** platform where researchers can:  
- Publish research papers on **IPFS/Arweave**.  
- Get **timestamped proof of authorship** on **Ethereum**.  
- Receive **funding** via **crowdfunded research grants (DAOs)**.  
- Participate in a **transparent, incentivized peer review** system.  

## **🛠️ Tech Stack**  
| Component          | Technology Used |
|-------------------|----------------|
| **Frontend**      | React.js, Web3.js |
| **Backend**       | Flask, SQLite |
| **Blockchain**    | Ethereum, Solidity, Ganache |
| **Storage**       | IPFS, Arweave |
| **Smart Contracts** | Hardhat, Solidity |
| **Wallet**        | Metamask |

## **🗂️ Project Structure**  
```
Decentralized-Research-Publisher/
│── backend/                     # Flask Backend
│   ├── app.py                    # Main Flask app
│   ├── database.py                # SQLite Database
│   ├── routes.py                  # API routes
│   ├── models.py                  # Database models
│   ├── utils.py                   # Helper functions
│   ├── requirements.txt            # Python dependencies
│   ├── uploads/                    # Uploaded research papers
│   ├── templates/                  # HTML templates (Flask views)
│   ├── static/                     # CSS/JS files
│
│── frontend/                     # React Frontend
│   ├── src/
│   │   ├── components/             # React components
│   │   │   ├── Login.js            # Login page
│   │   │   ├── Register.js         # Register page
│   │   │   ├── Dashboard.js        # User dashboard
│   │   │   ├── UploadPaper.js      # Upload research paper
│   │   │   ├── PaperList.js        # List uploaded papers
│   │   │   ├── FundResearch.js     # Fund research feature
│   │   ├── App.js                  # Main React app
│   │   ├── index.js                # Entry point
│   │   ├── web3.js                 # Web3 connection
│   │   ├── config.js               # API configurations
│   ├── package.json                # React dependencies
│   ├── public/                     # Static files
│   ├── .env                        # Environment variables
│
│── smart-contracts/              # Solidity Smart Contracts
│   ├── contracts/                 # Smart contracts
│   │   ├── ResearchFunding.sol     # Smart contract for funding
│   ├── scripts/                    # Deployment scripts
│   │   ├── deploy.js               # Script to deploy contract
│   ├── hardhat.config.js           # Hardhat config for Solidity
│   ├── package.json                # Dependencies for Hardhat
│   ├── test/                       # Smart contract test cases
│
│── README.md
│── .gitignore
│── docker-compose.yml              # Docker setup (optional)
```

## **⚙️ Installation & Setup**  

### **🔹 Prerequisites**  
- **Node.js** (v18+)  
- **Python 3.8+**  
- **Metamask**  
- **Ganache (For local blockchain testing)**  
- **IPFS CLI or Arweave Wallet**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/yourusername/Decentralized-Research-Publisher.git
cd Decentralized-Research-Publisher
```

### **2️⃣ Setup Backend** (Flask API)  
```sh
cd backend
python -m venv venv
source venv/bin/activate  # (On Windows, use: venv\Scripts\activate)
pip install -r requirements.txt
python app.py  # Runs the Flask backend
```

### **3️⃣ Setup Frontend** (React)  
```sh
cd frontend
npm install
npm start  # Runs React app
```

### **4️⃣ Deploy Smart Contracts** (Using Hardhat)  
```sh
cd smart-contracts
npm install
npx hardhat compile
npx hardhat node  # Starts a local Ethereum blockchain
npx hardhat run scripts/deploy.js --network localhost  # Deploys contract
```

## **🌍 Features**  
✅ **Immutable Research Storage** – Stores papers on **IPFS/Arweave**.  
✅ **Blockchain Timestamping** – Ensures **proof of authorship**.  
✅ **NFT-Based Citations** – Every citation is recorded **on-chain**.  
✅ **Decentralized Peer Review** – Researchers earn **tokens for reviews**.  
✅ **Crowdfunded Research Grants** – Funds raised via **DAO voting**.  

## **🛡️ Smart Contracts**  
- **ResearchFunding.sol** – Handles **funding, peer review, and publishing**.  

## **📜 License**  
This project is licensed under **MIT License**.  
