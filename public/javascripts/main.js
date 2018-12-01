load();


function load () {
    fetch('/users',{
        method: 'GET'
    }).then(res=>res.json()).then(data => {
        console.log(data);
        
    })
}