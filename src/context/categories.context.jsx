import { createContext, useState, useEffect } from 'react'

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';
// import SHOP_DATA from '../shop-data.js';


export const CategoriesContext = createContext({
    categoriesMap: [],
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})
    
    useEffect(() => {
        const getCategoriesMap = async () => {
            const CategoryMap = await getCategoriesAndDocuments()
            setCategoriesMap(CategoryMap)
        }
        getCategoriesMap()
    }, [])
    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}