const somethingWillHappen = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Correcto!')
        }else{
            resolve('No se pudo :(')
        }
    })
}

somethingWillHappen()
.then(response=> console.log(response))
.catch(err => console.error(err))

const somethingWillHappen2 =()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('Trueee')
            },2000)
        }else{
            const error = new Error('Neeel')
            reject(error)
        }
    })
}

somethingWillHappen2()
.then(response=>console.log(response))
.catch(err => console.error(err))