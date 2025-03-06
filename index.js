import express, { response } from 'express';
import axios from 'axios';
// HINTS:
// 1. Import express and axios
const app=express();
const port=3000;

const token='382cbefc-873e-4a83-b283-b672760253f6';
const config={
    headers:{
        Autherization:`Bearer ${token}`,
    }
}
// 2. Create an express app and set the port number.

app.use(express.static('public'));
// 3. Use the public folder for static files.
app.get('/',async(req,res)=>{
    try{
        const response=await axios.get('https://secrets-api.appbrewery.com/random',config);
    res.render('index.ejs',{secret:response.data.secret,user:response.data.username});
    }catch(error){
        console.log(error.response.data);
        res.status(500);
    }
    
});
// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
// 6. Listen on your predefined port and start the server.
