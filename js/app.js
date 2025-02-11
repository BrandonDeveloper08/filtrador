const year = document.querySelector("#year")
const marca = document.querySelector("#marca")
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo")
const puertas = document.querySelector("#puertas")
const transmision = document.querySelector("#transmision")
const color = document.querySelector("#color")

const resultado = document.querySelector("#resultado")


const max = new Date().getFullYear()
const min = max - 10

const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: ""
}


document.addEventListener("DOMContentLoaded", ()=>{
    mostrarAutos(autos)
    llenarSelect()
})

marca.addEventListener("change", e =>{
    datosBusqueda.marca = e.target.value
    filtrarAuto()
})
year.addEventListener("change", e =>{
    datosBusqueda.year = e.target.value
    filtrarAuto()
})
maximo.addEventListener("change", e =>{
    datosBusqueda.maximo = e.target.value
    filtrarAuto()
})
minimo.addEventListener("change", e =>{
    datosBusqueda.minimo = e.target.value
    filtrarAuto()
})
puertas.addEventListener("change", e =>{
    datosBusqueda.puertas = e.target.value
    filtrarAuto()
})
color.addEventListener("change", e =>{
    datosBusqueda.color = e.target.value
    filtrarAuto()
})


function mostrarAutos(autos){
    limpiarHTML()
    autos.forEach(auto => {
        const autoHTML = document.createElement("P")
        const { marca, modelo, year, precio, puertas ,color ,transmision} = auto
        autoHTML.textContent = `
            ${marca} - ${modelo} - ${year} - Precio: ${precio} - ${puertas} Puertas - ${color} - Transmición: ${transmision}
        `
        resultado.appendChild(autoHTML)
    });

    if(!resultado.firstChild){
        const sinResultado = document.createElement("P")
        sinResultado.textContent = "NO HAY RESULTADOS"
        sinResultado.classList.add("alerta", "error")
        resultado.appendChild(sinResultado)
    }
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect(){
    for( let i = max; i >= min; i--){
        const option = document.createElement("option"); 
        option.value = i;
        option.textContent = i;
        year.appendChild(option)
    }
}

function filtrarAuto(){
    const resultadoAutos = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarColor)
    mostrarAutos(resultadoAutos)
}

function filtrarMarca(auto){
    const {marca}  = datosBusqueda
    if(marca){
        return auto.marca === marca
    }
    return auto
}

function filtrarYear(auto){
    const {year}  = datosBusqueda
    if(year){
        return auto.year == year
    }
    return auto
}   

function filtrarMinimo(auto){
    const {minimo}  = datosBusqueda
    if(minimo){
        return auto.precio >= minimo
    }
    return auto
}

function filtrarMaximo(auto){
    const {maximo}  = datosBusqueda
    if(maximo){
        return auto.precio <= maximo
    }
    return auto
}

function filtrarPuertas(auto){
    const {puertas}  = datosBusqueda
    if(puertas){
        return auto.puertas == puertas
    }
    return auto
}

function filtrarColor(auto){
    const {color}  = datosBusqueda
    if(color){
        return auto.color === color
    }
    return auto
}