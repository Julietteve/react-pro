import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, PropsProductCard } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ( { children , product }: PropsProductCard) => {
 
  const { counter, incrementBy } = useProduct()

  return (
    <Provider value={{
      counter,
      incrementBy,
      product
    }
    }>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  )
}