import { ReactElement } from "react";

export interface PropsProductCard {
    product : Product,
    children?: ReactElement | ReactElement[]
  }
  
export interface Product {
    id: string,
    title:string,
    img?: string
}

export interface ProductContextProps {
    counter: number,
    incrementBy: (value: number) => void,
    product: Product
}

export interface ProductCardHOCProps {
    ({ children, product }: PropsProductCard) : JSX.Element ,
    Title: ({ title }: {title: string;}) => JSX.Element,
    Image:({ img }: {img?: string | undefined;}) => JSX.Element,
    Buttons : () => JSX.Element
}