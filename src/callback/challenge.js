let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let API = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET',url_api, true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState===4){ //4 es completado
            if(xhttp.status===200){
                callback(null,JSON.parse(xhttp.responseText))
            }else{
                const error = new Error("Error " +  url_api);
                return callback(error,null);
            }
        }
    }

    xhttp.send();
}

fetchData(API, function(error1, data1){
    if(error1) return console.error(error1)
    else{
        fetchData(API +  data1.results[0].id, function(error2, data2){
            if(error2) return console.error(error2)
            else{
                fetchData(API +  data2.results[1].id, function(error3, data3){
                    console.log(data1.info.count)
                    console.log(data1.name)
                    console.log(data1.dimension)
                })
            }
        })
    }
})

