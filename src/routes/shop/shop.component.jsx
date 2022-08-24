// import { useContext } from 'react'

import {Routes, Route} from 'react-router-dom'
// import { CategoriesContext } from '../../context/categories.context'
import './shop.styles.scss'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.components'
const Shop = () => {
  // const { categoriesMap } = useContext(CategoriesContext)

  return (
      <Routes>
        <Route index element={<CategoriesPreview/>}></Route>
        <Route path=":category" element={<Category/>}></Route>
      </Routes>
  )
}   

export default Shop