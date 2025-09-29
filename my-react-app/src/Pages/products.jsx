import CardProducts from "../components/Fragments/CardProducts"


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


const ProductsPages = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">

    


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
  )
}

export default ProductsPages