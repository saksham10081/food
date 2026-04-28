const ShimmerRestroList = () => {
  const shimmerArray = Array.from({ length: 6 }, (_, index) => index);

  return (
    <div className="restro-container" aria-label="Loading supplier catalog">
      {shimmerArray.map((item) => (
        <div className="shimmer-card" key={item}>
          <div className="shimmer-title"></div>
          <div className="shimmer-subtitle"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerRestroList;
