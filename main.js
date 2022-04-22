
//ARRAY DE OBJETOS (ARTICULOS EN VENTA)
const tableros = [
    {tipo:"madera",valor:2400,stock:15,juego:"ajedrez"},
    {tipo:"vinilico",valor:1200,stock:50,juego:"ajedrez"},
    {tipo:"imantado",valor:2000,stock:10,juego:"ajedrez"},
    {tipo:"triple",valor:3500,stock:5,juego:"ajedrez"},
    {tipo:"3D",valor:5000,stock:0,juego:"ajedrez"},
    {tipo:"carton",valor:900,stock:15,juego:{tablero:"damas"}}
];

const tableros2 = {...tableros};
console.log(tableros2 )

//console.log(tableros);
tableros.pop();
//console.log(tableros);
const {tipo, valor, stock, juego} = tableros;
console.log(tipo)


const tableroDamas = ( tableros[5]?.juego?.tablero || "Tablero de ajedrez");
console.log(tableroDamas)

//VARIABLES

// Variables get element HTML
let tableroMaderaItem = document.getElementById("tableroMaderaItem");
let tableroVinilicoItem =document.getElementById("tableroVinilicoItem")
let tableroImantadoItem =document.getElementById("tableroImantadoItem")
let tableroTripleItem =document.getElementById("tableroTripleItem")
let tablero3DItem =document.getElementById("tablero3DItem")
let tresCuotas = document.getElementById("checkbox")
let seisCuotas = document.getElementById("checkbox1")
let nueveCuotas = document.getElementById("checkbox2")
let doceCuotas = document.getElementById("checkbox3")
let resultadohtml = document.getElementById("resultado");
let cerrarSesion = document.getElementById("botonSalir")
let mostrarUsuario = document.getElementById("usuario");
//Variables de uso
let cuotas = 0;
let eleccion;
let articulos ;
let chau;
let estado =1;

let usuario =JSON.parse(localStorage.getItem(0));
mostrarUsuario.innerText = `Usuario: ${usuario[0]}`
cargarDolares();


//Cosntantes
const prueba = [0];

// Mapeo de stocks
const stocks = tableros.map( (num)=> (sort = num.stock));
console.log(stocks);
const sinStock = (primero,segundo) => {
        const indices = [];
        primero.forEach((elemento,indice) =>{
            if (segundo.includes(elemento)){
                indices.push(indice);
            };
        });
        return indices;
    }
    const noStock = (sinStock(stocks,prueba ));













// MAIN LOOP

function cargarDolares(){
    let info;
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
        
        .then(resultado => resultado.json())
        .then(data => {
            info = data.map(e =>{
                return e.casa
            })
            let dolarOficial = info[0].nombre;
            let dolarOficialCompra = info[0].compra;
            let dolarOficialVenta = info[0].venta;
            let dolarBlue = info[1].nombre;
            let dolarBlueCompra = info[1].compra;
            let dolarBlueVenta = info[1].venta;
            console.log(dolarOficial);
            console.log(dolarOficialCompra);
            console.log(dolarOficialVenta);
            console.log(dolarBlue);
            console.log(dolarBlueCompra);
            console.log(dolarBlueVenta);
        const dolarOficialNombre = document.getElementById("dolarOficial").innerHTML = dolarOficial;
        const dolarOficialValorCompra =document.getElementById("dolarOficialCompra").innerHTML = `Compra: ${dolarOficialCompra}`;
        const dolarOficialValorVenta =document.getElementById("dolarOficialVenta").innerHTML = `Venta: ${dolarOficialVenta}`;
        const dolarBluelNombre = document.getElementById("dolarBlue").innerHTML = dolarBlue;
        const dolarBlueValorCompra =document.getElementById("dolarBlueCompra").innerHTML = `Compra: ${dolarBlueCompra}`;
        const dolarBlueValorVenta =document.getElementById("dolarBlueVenta").innerHTML = `Venta: ${dolarBlueVenta}`;
        })

}






