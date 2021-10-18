import { useContext } from 'react';
import ProductContext from '../Contexts/ProductContext';

const useProducts = () => useContext(ProductContext);

export default useProducts;
