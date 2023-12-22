export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, description, name, basePrice } = item;

  return (
    <div
      className=" bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md 
hover:shadow-black/25 transition-all"
    >
      <div className="text-center">
        <img src={image} alt="pizza" className="max-h-24 block mx-auto" />
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
      <button
        className="mt-4 bg-primary text-white rounded-full px-8 py-2"
        onClick={onAddToCart}
        type="button"
      >
        Add to card ${basePrice}
      </button>
    </div>
  );
}
