import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/products.service";


const DetailProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect (() => {
        getDetailProduct(id, (data) => {
            setProduct(data);
          
        });
    }, [id]);
    console.log(product);
    
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-800 p-4">
            {Object.keys(product).length > 0 ? (
                <div className="container w-250 mx-auto">
                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 p-6 flex justify-center items-center">
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="max-h-96 object-contain rounded-lg"
                            />
                        </div>
                        {/* Details Section */}
                        <div className="w-full lg:w-1/2 p-6 flex flex-col">
                            <h2 className="text-sm title-font text-gray-500  dark:text-gray-400 tracking-widest uppercase">
                                {product.category}
                            </h2>
                            <h1 className="text-gray-900 dark:text-white text-3xl title-font font-medium my-2">
                                {product.title}
                            </h1>
                            <p className="leading-relaxed text-gray-600 dark:text-gray-300 flex-grow">
                                {product.description}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 pt-4 border-t-2 border-gray-200 dark:border-gray-700">
                                <span className="title-font font-medium text-2xl text-gray-900 dark:text-white mb-4 sm:mb-0">
                                    ${product.price}
                                </span>
                                <div className="flex items-center gap-4">
                                    <button className="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded-lg transition duration-300">
                                        Add to Cart
                                    </button>
                                    <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded-lg transition duration-300">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-xl text-gray-500">Loading...</p>
            )}
        </div>
    );
};

export default DetailProductPage;