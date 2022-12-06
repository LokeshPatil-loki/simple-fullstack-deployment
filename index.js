import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname+"/public")))
app.get("/loki", (req,res) => {
    console.log(req);
    res.status(200).json({
        message:"Working"
    });
});

app.listen(PORT,()=>{
    console.log("Started on PORT " + PORT)
});