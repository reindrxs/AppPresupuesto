let ingresosHTML="";
let totalingresos=0;

let agregarDato=(event)=>{
    //event.preventdefault();

 /*   let tipo = document.getElementById("tipo").value;
    let descripcion = document.getElementById("descripcion").value;
    let valor = document.getElementById("valor").value;

    if (descripcion!="" && valor !==""){
        console.log("descripcion:"+descripcion)
        console.log("valor :"+valor);
        if (tipo==="ingreso"){
            cargaringresos(descripcion,Number(valor));
            document.getElementById("descripcion").value="";
            document.getElementById("valor").value="";
        }else if(tipo ==="egreso"){
            //hace otra cosa
        }
    }else{
        alert("dbe completar todos los campos");
    }
    */
    console.log(tipo);
}

let cargaringresos = (descripcion, valor) =>{
    ingresosHTML +=crearingresosHTML(descripcion, valor);
    totalingresos+=valor; 
    document,getElementById("totalingresos").textContent = formatearCLP(totalingresos);
    document.getElementById("presupuesto").textContent = formatearCLP(totalingresos);
    document.getElementById("lista-ingresos").innerHTML=ingresosHTML;
}

let crearingresosHTML=(descripcion, valor)=>{
    return `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatearCLP(valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>`;   
}

function formatearCLP(numero) {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    }).format(numero);
}