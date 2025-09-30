import { Fragment, useEffect, useState } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 1000000,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat doloremque maxime consequuntur. Error, quibusdam necessitatibus magni ratione esse consequatur accusamus.",
    images: "/images/shoes1.jpg",
  },

  {
    id: 2,
    name: "Old shoes",
    price: 29000000,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat doloremque maxime consequuntur. Error, quibusdam necessitatibus magni ratione esse consequatur accusamus.",
    images: "/images/shoes1.jpg",
  },

  {
    id: 3,
    name: "Adidas Yeezy",
    price: 500000,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat doloremque maxime consequuntur. Error, quibusdam necessitatibus magni ratione esse consequatur accusamus.",
    images: "/images/shoes1.jpg",
  },
];

const email = localStorage.getItem("email");

const ProductsPages = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart([...JSON.parse(localStorage.getItem("cart") || "[]")]);
  }, []);

  useEffect(() => {
     if (cart.length > 0 ) {
          const sum = cart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id);
      return acc + product.price * item.qty;
    }, 0);
    setTotalPrice(sum);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
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

  return (
    <Fragment>
      <div className="flex justify-end text-black items-center font-bold text-xl px-10 h-20 ">
        {email}
        <Button className="ml-10 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap gap-10">
          {products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header images={product.images} />
              <CardProducts.Body name={product.name}>
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
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product?.name}</td>
                    <td>
                      {product?.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                    {(product?.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
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
