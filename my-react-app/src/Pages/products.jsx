import { Fragment, useEffect, useState } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/navbar";

const ProductsPages = () => {
  const [products, setProducts] = useState([]);
   useLogin();

  useEffect(() => {
    getProducts((data) => {
      const formattedData = data.map((item) => ({
        id: item.id,
        title: item.title,
        desc: item.description,
        price: item.price,
        images: item.image,
      }));
      setProducts(formattedData);
    });
  }, []);







  return (
    <Fragment>
   

      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap gap-10">
          {products.length > 0 && 
          products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header images={product.images} id={product.id} />
              <CardProducts.Body name={product.title}>
                {product.desc}
              </CardProducts.Body>
              <CardProducts.Footer
                price={product.price}
                id={product.id}
              />
            </CardProducts>
          ))}
        </div>

        <div className="w-1/4 mr-8">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          
        </div>
        <TableCart products={products}></TableCart>
      </div>
      {/* <div className="mt-5 flex justify-center mb-10">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default ProductsPages;
