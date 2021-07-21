// EJEMPLO PROMESAS


const promesa1 = () =>{
 return new Promise((resolve, reject)=>{
    if(true){
      setTimeout(()=>{     
      resolve("resuelto 1");    
    },1000)
    }else{
      reject("neeell")
    }      
  })
}

promesa1()
  .then(dato => {
  console.log("Se recibio: " + dato)
   return new Promise((resolve, reject)=>{
    if(true){
      setTimeout(()=>{     
      resolve("resuelto 2");    
    },2000)
    }else{
      reject("neeell2222")
    }   
      })
  })
.then(dato => {
    console.log("Se recibio: " + dato)
    
      return new Promise((resolve, reject)=>{
    
    if(true){
      setTimeout(()=>{     
      resolve("resuelto 3");    
    },2000)
    }else{
      reject("neeell2222333")
    }    
  })
  })
.then(dato=> console.log(dato))
.catch(err => console.log(err.message))



// EJEMPLO ASYNC AWAIT
async function fecth2(){
  const demo2 = await promesa1();
	console.log("-----"+demo2)
}
fecth2()
.then(()=> console.log("sdadadad"))
.then(() => {
  console.log("Se recibio: asdad")
  
    return new Promise((resolve, reject)=>{
  
  if(true){
    setTimeout(()=>{     
    resolve("resuelto 377");    
  },10000)
  }else{
    reject("neeell2222333")
  }    
})
}).then(dato=> {
  console.log(dato)
  return new Promise((resolve, reject)=>{
  
    if(true){
      setTimeout(()=>{     
      resolve("resuelto 377333");    
    },10000)
    }else{
      reject("neeell2222333")
    }    
  })

}).then((dato)=> console.log(dato))



/*
Esta es una forma de hacer que async/await espere a varios llamados al vez:

async function foo() {
	const [characters , episodes, locations] = await Promise.all([
		getCharacters(),
		getEpisodes(),
		getLocations(),
	])

	console.log(characters)
	console.log(episodes)
	console.log(locations)
}

*/