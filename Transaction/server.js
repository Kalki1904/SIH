import express from "express";
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 3000;

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const recipient = process.env.RECIPIENT_WALLET;

// Listen for new blocks
provider.on("block", async (blockNumber) => {
  console.log(`⛓️ New block: ${blockNumber}`);
  const block = await provider.getBlock(blockNumber, true);

  for (const tx of block.transactions) {
    if (tx.to && tx.to.toLowerCase() === recipient.toLowerCase()) {
      console.log(`💰 Payment received! From: ${tx.from}, Amount: ${ethers.formatEther(tx.value)} ETH`);
    }
  }
});

app.get("/", (req, res) => {
  res.send("Tourism blockchain server is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
