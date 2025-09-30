import { Fragment } from "react"
import CardProducts from "../components/Fragments/CardProducts"
import Button from "../components/Elements/Button"
import Counter from "../components/Fragments/Counter"

const products = [
    {
        id:1,
        name:"Nike Air Max 270",
        price:"1.000.000,00",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat doloremque maxime consequuntur. Error, quibusdam necessitatibus magni ratione esse consequatur accusamus.",
        images:"/images/shoes1.jpg",

    },

       {
        id:2,
        name:"Old shoes",
        price:"29.000.000,00",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat doloremque maxime consequuntur. Error, quibusdam necessitatibus magni ratione esse consequatur accusamus.",
        images:"/images/shoes1.jpg",

    },

      {
        id:3,
        name:"Adidas Yeezy",
        price:"5.000.000,00",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat doloremque maxime consequuntur. Error, quibusdam necessitatibus magni ratione esse consequatur accusamus.",
        images:"/images/shoes1.jpg",

    },

]

const email = localStorage.getItem("email");


const ProductsPages = () => {
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }
    
  return (
        <Fragment>
            <div className="flex justify-end text-black items-center font-bold text-xl px-10 h-20 ">{email}
                <Button className="ml-10 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
    {products.map((product) => (
                   <CardProducts key={product.id}>
            <CardProducts.Header images={product.images} />
            <CardProducts.Body name={product.name}>
                {product.desc}
            </CardProducts.Body>
            <CardProducts.Footer price={product.price}/>

        </CardProducts>
         
    ))}   
       </div>

       <div className="flex justify-center py-5">
        <Counter></Counter>
       </div>
        </Fragment>
  )
}

export default ProductsPages