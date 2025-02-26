import React, { createContext, useState } from 'react';
import { useLocalStorage } from '../src/hooks/useLocalStorage';

export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {
    const [items, setItems] = useLocalStorage('data', []);
    const [formData, setFormData] = useState({ title: '', amount: '', category: '' });

    const contextData = {
        items,
        setItems,
        formData,
        setFormData
    }

    return (
        <ItemsContext.Provider value={contextData}>
            {children}
        </ItemsContext.Provider>
    )
}

export default ItemsContextProvider;