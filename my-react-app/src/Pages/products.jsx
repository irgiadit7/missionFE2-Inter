import { Fragment, useEffect, useState, useRef } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";


const ProductsPages = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();
  

  useEffect(() => {
    setCart([...JSON.parse(localStorage.getItem("cart") || "[]")]);
  }, []);



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

  useEffect(() => {
     if (products.length > 0 && cart.length > 0) {
    const sum = cart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id);
      return acc + product.price * item.qty;
    }, 0);
    setTotalPrice(sum);
    localStorage.setItem("cart", JSON.stringify(cart));
     } else {
      setTotalPrice(0);
      localStorage.removeItem("cart");
  }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

//useRef
// const cartRef = useRef([[...JSON.parse(localStorage.getItem("cart") || "[]")]]);  

// const handleAddToCartRef = (id) => {
//     cartRef.current = [...cartRef.current, {id: id, qty: 1}];
//     localStorage.setItem("cart", JSON.stringify(cartRef.current));
// }; 

const totalPriceRef = useRef(null);

useEffect(() => {
    if (totalPriceRef.current) {
        totalPriceRef.current.style.backgroundColor = totalPrice > 1000 ? 'red' : 'transparent';
    }
}, [totalPrice]);


  return (
    <Fragment>
      <div className="flex justify-end text-black items-center font-bold text-xl px-10 h-20 ">
        <span className="mr-5">Hello, {username}</span>
        <Button className="ml-10 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>

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
                handleAddToCart={handleAddToCart}
                id={product.id}
              />
            </CardProducts>
          ))}
        </div>

        <div className="w-1/4 mr-8">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5 border">
            <thead>
              <tr>
                <th>Product</th>
                <th>price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 && 
              cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title.substring(0, 8)}...</td>
                    <td>
                      {product?.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                        {""}
                      {(product?.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center mb-10">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default ProductsPages;
