import UserRoutes from './routes/user.js';
import  express from 'express' ;
import bodyParser from 'body-parser';
import {v4 as uuidv4} from 'uuid';

import path from "path"
const __dirname = path.resolve();
const router = express.Router();
import createPool, { createConnection } from 'mysql';
import { randomUUID } from 'crypto';




const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use('/user', UserRoutes);

app.use(express.static(path.join(__dirname,'/public')));

const pool = createConnection({
    host: "localhost",
    user:"root",
    database:"beemed_database",
    password:"ensf"
});

export default app;
export { pool};

;


       
       
    






app.get('/',(req,res)=>{
console.log("get-request");
res.send("Test first from homepage");

});

app.post('/user', (req,res)=>{
    pool.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var first = req.body.firstname;
        var last = req.body.lastname;
        var Email = req.body.Email;
        var age = parseInt(req.body.Birthday);
        var gender = req.body.gender;
        var weight = parseInt(req.body.weight);
        var height = parseInt(req.body.height);
    
    
        var Password = req.body.Password;
        
        var id = uuidv4();
        console.log(first + height + age);
        var sql = "INSERT INTO user_table( UserID, firstname,lastname,Password,Sex,age,weight,height,Email)  VALUES ('"+id+"','"+first+"','"+last+"','"+Password+"','"+gender+"','"+age+"','"+weight+"','"+height+"','"+Email+"' );"
        pool.query(sql, function (err, result) {
          if (err) console.log("exist");
          console.log("1 record inserted");
        });
      });

})





app.listen(PORT,()=>{
    console.log(`Server running on Port:${PORT}`);
});
