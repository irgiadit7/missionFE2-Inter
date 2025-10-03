import {  useEffect, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = (props) => {
    const {products } = props;
    const cart = useSelector((state) => state.cart.data );
      const {isDarkMode } = useContext(DarkMode);
      const dispatch = useTotalPriceDispatch();
      const {total} = useTotalPrice();

      useEffect(() => {
         if (products && products.length > 0 && cart && cart.length > 0) {
        const sum = cart.reduce((acc, item) => {
          const product = products.find((product) => product.id === item.id);
          return acc + product.price * item.qty;
        }, 0);
        dispatch({
          type: "UPDATE",
          payload: {
            total: sum,
          }
        })
        localStorage.setItem("cart", JSON.stringify(cart));
         } else {
          dispatch({
            type: "UPDATE",
            payload: {
              total: 0,
            }
          })
          localStorage.removeItem("cart");
      }
      }, [cart, products, dispatch]);

      const totalPriceRef = useRef(null);
      
      useEffect(() => {
          if (totalPriceRef.current) {
              totalPriceRef.current.style.backgroundColor = total > 1000 ? 'red' : 'transparent';
          }
      }, [total]);
      

    return (
        <table className={`text-left table-auto border-separate border-spacing-x-5 border self self-start ${isDarkMode && "text-white"}`}>
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
              cart?.map((item) => {
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
                    {total.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tfoot>
          </table>
    )
}

export default TableCart