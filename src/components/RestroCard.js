const RestroCard = (props) => {
  const { restroData } = props;
  const {
    accent,
    availability,
    categories,
    city,
    fulfillmentTime,
    minOrderValue,
    name,
  } = restroData;

  return (
    <article className="restro-card">
      <div className="restro-img">
        <div className="supplier-visual" style={{ backgroundColor: `#${accent}` }}>
          <span className="supplier-initials">{name.charAt(0)}</span>
        </div>
      </div>
      <div className="restro-name">{name}</div>
      <div className="cuisines">{categories.join(", ")}</div>
      <div className="deliveryTime">{fulfillmentTime}</div>
      <div className="supplier-meta">
        <span>{city}</span>
        <span>{availability}</span>
      </div>
      <div className="cost">Min. order Rs {minOrderValue.toLocaleString("en-IN")}</div>
    </article>
  );
};

export default RestroCard;
