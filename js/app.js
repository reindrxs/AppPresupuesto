let ingresosHTML="";
let totalingresos=0;
let egresosHTML="";
let totalegresos=0;
let presupuestoTotal=0
let porcentaje =0

let agregarDato=(event)=>{
    event.preventDefault();

    let tipo = document.getElementById("tipo").value;
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
            cargarEgresos(descripcion,Number(valor));
        }
    }else{
        alert("debe completar todos los campos");
    }
    
    console.log(tipo);
}

let cargaringresos = (descripcion, valor) =>{
    ingresosHTML +=crearingresosHTML(descripcion, valor);
    totalingresos+=valor; 
    porcentaje = (totalegresos/totalingresos*100)
    presupuestoTotal= (totalingresos-totalegresos)
    document.getElementById("ingresototal").textContent = formatearCLP(totalingresos);
    document.getElementById("presupuesto").textContent = formatearCLP(totalingresos);
    document.getElementById("lista-ingresos").innerHTML=ingresosHTML;
    document.getElementById("porcentaje").textContent= porcentaje + "%";
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

let cargarEgresos = (descripcion, valor)=>{
    egresosHTML +=crearingresosHTML(descripcion, valor);
    totalegresos+=valor;
     porcentaje = (totalegresos/totalingresos*100)
     presupuestoTotal= (totalingresos-totalegresos)
    document.getElementById("egresototal").textContent =formatearCLP(totalegresos);
    document.getElementById("presupuesto").textContent =formatearCLP(presupuestoTotal);
    document.getElementById("lista-egresos").innerHTML=egresosHTML;
}

let crearegresosHTML =(descripcion,valor)=>{
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