import { useState } from "react";

const Categoris = ({
  searchParams,
  setSearchParams,
}: {
  searchParams: URLSearchParams;
  setSearchParams: (params: URLSearchParams) => void;
}) => {
  const [categoriesPrice, setCategoriesPrice] = useState("100");

  function Price() {
    changeParams("price-to", categoriesPrice);
  }

  const changeParams = (key: string, value: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);
    setSearchParams(newSearchParams);
  };

  function refresh() {
    const newSearchParams = new URLSearchParams();
    setSearchParams(newSearchParams);
  }

  return (
    <div className="bg-[#FBFBFB] w-[310px] h-[840px] p-6 rounded-lg">
      <h2 className="text-2xl font-bold leading-4 text-left text-[#3D3D3D] py-3">
        Categories
      </h2>
      <ul className="space-y-2 ml-3">
        <li className="text-base font-bold leading-10 text-left text-[#3D3D3D] hover:text-[#46A358] duration-300">
          House Plants (0)
        </li>
        <li className="text-base font-bold leading-10 text-left text-[#3D3D3D] hover:text-[#46A358] duration-300">
          Potter Plants (0)
        </li>
        <li className="text-base font-bold leading-10 text-left text-[#3D3D3D] hover:text-[#46A358] duration-300">
          Seeds (0)
        </li>
        <li className="text-base font-bold leading-10 text-left text-[#3D3D3D] hover:text-[#46A358] duration-300">
          Small Plants (0)
        </li>
        <li className="text-base font-bold leading-10 text-left text-[#3D3D3D] hover:text-[#46A358] duration-300">
          Big Plants (0)
        </li>
        <li className="text-base font-bold leading-10 text-left text-[#3D3D3D] hover:text-[#46A358] duration-300">
          Succulents (0)
        </li>
        <li className="text-base font-bold leading-10 text-left text-[#3D3D3D] hover:text-[#46A358] duration-300">
          Tierrafums (0)
        </li>
        <li className="text-base font-bold leading-10 text-left text-[#3D3D3D] hover:text-[#46A358] duration-300">
          Gardening (0)
        </li>
        <li className="text-base font-bold leading-10 text-left text-[#3D3D3D] hover:text-[#46A358] duration-300">
          Accessories (0)
        </li>
      </ul>

      <h2 className="text-2xl font-bold leading-4 text-left text-[#3D3D3D] py-8">
        Price Range
      </h2>
      <div className="ml-3">
        <p className="text-lg">
          <span>Price:</span>
          <input
            type="range"
            min="0"
            max="4000"
            step="1"
            onChange={(e) => {
              setCategoriesPrice(e.target.value);
            }}
          />
          <span className="text-[#46A358]"> $0 - ${categoriesPrice}</span>
        </p>

        <div className="py-4">
          <button
            onClick={() => {
              Price();
            }}
            className="w-[90px] h-[35px] flex justify-center items-center rounded-[6px] text-[#FFFFFF] bg-[#46A358] text-base font-bold leading-5"
          >
            Filter
          </button>
        </div>
      </div>
      <h3 className="text-2xl font-bold leading-4 text-left text-[#3D3D3D] py-3">
        Size
      </h3>
      <ul className="space-y-2 ml-3">
        <li
          onClick={() => changeParams("size", "S")}
          className="text-base font-bold leading-10 text-left text-[#3D3D3D] hover:text-[#46A358] duration-300"
        >
          Small (0)
        </li>
        <li
          onClick={() => changeParams("size", "M")}
          className="text-base font-bold leading-10 text-left text-[#3D3D3D] hover:text-[#46A358] duration-300"
        >
          Medium (0)
        </li>
        <li
          onClick={() => changeParams("size", "L")}
          className="text-base font-bold leading-10 text-left text-[#3D3D3D] hover:text-[#46A358] duration-300"
        >
          Large (0)
        </li>
      </ul>

      <button
        onClick={() => {
          refresh();
        }}
      >
        refresh
      </button>
    </div>
  );
};

export default Categoris;
