import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export const ProductImage = ( {img = ''}) => {

    const {product} = useContext(ProductContext)
    let imgToShow : string
  
    img ? imgToShow = img : product.img ? imgToShow = product.img : imgToShow = noImage
  
    return (
      <img src={imgToShow} alt='coffe-mug' className={styles.productImg}/>
    )
  }