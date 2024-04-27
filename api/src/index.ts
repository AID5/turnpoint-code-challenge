import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();
const PORT = 3000;

// The code below starts the API with these parameters:
// 1 - The PORT where your API will be available
// 2 - The callback function (function to call) when your API is ready
app.listen(PORT, () =>
  console.log(`The API is running on: http://localhost:${PORT}.`)
);
