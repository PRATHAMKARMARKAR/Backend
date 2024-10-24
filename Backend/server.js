import express from "express";
import dotenv from "dotenv";
// import axios from "axios";
dotenv.config();
const app = express();
app.get('/api/jokes',(req,res)=>{
    const jokes = [{
        id: 1,
        title: 'skeletons',
        content: 'Why don’t skeletons fight each other? Because they don’t have the guts!'
    },
    {
        id: 2,
        title: 'oranges',
        content: 'What’s orange and sounds like a parrot? A carrot!'
    },
    {
        id: 3,
        title: 'eggs',
        content: 'Why don’t eggs tell jokes? They’d crack each other up!'
    },
    {
        id: 4,
        title: 'spaghetti',
        content: 'What do you call fake spaghetti? An impasta!'
    },
    {
        id: 5,
        title: 'scarecrow',
        content: 'Why did the scarecrow win an award? Because he was outstanding in his field!'
    }
    ];
    res.send(jokes);
});

const port = process.env.PORT||8080;
app.listen(port ,()=>{
    console.log(`Server listen at http://localhost:${port}`);    
})