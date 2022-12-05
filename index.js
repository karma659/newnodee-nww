
/*
  // Set timeout asynchronous  function
let i=0;
function myGreeting() {
 console.log( i);
 
 ++i;
};

console.log("Happy");

for (let i = 0; i < 10; i++) {
    if (i === 5) { break; }
    const myTimeout1 = setTimeout(()=>{console.log(++i)}, 4000);
    console.log(i);

  }
 
const myTimeout2 = setTimeout(myGreeting, 2000);
const myTimeout3 = setTimeout(myGreeting, 3000);

*/

/*
//synchronous function

function f1() {
console.log("f1 finish");
  }
  function f2() {
    f1();
    console.log("f2 finish");
  }
  function f3() {
    f2();
    console.log("f3 finish");
  }
  f3();
*/
/*
//asynchronous function
async function f() {

    let promise = new Promise((res, rej) => {
      setTimeout(() => res("Hello"), 1000)
    });
  
    let result = await promise
  
   console.log(result);
  }
  
  f();
  */


   const express = require("express")
   
   const app=express();


   var sql = require('mssql');


   var config = {
    // user: 'akash',
     //password: 'password',
     server: 'DESKTOP-24MPU7I\SQLEXPRESS', 
     database: 'SchoolDB' ,
     options:{
           trustedConnection:true
     }
   };
   
   
      // connect to your database
      sql.connect(config, function (err) {
       
       if (err) console.log(err);
   
       // create Request object
       var request = new sql.Request();
          
       // query to the database and get the records
       request.query('select * from Student', function (err, recordset) {
           
           if (err) console.log(err)
          else{
           // send records as a response
           console.log(recordset);
          }
       });
   });
   
   
   var server = app.listen(5000, function () {
   console.log('Server is running..');
   });