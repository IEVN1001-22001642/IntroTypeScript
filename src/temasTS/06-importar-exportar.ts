import{type Producto, calcularISV2} from "./05-desestructuracion-funciones"

const carrito:Producto[]=[
    {
        desc:'Telefono 1',
        precio:1000
    },
    {
        desc:'Telefono 2',
        precio:2300
    },
    {
        desc:'Telefono 4',
        precio:1000000
    }
]

const[total,isv]=calcularISV2(carrito)
console.log("Total carrito: ",total)
console.log("ISV carrito: ",isv)