let tableroMaderaItemC = tableroMaderaItem.addEventListener("click", (resultado)=> {
    articulos = 1;
    console.log("click");
    
        let eleccion = seleccionArticulo(stocks,noStock,tableroMaderaItemC);
        
        let cuotasSeleccionadas = SeleccionCuotas();
        let resultados = calcularCuotas(eleccion,cuotasSeleccionadas);
        let interes = calcularInteres(tableros[0].valor);
        //console.log(interes);
        mostrarResultado(resultados,interes);
        
        borrarResultado();
    
});

let tableroVinilicoItemC = tableroVinilicoItem.addEventListener("click", (resultado)=> {
    articulos = 2;
    console.log("click");
    let eleccion = seleccionArticulo(stocks,noStock,tableroMaderaItemC);
    let cuotasSeleccionadas = SeleccionCuotas();
    let resultados = calcularCuotas(eleccion,cuotasSeleccionadas);
    let interes = calcularInteres(tableros[1].valor);
    console.log(interes);
    mostrarResultado(resultados,interes);
    borrarResultado();
});

let tableroImantadoItemC = tableroImantadoItem.addEventListener("click", (resultado)=> {
    articulos = 3;
    console.log("click");
    let eleccion = seleccionArticulo(stocks,noStock,tableroMaderaItemC);
    let cuotasSeleccionadas = SeleccionCuotas();
    let resultados = calcularCuotas(eleccion,cuotasSeleccionadas);
    let interes = calcularInteres(tableros[2].valor);
    console.log(interes);
    mostrarResultado(resultados,interes);
    borrarResultado();
});

let tableroTripleItemC = tableroTripleItem.addEventListener("click", (resultado)=> {
    articulos = 4;
    console.log("click");
    let eleccion = seleccionArticulo(stocks,noStock,tableroMaderaItemC);
    let cuotasSeleccionadas = SeleccionCuotas();
    let resultados = calcularCuotas(eleccion,cuotasSeleccionadas);
    let interes = calcularInteres(tableros[3].valor);
    console.log(interes);
    mostrarResultado(resultados,interes);
    borrarResultado();
});

let tablero3DItemC = tablero3DItem.addEventListener("click", (resultado)=> {
    articulos = 5;
    console.log("click");
    let eleccion = seleccionArticulo(stocks,noStock,tableroMaderaItemC);
    let cuotasSeleccionadas = SeleccionCuotas();
    let resultados = calcularCuotas(eleccion,cuotasSeleccionadas);
    let interes = calcularInteres(tableros[4].valor);
    console.log(interes);
    mostrarResultado(resultados,interes);
    borrarResultado();
});








//FUNCIONES


