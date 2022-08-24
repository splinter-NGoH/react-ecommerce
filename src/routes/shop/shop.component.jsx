import { useContext } from 'react'

import {Routes, Route} from 'react-router-dom'
import { CategoriesContext } from '../../context/categories.context'
import './shop.styles.scss'
import CategoryPreview from '../../component/category-preview/category-preview.component'
import CategoriesPreview from '../categories-preview/categories-preview.component'
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
      <Routes>
        <Route index element={<CategoriesPreview/>}></Route>
      </Routes>
  )
}   

export default Shop