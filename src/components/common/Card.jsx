import { FlexCol, FlexRow } from "./Flex";
import { IoTrashOutline, IoCartOutline } from "react-icons/io5";

const Card = ({ discount = 0, img, price, title }) => {
  discount = Math.max(0, discount) / 100;
  const total = price - price * discount;
  return (
    <FlexCol className="card gap-3">
      <FlexCol className="rounded-md overflow-hidden bg-card">
        <div className="card-header">
          <div className="card-img px-7">
            <img src={img} alt="" />
          </div>
          <FlexRow className="card-display-buttons justify-between self-start items-start mx-3 mt-2">
            {discount > 0 ? (
              <div className="bg-red font-normal text-xs white px-3 py-1 rounded-md">
                {discount * 100}%
              </div>
            ) : (
              <div></div>
            )}
            <div className="bg-white black p-2 rounded-full">
              <IoTrashOutline />
            </div>
          </FlexRow>
        </div>
        <button
          type="button"
          className="px-10 py-3 bg-black white text-xs flex flex-row justify-center gap-1"
        >
          <IoCartOutline className="text-base" />
          Add to Cart
        </button>
      </FlexCol>
      <div className="black font-medium text-base">{title}</div>
      <FlexRow className="gap-2 font-medium text-base">
        <span className="red">${total}</span>
        {discount > 0 ? (
          <span className="line-through grey">${price}</span>
        ) : null}
      </FlexRow>
    </FlexCol>
  );
};

export default Card;
