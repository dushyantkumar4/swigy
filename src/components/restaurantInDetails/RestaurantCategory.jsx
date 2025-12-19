import RestaurantMenuCart from "./RestaurantMenuCard";

const RestaurantCategory = ({ data, isOpen, onToggle }) => {
  const { title, itemCards } = data;

  return (
    <div className="border-y border-gray-400 py-5 pr-4 pl-2">
      {/* header  */}
      <div className="flex items-center justify-between gap-2" onClick={onToggle}>
        <div className="font-bold">
          {title} <span>({itemCards.length})</span>
        </div>
        {isOpen ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      {/* body */}
      {isOpen && (
        <div>
          {itemCards.map((item) => {
            const { id, name, price, ratings, imageId, description } =
              item.card.info;
            const { rating, ratingCountV2 } = ratings?.aggregatedRating || {};

            return (
              <RestaurantMenuCart
                key={id}
                dishName={name}
                price={price}
                rating={rating}
                ratingCountV2={ratingCountV2}
                imageId={imageId}
                description={description}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
