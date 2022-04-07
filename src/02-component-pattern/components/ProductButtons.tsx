import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'
import { useContext } from "react"

export const ProductButtons = () => {

    const { incrementBy, counter } = useContext(ProductContext)
  
    return(
      <div className={styles.buttonsContainer}>
           <button 
           className={styles.buttonMinus} 
           onClick={ ()=> incrementBy(-1)}> - </button>
           <div className={styles.countLabel}> {counter} </div>
           <button 
           className={styles.buttonAdd} 
           onClick={ ()=> incrementBy(1)}> +  </button>
      </div>
    )
  }