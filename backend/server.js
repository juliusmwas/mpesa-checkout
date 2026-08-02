import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the M-Pesa Backend API 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
