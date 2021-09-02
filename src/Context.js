import React, {useState, createContext} from 'react'

export const ItemsContext = createContext();

const ItemsProvider = ({children}) => {

    const[CartItems,setCartItems] = useState([]);

    const addToCart = ((producto) => {

        let alreadyInCart = false;

        CartItems.forEach(elemento =>{
            if(elemento.item.id === producto.item.id){
                elemento.cantidad = elemento.cantidad + producto.cantidad;
                alreadyInCart = true;
            }
        })

        if(!alreadyInCart){
            setCartItems(CartAnterior => ([...CartAnterior, {'item':producto.item,'cantidad':producto.cantidad}]));
        } else {
            setCartItems(CartAnterior => ([...CartAnterior]));
        }
    })

    const onRemoveFromCart = ((e) => {
        setCartItems(CartItems.filter(item => item.item.id !== Number(e.currentTarget.value)));
    })

    const clearCart = (() => {
        setCartItems([]);
    })
    
    return (
        <ItemsContext.Provider value={[CartItems, addToCart, onRemoveFromCart, clearCart]}>
            {children}
        </ItemsContext.Provider>
    )
}

export default ItemsProvider
