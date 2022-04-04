import { ProductCard } from "../components/ProductCard"
import  styles  from '../styles/styles.module.css'

export const ShoppingPage = () => {
  return (
      <div>
        <h1>ShoppingPage</h1>
        <hr/>
        <div className={styles.wrapContainer}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </div>
  )
}
