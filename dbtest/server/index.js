const express=require('express')
const bodyParser = require('body-parser')
const cors=require("cors");
const app = express()
const postgres=require('postgres')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crudreact',
  password: 'password',
  port: 5432,
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.post("/api/insert",(req,res)=>{
    const stockname=req.body.stockname;
    const token=req.body.token;
    console.log(token)
    const postgresInsert="INSERT INTO stocks (stockname,token) VALUES ($1,$2);"
    pool.query(postgresInsert, [stockname,token],(err,result)=>{
        console.log(err)
    });
});
app.listen(3001,()=>{
    console.log("Running on port 3001")
})