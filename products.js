'use-strit'
//Dom, const, element html
const contentProd = document.querySelector(".contentProd")
contentProd.innerHTML=``

//array productos

var productos = []

//Mostrar todos los productos

async function ProducAjax(){
    const response = await fetch("https://raw.githubusercontent.com/JGCODE47/carritojs/master/products.json")
    return response.json()
}

Promise.resolve(ProducAjax()).then(item=>{
    item.products.map(res=>{
        contentProd.innerHTML+=`<div class="col-4 pb-2">
        <div class="card" style="width:18rem;">
            <img src="${res.img}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${res.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted ">$${res.prece}</h6>
                <button class="btn btn-primary agregarProducto" id_producto="${res.id}" img="${res.img}" name="${res.name}" precio="${res.prece}">Agregar</button>
            </div>
        </div>
    </div>`
    })
    agregarProductoC()

    
})

//capturar valores de los productos 
function agregarProductoC(){
    const agregarProducto = document.querySelectorAll(".agregarProducto")
const mapbuttom = [...agregarProducto]
mapbuttom.map(items=>{
    items.addEventListener("click", btnAgregarCarrito)
})
}


//funcion agregar al carrito localStorage
function btnAgregarCarrito(e){
    const producto = {
        "id": parseInt(e.target.getAttribute("id_producto")),
        "name": e.target.getAttribute("name"),
        "img": e.target.getAttribute("img"),
        "prece": parseInt(e.target.getAttribute("precio"))
    }

    if(productos.length == 0){
        productos.push(producto)
        console.log(productos)
    }else{
       productos.filter(item=>parseInt(item.id) == parseInt(producto.id) ? false : productos.push(producto))
       console.log(productos)
        
    }
}