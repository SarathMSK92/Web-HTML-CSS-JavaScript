fetch("https://reqres.in/api/users?page=1")

.then((res)=>console.log(res.json()))   
.then((msg) => { console.log(msg.email)

});



// fetch('https://official-joke-api.appspot.com/jokes/programming/random')

// .then((res)=> console.log(res.json()))   // First need to convert the response into json
// // .then((msg)=>console.log(msg[0].setup,msg[0].punchline))
// // .catch((error)=>console.log(error))