import Search from "../../assets/search.svg";
import Cart from "../../assets/cart.svg";
import Heart from "../../assets/heart.svg";
import { NavLink } from "react-router";
import { Product } from "../../interface/Product";

const Card = ({ product }: { product: Product }) => {
  return (
    <div key={product._id} className="p-4">
      <div className="w-[258px] h-[300px] bg-[#FBFBFB]">
        <NavLink to={`/about/${product._id}`}>
          <img
            src={product.pictures[0]}
            alt={product.name}
            className="w-[250px] h-[250px]"
          />
        </NavLink>
        <div className="flex gap-7 justify-center py-2">
          <div className="w-[35px] h-[35px] flex justify-center items-center rounded-[4px] bg-[#FFFFFF]">
            <img src={Cart} alt="" />
          </div>
          <div className="w-[35px] h-[35px] flex justify-center items-center rounded-[4px] bg-[#FFFFFF]">
            <img src={Heart} alt="" />
          </div>
          <div className="w-[35px] h-[35px] flex justify-center items-center rounded-[4px] bg-[#FFFFFF]">
            <img src={Search} alt="" />
          </div>
        </div>
      </div>
      <h2 className="text-base font-normal text-[#3D3D3D] py-3">
        {product.name}
      </h2>
      <p className="text-base font-bold text-[#46A358]">${product.price}</p>
    </div>
  );
};

export default Card;
