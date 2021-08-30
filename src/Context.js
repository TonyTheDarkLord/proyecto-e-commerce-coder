import React, {useState, createContext} from 'react'

export const ItemsContext = createContext();

const ItemsProvider = ({children}) => {

    const[CartItems,setCartItems] = useState([]);
    
    return (
        <ItemsContext.Provider value={[CartItems, setCartItems]}>
            {children}
        </ItemsContext.Provider>
    )
}

export default ItemsProvider
