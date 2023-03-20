'use-strit'
//dom 
const productosCarrito = document.querySelector(".productosCarrito")
productosCarrito.innerHTML=``
//capturar productos almacenados en el localStorage
var productosLocal = JSON.parse(localStorage.getItem("productos")) 

const formatModena = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

function mostrarProductosCarrito(){
    productosLocal.map(item=>{
        productosCarrito.innerHTML+=`<div class="row pb-3 eliminarVisual" key="${item.id}">
        <div class="col"><img class="w-50" src="${item.img}" /></div>
        <div class="col-3">${item.name}</div>
        <div class="col"><input class="form-control" min="${item.cantidad}" value="${item.cantidad}" type="number">
        </div>
        <div class="col">${formatModena.format(item.prece)}</div>
        <div class="col"><button class="btn btn-danger eliminaP" id_producto="${item.id}">X</button></div>
    </div>`
    })
    eliminarProduc()
    total()
}   

mostrarProductosCarrito()

//eliminar producto del carrito

function eliminarProduc(){
    const eliminaP = document.querySelectorAll(".eliminaP")
    const btnE = [...eliminaP]
    btnE.map(item=>{
        item.addEventListener("click", e =>{
        const nuevosProductos = productosLocal.filter(item=>{
            if(parseInt(item.id) != parseInt(e.target.getAttribute("id_producto"))){
                return item;
            }
        })
        localStorage.setItem("productos", JSON.stringify(nuevosProductos))
        productosLocal=JSON.parse(localStorage.getItem("productos")) 
        const eliminarVisual = document.querySelectorAll(".eliminarVisual")
        const ev = [...eliminarVisual]
        for(let i=0; i < ev.length; i++){
            if(parseInt(ev[i].getAttribute("key")) == parseInt(e.target.getAttribute("id_producto"))){
                ev[i].remove()
            }
        }
        total()
    })
   
    })
}


function total(){
    const totalC = document.querySelector(".totalC")
    const totaAp = document.querySelector(".totaAp")
    var sumatoriaTotal = 0
    var productoLl = JSON.parse(localStorage.getItem("productos")) 
    productoLl.map(item=>{
        sumatoriaTotal = sumatoriaTotal + item.prece 
    })




    totalC.innerHTML=`<b>${formatModena.format(sumatoriaTotal)}</b>`
    totaAp.setAttribute("total", sumatoriaTotal)
}