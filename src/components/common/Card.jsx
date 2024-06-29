import { FlexCol, FlexRow } from "../../layouts/Flex";
import { IoTrashOutline, IoCartOutline, IoEyeOutline } from "react-icons/io5";
import Rating from "./Rating";
import { CiHeart } from "react-icons/ci";

const Card = ({
  className = "",
  style = {},
  discount = 0,
  img,
  price,
  title,
  newItem = false,
  trashIcon = false,
  eyeIcon = false,
  likeIcon = false,
  rating = false,
}) => {
  discount = Math.max(0, discount) / 100;
  const total = price - price * discount;
  return (
    <FlexCol className={"card gap-1" + " " + className} style={style}>
      <FlexCol className="rounded-md overflow-hidden bg-card">
        <div className="card-header">
          <div className="card-img px-7 mt-3">
            <img src={img} alt="" />
          </div>
          <FlexRow className="card-display-buttons justify-between self-start items-start mx-3 mt-2">
            <div className="card-banner flex flex-row gap-1">
              {newItem && (
                <div className="bg-green font-normal text-xs white px-3 py-1 rounded-md">
                  NEW
                </div>
              )}
              {discount > 0 && (
                <div className="bg-red font-normal text-xs white px-3 py-1 rounded-md">
                  {discount * 100}%
                </div>
              )}
            </div>
            {trashIcon && (
              <div className="bg-white black p-2 rounded-full">
                <IoTrashOutline />
              </div>
            )}
            {eyeIcon && (
              <>
                {likeIcon ? (
                  <FlexCol className="gap-1">
                    <div className="bg-white black p-2 rounded-full">
                      <IoEyeOutline />
                    </div>
                    <div className="bg-white black p-2 rounded-full">
                      <CiHeart />
                    </div>
                  </FlexCol>
                ) : (
                  <div className="bg-white black p-2 rounded-full">
                    <IoEyeOutline />
                  </div>
                )}
              </>
            )}
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
      <div className="mt-2 black font-medium text-base">{title}</div>
      <FlexRow className="gap-2 font-medium text-base">
        <span className="red">${total}</span>
        {discount > 0 ? (
          <span className="line-through grey">${price}</span>
        ) : null}
      </FlexRow>
      {rating && (
        <FlexRow className="gap-1">
          <Rating type="full" />
          <Rating type="full" />
          <Rating type="full" />
          <Rating type="full" />
          <Rating type="full" />
        </FlexRow>
      )}
    </FlexCol>
  );
};

export default Card;
