// // API REST

// // Maneja su informacion 

// // URL base https://rickandmortyapi.com/api/

// // - endpoints
//    // episode/
//    // location/
//    // character/

// // - recursos 
// // informacion puesta a disposicion en los endpoints 
// // generalmente, el id de cada objeto 

// // optativo: query params o parametros de busqueda 
// // estructura:
// // ?gender=female&status=alive 

// // url completa:
// // https://rickandmortyapi.com/api/character?gender=female 

// const personajes = document.querySelector("#personajes")
// const prev = document.querySelector("#prev")
// const next = document.querySelector("#next")

// let paginaActual = 1 


// const buscarInformacion = () => {
//   fetch(`https://rickandmortyapi.com/api/character?page=${paginaActual}`)
//   .then((res) => res.json())
//   .then((data) => {
//     crearTarjetasPersonaje(data.results)
//   })
// }

// buscarInformacion()

// next.onclick = () => {
//   paginaActual = paginaActual + 1
//   buscarInformacion()
 
// }

// prev.onclick = () => {
  
//   if (paginaActual === 1) {
//     prev.disabled = true
//   }
//   paginaActual = paginaActual - 1
//   buscarInformacion()
// }

// const crearTarjetasPersonaje = (data) => {
//   const html = data.reduce((acc, curr) => {
//     return acc + `
//     <article class="personaje">
//       <h2>${curr.name}</h2>
//       <img src="${curr.image}">
//     </article>
//     `
//   }, "")
//   personajes.innerHTML = html
// }



// seccion reportes en ahorradas



// totales por categoria 

const operaciones = [
  {
    categoria: "mascotas", 
    tipo: "gasto", 
    monto: 2000,
    fecha: "2020-01-01"
  }, 
  {
    categoria: "mascotas", 
    tipo: "ganancia", 
    monto: 1000,
    fecha: "2020-01-01"
  }, 
  {
    categoria: "mascotas", 
    tipo: "gasto", 
    monto: 5000,
    fecha: "2020-01-01"
  }, 
  {
    categoria: "mascotas", 
    tipo: "ganancia", 
    monto: 50,
    fecha: "2020-01-01"
  }, 
  {
    categoria: "mascotas", 
    tipo: "ganancia", 
    monto: 4000,
    fecha: "2020-01-01"
  }, 
  {
    categoria: "trabajo", 
    tipo: "ganancia", 
    monto: 40000,
    fecha: "2020-02-15"
  }, 
  {
    categoria: "trabajo", 
    tipo: "gasto", 
    monto: 5000,
    fecha: "2020-01-01"
  }, 
  {
    categoria: "trabajo", 
    tipo: "ganancia", 
    monto: 20000,
    fecha: "2020-01-01",
  }, 
  {
    categoria: "trabajo", 
    tipo: "gasto", 
    monto: 10,
    fecha: "2020-01-01"
  }, 
]

                     
const categorias = ["mascotas", "trabajo", "servicios"]

// const separarPorCategoria = () => {

//   let arrayOperacionPorCategoria = []

//   categorias.map((categoria) => {
//     arrayOperacionPorCategoria.push([])
//   })

//   // [ [], [], [] ]
//   operaciones.map((operacion) => {
//     const indiceCategoria = categorias.indexOf(operacion.categoria)
//     arrayOperacionPorCategoria[indiceCategoria].push(operacion)
//   })

//   console.log(arrayOperacionPorCategoria)

 // esto es lo que hicimos antes, esta mal: 
  // const categoriaMascotas = []
  // const categoriaTrabajo = []
  // operaciones.map((operacion) => {
  //   if (operacion.categoria === "mascotas") {
  //     categoriaMascotas.push(operacion)
  //   }
  //   if (operacion.categoria === "trabajo") {
  //     categoriaTrabajo.push(operacion)
  //   }
  // })

// todo este codigo tendria que hacerse con un for sobre nuestra matriz 

//       const gananciasPorMascota = categoriaMascotas.filter((operacion) => {
//         return operacion.tipo === "ganancia"
//       })
//       const gastosPorMascota = categoriaMascotas.filter((operacion) => {
//         return operacion.tipo === "gasto"
//       })
//     console.log(gananciasPorMascota)

//     const sumaGananciasMascota = gananciasPorMascota.reduce((acc, curr) => {
//       return acc + curr.monto
//     }, 0)

//     const sumaGastosMascota = gastosPorMascota.reduce((acc, curr) => {
//       return acc + curr.monto
//     }, 0)


//     const balanceMascotas = sumaGananciasMascota - sumaGastosMascota

//     console.log("sumaGananciasMascota", sumaGananciasMascota)
//     console.log("sumaGastosMascota", sumaGastosMascota)
//     console.log("balanceMascotas", balanceMascotas)

// }

// separarPorCategoria()



// totales por mes

const obtenerTotalesPorMes = () => {
  const meses = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11]

  const operacionPorMes = []

  meses.map((mes) => {
    operacionPorMes.push([])
  })

  operaciones.map((operacion) => {
    const fecha = new Date(operacion.fecha + " 11:00:00")
    const mes = fecha.getMonth()
    
    operacionPorMes[mes].push(operacion)
  })

  console.log(operacionPorMes)

  operacionPorMes.map((array) => {
    const sumaGanancias = array.reduce((acc, curr) => {
      if (curr.tipo === "ganancia") {
      return acc + curr.monto
      }
      return acc
    }, 0)
    console.log(sumaGanancias)
    // hacer el html aca mismo (o llamar aca a la funcion que hace el html)
  })
}

obtenerTotalesPorMes()


// operacionPorMes y arrayOperacionPorCategoria son MATRICES
// arrays que contienen arrays
// para trabajar con matrices necesitamos un FOR ADENTRO DE UN FOR
// o UN MAP ADENTRO DE UN MAP (O REDUCE, O FILTER, ETC)

