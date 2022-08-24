import './category-container.styles.scss'
import HomeItem from '../home-items/home-items.component';

const CategoryContainer = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => {
                return <HomeItem key={category.id} category={category} />
            })}
        </div>
    )
}

export default CategoryContainer