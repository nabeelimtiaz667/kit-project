import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const Rating = ({ type = "" }) => {
  if (type.toLowerCase() === "full") {
    return (
      <div className="star-color">
        <IoMdStar />
      </div>
    );
  } else if (type.toLowerCase() === "half") {
    return (
      <div className="star-color">
        <IoMdStarHalf />
      </div>
    );
  } else if (type.toLowerCase() === "empty") {
    return (
      <div className="star-color">
        <IoMdStarOutline />
      </div>
    );
  } else {
    console.error("Invalid type", type);
    return <></>;
  }
};

export default Rating;
