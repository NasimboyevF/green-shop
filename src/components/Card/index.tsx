import Search from "../../assets/search.svg";
import Cart from "../../assets/cart.svg";
import Heart from "../../assets/heart.svg";
import GreenHart from "../../assets/green-heart.svg"
import Shopping from "../../assets/shopping.svg"
import "./index.css";
import { NavLink } from "react-router";
import { Product } from "../../interface/Product";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/likeSlice";
import { addProduct, removeProduct } from "../../store/bascetSlicer";

const Card = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const likeItems = useSelector((state: any) => state.Like.items);
  const bascetItems = useSelector((state: any) => state.Bascet.items);

  const isLiked = likeItems.some((item: Product) => item._id === product._id);
  const isBascet = bascetItems.some(
    (item: Product) => item._id === product._id
  );

  function basceted() {
    dispatch(isBascet ? removeProduct(product) : addProduct(product));
  }

  function liked() {
    dispatch(isLiked ? removeItem(product) : addItem(product));
  }

  return (
    <div key={product._id} className="p-4 card">
      <div className="w-[258px] h-[300px] bg-[#FBFBFB] relative card-box">
        <NavLink to={`/about/${product._id}`}>
          <img
            src={product.pictures[0]}
            alt={product.name}
            className="w-full h-[250px] "
          />
        </NavLink>
        <div className="flex gap-7 justify-center py-2 absolute card-box__asets">
          <div
            onClick={basceted}
            className={`w-[35px] h-[35px] flex justify-center items-center rounded-[4px]`}
          >
            <img src={isBascet ? Shopping : Cart} alt="" />
          </div>

          <div
            onClick={liked}
            className={`w-[35px] h-[35px] flex justify-center items-center rounded-[4px] `}
          >
            <img src={isLiked ? GreenHart : Heart} alt="" />
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
