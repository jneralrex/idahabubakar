import express from 'express';
const PORT = 3000;

const app = express();

app.listen(PORT, (err)=>{
 if(err) throw err;
 console.log(`dataBase Connected on http://localhost:`+ PORT)
});