import { useDispatch, useSelector } from "react-redux";
import { ProductQuantity } from "../../interface/Product";
import Delete from "../../assets/Delete.svg";
import {
  minusQuantyty,
  plusQuantyty,
  removeProduct,
} from "../../store/bascetSlicer";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Bascets = () => {
  const disaptch = useDispatch();
  const [price, setPrice] = useState(0);

  const bascetItem = useSelector((state: any) => state.Bascet.items);
  console.log(bascetItem, "asd");

  useEffect(() => {
    let total = 0;
    bascetItem.map((item: ProductQuantity) => {
      total += item.quantity[0] * item.price;
    });
    setPrice(total);
  }, [bascetItem]);

  return (
    <div className="container flex justify-between">
      <div className="products-info  w-[65%]">
        <div className=" flex justify-between text-base leading-4 pb-4 border-b-[0.3px] border-[#46a35980]">
          <p className="w-[35%]">Product</p>
          <p className="w-[10%]">Price</p>
          <p className="w-[10%]">Quantity</p>
          <p className="w-[15%] ">Total</p>
        </div>
        <div className="pt-3">
          <ul className=" flex  flex-col gap-3">
            {bascetItem.map((product: ProductQuantity) => {
              return (
                <li
                  key={product._id}
                  className="flex  justify-between items-center"
                >
                  <div className="w-[35%]  flex  items-center  ">
                    <img
                      className="w-[70px] h-[70px]  mr-4  "
                      src={product.pictures[0]}
                      alt=""
                    />
                    <div className="">
                      <p className="text-base leading-4 text-[#3D3D3D] mb-2">
                        {product.name}
                      </p>
                      <p className="text-[#727272]">
                        SCU:{product._id.substr(1, 8)}
                      </p>
                    </div>
                  </div>
                  <p className="w-[10%] text-[#727272]"> ${product.price}</p>
                  <div className=" w-[10%] flex justify-between">
                    <span
                      onClick={() => {
                        disaptch(plusQuantyty({ _id: product._id }));
                      }}
                      className=" cursor-pointer block w-6 rounded-full bg-[#46A358] text-center"
                    >
                      +
                    </span>
                    {product.quantity[0]}
                    <span
                      onClick={() => {
                        disaptch(minusQuantyty({ _id: product._id }));
                      }}
                      className="cursor-pointer w-6 rounded-full bg-[#46A358] text-center"
                    >
                      -
                    </span>
                  </div>
                  <p className="w-[15%] flex justify-between text-[#46A358]">
                    {" "}
                    ${product.price * product.quantity[0]}
                    <img
                      onClick={() => {
                        disaptch(removeProduct(product));
                      }}
                      src={Delete}
                      alt=""
                    />
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="cart-total  w-[30%]">
        <h2 className="font-bold text-lg leading-4 pb-4 border-b-[0.3px] border-[#46a35980]">
          Cart Totals
        </h2>
        <p>Coupon Apply</p>
        <div className="flex mb-8">
          <input
            className="outline-none w-full border-[1px] border-[#46A358] pl-2"
            type="text"
            placeholder="Enter coupon code here..."
          />
          <button className="py-3 text-white pr-6 pl-9  bg-[#46A358]">
            Apply
          </button>
        </div>
        <p className="flex justify-between">
          Subtotal <span className="text-lg leading-4">${price}</span>
        </p>
        <NavLink
          to="/checkout"
          className="block text-center text-white bg-[#46A358] py-3"
        >
          Proceed To Checkout
        </NavLink>
      </div>
    </div>
  );
};

export default Bascets;
