import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import userRoutes from "./routes/user.route.js"
import connection from "./utils/database.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

//localhost:4000/api/v1/user
app.use('/api/v1/user', userRoutes);

app.listen(PORT, ()=>{
    connection();
    console.log(`server connected on port ${PORT}`);
})
