import SacoRosa from './img/01-sacorosa.png';
import SacoMarron from './img/02-sacomarron.png';
import SacoLargo from './img/03-sacolargo.png';
import SacoCeleste from './img/04-saco_celeste.png';



const products = [
    {id: '1', name: 'Saco Largo Rosa', price: 9390, category: 'Ropa mujer.', img: SacoRosa, stock: 18, description: 'Spolverino Con Bolsillos Saco Cardigan Largo Gala* - Chuva Ropa.'},
    {id: '2', name: 'Saco Bremer', price: 10990, category: 'Ropa mujer', img: SacoMarron, stock: 20, description: 'Saco Solapa Bremer.'},
    {id: '3', name: 'Saco Largo', price: 13990, category: 'Ropa mujer', img: SacoLargo, stock: 25, description: 'Saco Largo Spolverino Lanilla - Art. Roma - Espacio De Bellas'},
    {id: '4', name: 'Sweater Manhattan', price: 9990, category: 'Ropa mujer', img: SacoCeleste, stock: 8, description: 'Sweater Manhattan Bremer Oversize: Talle único. (Universal). Medidas: Ancho 73 cm(contorno es 146cm). Largo 65 cm. Material: Viscosa, PBT Mix.'},
]

export const getProducts = ()=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id===productId))
        }, 500)
    })
}