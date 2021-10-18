import { createContext } from 'react';
import useFetchProducts from '../Hooks/useFetchProducts';
const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const products = useFetchProducts();
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
