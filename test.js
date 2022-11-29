const {createPool} = require('mysql');

const pool = createPool({
    host: "localhost",
    user:"root",
    database:"food_inventory",
    password:"ensf"
});

pool.query(`Select * from daily_client_needs`, (err,res,f)=>{

    if(err){
        console.log(err);
    }
    
 res.forEach(element => {
        console.log(element.Client);
        
       });
       
       
    
});