// FUNCION EN LA QUE SE ELIJE EL ARTICULO DESEADO DE UNA LISTA
function seleccionArticulo(stocks,noStock,tableroMaderaItemC){
    
    //articulos = inputTablero.value  ;  
    //console.log(articulos);
    
    if( articulos == "1"|| articulos == "Tablero vinilico"){
        articulos = "Tablero de madera";
        chau = stocks[0];
        console.log(noStock);
        if ( noStock.includes(0)  ){
            console.log(`Artículo ${articulos}\nSin stock`)
        
        }else{
            
            console.log(`has seleccionado ${articulos}\nEn stock`);
            console.log(`El valor total de ${articulos} es $${(tableros[0].valor)}`);
            
        }
    }else if( articulos == "2"|| articulos == "Tablero vinilico"){
        articulos = "Tablero vinilico";
        chau = (stocks[1]);
        if(noStock.includes(1)  ){
            console.log(`Artículo ${articulos} sin stock`)
        
        }else{
            
            console.log(`has seleccionado ${articulos}\nEn stock`);
            console.log(`El valor total de ${articulos} es $${(tableros[1].valor)}`);
        }
    }else if(articulos =="3"|| articulos == "Tablero imantado"){
        articulos= "Tablero imantado";
        chau = (stocks[2]);
        if(noStock.includes(2)  ){
            console.log(`Artículo ${articulos}\nSin stock`)
            
        }else{
            
            console.log(`has seleccionado ${articulos}\nEn stock`);
            console.log(`El valor total de ${articulos} es $${(tableros[2].valor)}`);
        }
    }else if(articulos=="4"|| articulos =="Tablero triple"){
        articulos ="Tablero triple";
        chau = stocks[3];
        if(noStock.includes(3)  ){
            console.log(`Artículo ${articulos}\nSin stock`)
            
        }else{
                
            console.log(`has seleccionado ${articulos}\nEn stock`);
            console.log(`El valor total de ${articulos} es $${(tableros[3].valor)}`);
        }
    }else if(articulos == "5"|| articulos == "Tablero 3D"){
        articulos = "Tablero 3D";
        chau = stocks[4];
        if (noStock.includes(4)  ){
            console.log(`Artículo ${articulos}\nSin stock`)
            
        }else{
            
            console.log(`has seleccionado ${articulos}\n En stock`);
            console.log(`El valor total de ${articulos} es $${(tableros[4].valor)}`);
        }
        
    }
    else {
        console.log("No contamos con ese artículo :( selecciona uno del listado.")
        return estado = 2;
        console.log("ACA ESTADO ESTA!" + estado)
    }
    
    return articulos;
    
} 
SeleccionTresCuotas = tresCuotas.addEventListener("change", ()=>{
    cuotas = tresCuotas.value;
    //console.log(cuotas)
});
SeleccionSeisCuotas = seisCuotas.addEventListener("change", ()=>{
    cuotas = seisCuotas.value;
    //console.log(cuotas)
});    
SeleccionNueveCuotas = nueveCuotas.addEventListener("change", ()=>{
    cuotas = nueveCuotas.value;
    //console.log(cuotas)
    //calcularInteres()
});       

SeleccionDoceCuotas = doceCuotas.addEventListener("change", ()=>{
    cuotas = doceCuotas.value;
    //console.log(cuotas)
});       


// FUNCION DONDE SE SELECCIONA LA CANTIDAD DE CUOTAS SI Y SOLO SI EL ARTICULO DESEADO ESTA EN STOCK
function SeleccionCuotas(){
    
    
    //console.log(chau);
    if (chau >> 0){
        
        console.log(`Se seleccionaron ${cuotas} cuotas`)
        estado = 0;
        return cuotas;
        
        
    }else{
        console.log("Imposible calcular cuotas");
    }
    
}



// FUNCION QUE CALCULA EL RESULTADO DEL ARTICULO SELECCIONADO CON LA CUOTA SELECCIONADA
function calcularCuotas(eleccion,cuotasSeleccionadas){
    
    
    if (chau >> 0){
        if ((eleccion == "Tablero de madera" || eleccion == "1") && (tableros[0].stock >> 0) ){
            
            
            
            if (cuotasSeleccionadas == 3){
                return (tableros[0].valor)/(cuotas);
            }else if (cuotasSeleccionadas == 6){
                return (tableros[0].valor)/(cuotas);
            }else if (cuotasSeleccionadas == 9){
                return (tableros[0].valor)/(cuotas);
            }else if (cuotasSeleccionadas == 12){
                return (tableros[0].valor)/(cuotas);
            }
            

        }

        if (eleccion == "Tablero vinilico" || eleccion == "2"){
            
            
            
            if (cuotasSeleccionadas == 3){
            return (tableros[1].valor)/(cuotas);
            }else if (cuotasSeleccionadas == 6){
                return (tableros[1].valor)/(cuotas);
            }else if (cuotasSeleccionadas == 9){
                return (tableros[1].valor)/(cuotas);
            }else if (cuotasSeleccionadas == 12){
                return (tableros[1].valor)/(cuotas);
            }
            

        }

        if (eleccion == "Tablero imantado" || eleccion == "3"){
            
            
            
            if (cuotasSeleccionadas == 3){
            return (tableros[2].valor)/(cuotas);
            }else if (cuotasSeleccionadas == 6){
                return (tableros[2].valor)/(cuotas);
            }else if (cuotasSeleccionadas == 9){
                return (tableros[2].valor)/(cuotas);
            }else if (cuotasSeleccionadas == 12){
                return (tableros[2].valor)/(cuotas);
            }
            

        }

        if (eleccion == "Tablero triple" || eleccion == "4"){
        
        
        
            if (cuotasSeleccionadas == 3){
            return (tableros[3].valor)/(cuotas);
            }else if (cuotasSeleccionadas == 6){
                return (tableros[3].valor)/(cuotas);
            }else if (cuotasSeleccionadas == 9){
                return (tableros[3].valor)/(cuotas);
            }else if (cuotasSeleccionadas == 12){
                return (tableros[3].valor)/(cuotas);
            }
        

        }
    }

    
}


