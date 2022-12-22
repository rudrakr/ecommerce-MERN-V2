const Rating = ({ rating, numReviews }) => {
  console.log("rating===", rating);
  return (
    <>
      <span className="rating">
        {rating === 1 ? (
        <>
          <i class="fa-solid fa-star"></i>
        </>
        ) : rating === 1.5 ? (
        <>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </>
        ) : rating === 2 ? (
        <>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </>
        ) : rating === 2.5 ? (
        <>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </>
        ) : rating === 3 ? (
        <>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </>
        ) : rating === 3.5 ? (
        <>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </>
        ) : rating === 4 ? (
        <>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </>
        ) : rating === 4.5 ? (
        <>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </>
        ) : rating === 5 ? (
        <>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </>
        ) : (<></>
        )}
      </span>
      <span>{numReviews} Reviews</span>
    </>
  );
};

export default Rating;
