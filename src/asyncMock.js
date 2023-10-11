import SacoHombre from './img/sacoHombre-removebg-preview.png';
import SacoNina from './img/saco_nina-removebg-preview.png';
import SacoCeleste from './img/04-saco_celeste.png';

const products = [
    {id: '1', name: 'Cárdigan Hombre', price: 11850, category: 'hombres', img: SacoHombre, stock: 12, description: 'Cárdigan escote en “v” con botones y trabajo de punto en prenda. Estándar, holgado medio. Textura de lana, con alta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.'},
    {id: '2', name: 'Cárdigan Niñas', price: 16000, category: 'ninos', img: SacoNina, stock: 15, description: 'Cárdigan/camperita en lana Cisne, color azul. Se teje a pedido en talles: 6, 8 y 10. T6: 5-6 años. T8: 7-8 años. T10: 9-10 años'},
    {id: '3', name: 'Sweater Manhattan', price: 9990, category: 'mujeres', img: SacoCeleste, stock: 8, description: 'Sweater Manhattan Bremer Oversize: Talle único. (Universal). Medidas: Ancho 73 cm(contorno es 146cm). Largo 65 cm. Material: Viscosa, PBT Mix.'}
]

export const getProducts = ()=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products);
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id===productId));
        }, 500)
    })
}


/* Con respecto al error que me mencionas te lo marca por que el metodo find te retorna un objeto con los resultados solamente y a ese objeto en particular no se le puede aplicar el metodo map, la solcion mas facil es retornarlo dentro de un arreglo.
O sea: find debe tener forma de array(arreglo) sino map no lo reconocelo y no puede trabajar con el. lo conbertimos en array agregando el contenido entre [] */

// export const getProductsByCategory = (productCategory) => {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(products.find(prod=>prod.category===productCategory))
//         }, 500)
//     })
// }

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([products.find(prod=>prod.category===productCategory)])
        }, 500)
    })
}