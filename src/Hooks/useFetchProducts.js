import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // this will fetch all the products from the database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/fakeData.json');
        setProducts(result.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  // this will return a single product from the products array
  const findProduct = (id) => products.find((product) => product.id === id);

  return {
    products,
    error,
    findProduct,
  };
};

export default useProducts;
