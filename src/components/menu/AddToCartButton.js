import FlyingButton from "react-flying-item";

export default function AddToCartButton({
  hasSizesOrExtras,
  onClick,
  basePrice,
  image,
}) {
  if (!hasSizesOrExtras) {
    return (
      <div className="flying-button-parent mt-4">
        <FlyingButton src={image} targetTop="5%" targetLeft="95%">
          <div onClick={onClick}> Add to card ${basePrice}</div>
        </FlyingButton>
      </div>
    );
  }
  return (
    <button
      className="mt-4 bg-primary text-white rounded-full px-8 py-2"
      onClick={onClick}
      type="button"
    >
      <span>Add to cart (from ${basePrice})</span>
    </button>
  );
}
