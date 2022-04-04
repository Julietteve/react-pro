import { useState } from 'react';

export const useProduct = () => {
    const [ counter, setCounter] = useState(0)

    const incrementBy = ( value: number ) => {
      setCounter( prevState => Math.max( prevState + value, 0))
    }
    return  {
        counter,
        incrementBy
    }
}