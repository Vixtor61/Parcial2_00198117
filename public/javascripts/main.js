load();

document.querySelector("#registrar").addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(e);
    let data = {
        nombre: document.forms.registrar.elements.nombre.value,
        tipo: document.forms.registrar.elements.tipo.value,
        precio: document.forms.registrar.elements.precio.value
    }
    var formData = new FormData(data);
    console.log(formData+"aksjdkljk");
    
    fetch('/api',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        return res.json()
    }).then(data=>{
        console.log(data);
        
    })    
});


function load () {
    fetch('/api',{
        method: 'GET'
    }).then(function(res) {
        return res.json();
      }).then(data => {
          fila = ""
         // console.log(data);
          data.forEach(element => {
                let a = `<tr>
                <th>${element._id}</th>
                <th>${element.nombre}</th>
                <th>${element.tipo}</th>
                <th>${element.precio}</th>
                </tr>`;
                fila = fila+a;
              
          });
          document.querySelector("#comidatabla").innerHTML = fila;
          
      })
}