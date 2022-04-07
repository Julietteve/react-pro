import  styles  from '../styles/styles.module.css'
import { ProductCard } from '../components';

const product = {
    id:'1',
    title: 'Coffee Mug',
    img : './coffee-mug.png'
}


export const ShoppingPage = () => {
  return (
      <div>
        <h1>ShoppingPage</h1>
        <hr/>
        <div className={styles.wrapContainer}>
            <ProductCard product={product}>
                <ProductCard.Title title=""/>
                <ProductCard.Image/>
                <ProductCard.Buttons/>
            </ProductCard>
        </div>
      </div>
  )
}