function calcularInteres(accion){
    if(cuotas ==9){
        //alert(accion);
        return(((accion*12)/100)/9);
    }else if(cuotas ==12){
        return(((accion*18)/100)/12);
    }
}

//
const mostrarResultado = (show,most) => {
    
    //console.log("estado es" + estado);
    //console.log(articulos);
    //console.log(cuotas);
    //console.log(most);
    if (chau >> 0 ){
            if (cuotas != 3 && cuotas != 6 && cuotas != 9 && cuotas !=12 && estado != 2){
                console.log("ERROR !!! CUOTA NO VÁLIDA.\n Seleccione una cuota valida (3, 6, 9 o 12)")
                //alert("ERROR !!! Ninguna cuota ha sido seleccionada.\n Seleccione una cuota valida (3, 6, 9 o 12)");
                swal({
                    text: "ERROR !!! CUOTA NO VÁLIDA.\n Seleccione una cuota valida (3, 6, 9 o 12)",
                    icon: "error"
                })
                //return SeleccionCuotas();
                return estado = 1;
                //borrarResultado();
            }
            //console.log();
            console.log(`El total de cada cuota será ${show}`)
            //console.log(typeof(show))
            
                
                if (most >> 0 && cuotas == 9){
                    
                    resultadohtml.innerHTML = `<div class="divR"> <h2 class="centro">El total de cada cuota de ${articulos} será:</h2>
                <h2 class="centro">$${show.toFixed(2)} + 12% de interes ($${most.toFixed(2)}).</h2>
                <h2 class="centro">Total c/cuota = $${(show+most).toFixed(2)} .</h2></div>`
                    
                }else if (most>> 0 && cuotas == 12){
                    resultadohtml.innerHTML = `<div class="divR"> <h2 class="centro">El total de cada cuota de ${articulos} será:</h2>
                <h2 class="centro">$${show.toFixed(2)} + 18% de interes ($${most.toFixed(2)}).</h2>
                <h2 class="centro">Total c/cuota = $${(show+most).toFixed(2)} .</h2></div>`

                }else{
                    resultadohtml.innerHTML = `<div class="divR"> <h2 class="centro">El total de cada cuota de ${articulos} será:</h2>
                                            <h2 class="centro">$${show.toFixed(2)} </h2></div>`
                }                            
                  
                 
        }else{
            
            resultadohtml.innerHTML = `<h2 class="titulo2">${articulos} no tiene stock disponible</h2>`
            
            
        } 
     //estado == 0 ? resultadohtml.innerHTML = `<h2 class="titulo2">${articulos} Inexistente , seleccione uno del listado</h2>`:  resultadohtml.innerHTML = `<h2 class="titulo2">${articulos} Seleccion Correcta</h2>`    
    
        
}
function borrarResultado(){
    
   tresCuotas.checked = false;
   seisCuotas.checked = false;
   nueveCuotas.checked = false;
   doceCuotas.checked = false;
   cuotas =0;

}

let sesionCerrada = cerrarSesion.addEventListener("click", ()=> {
    window.location="index.html"

});






  

  

