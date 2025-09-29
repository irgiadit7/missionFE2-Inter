import Button from "../Elements/Button";

const CardProducts = (props) => {
    const { children } = props;
  return (
    <div className=" bg-gray-800 border-gray-500 rounded-lg shadow w-120 mx-5 flex flex-col justify-between">
        {children}
    </div>
  );
};

const Header = (props) => {
    const {images} = props;
  return (
    <a href="#">
      <img
        src={images}
        alt="product"
        className="p-8 rounded-t-lg w-full"
      />
    </a>
  );
};

const Body = (props) => {
    const {children ,name} = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white text-center">
          {name}
        </h5>
        <p className="text-sm font-light text-white">
        {children}
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
    const {price} = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-white">{price}</span>
      <Button className="bg-blue-600">Add to cart</Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
