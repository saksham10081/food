import { RestroCardImage_URL } from "./Constants/Images";

const RestroCard = (props) => {
  const { restroData } = props;
  const { cloudinaryImageId, cuisines, name, costForTwo, deliveryTime } =
    restroData.data;
  return (
    <div className="restro-card">
      <div className="restro-img">
        <img src={RestroCardImage_URL + cloudinaryImageId} />
      </div>
      <div className="restro-name">{name}</div>
      <div className="cuisines">{cuisines}</div>
      <div className="deliveryTime">{deliveryTime}</div>
      <div className="cost">Rs{costForTwo / 100}</div>
    </div>
  );
};

export default RestroCard;
