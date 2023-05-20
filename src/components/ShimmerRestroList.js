const ShimmerRestroList = () => {
  let shimmerArray = [20];

  return shimmerArray.map((e) => {
    {console.log(shimmerArray)}
    <div className="shimmer-card">
      <div className="shimmer-title"></div>
      <div className="shimmer-subtitle"></div>
    </div>;
  });
};

export default ShimmerRestroList;
