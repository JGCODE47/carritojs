'use-strit'
//Dom, const, element html
const contentProd = document.querySelector(".contentProd")
contentProd.innerHTML=``



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
                <button class="btn btn-primary agregarProducto" >Agregar</button>
            </div>
        </div>
    </div>`
    })

    
})