
// fetch({
//     url: 'https://jsonplaceholder.typicode.com/todos/1',
// headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
// },
// }).then((res) => res.json()).then((res) => {
//     console.log('res')
//     alert('then')
// }).catch((err) => {
//     console.log(err, "error")
// })
// const axios = require('axios');


// axios.get('http://localhost:8000', {
//     headers: {
//         'Access-Control-Allow-Origin': '*',

//     }
// })
//     // .then(response => response.json())
//     .then(json => console.log(json))
function loadScript(url, callback) {

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
loadScript('https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.js', (data) => {
    console.log(data, 'callback')
    axios.get('http://waahab-task.herokuapp.com/test').then(data => {
        console.log(data)
        let doc = document.getElementById('widget')
        doc.innerHTML = data.data
    }).catch(err => {
        console.log(err)
    })
})
