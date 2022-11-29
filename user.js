import  express from 'express' ;
import bodyParser from 'body-parser';
import app from '../testapi.js'
import { pool } from '../testapi.js';

import path from "path"
const __dirname = path.resolve();
const router = express.Router();
router.use(express.static(path.join(__dirname,'/public')))
console.log("__dirname,'/public")
router.use(bodyParser.urlencoded({extended:true}))



router.get('/', (req, res)=>{
    console.log("user");
    res.sendFile(path.join( __dirname, 'signup.html'));
    
});
router.post('/user.js', (res,req)=>{

console(req.body);


});





export default router;