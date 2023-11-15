function MenuItem() {
  return (
    <div
      className=" bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md 
    hover:shadow-black/25 transition-all"
    >
      <div className="text-center">
        <img src="/pizza.png" alt="pizza" className="max-h-24 block mx-auto" />
      </div>
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Savory slices of pepperoni atop a bed of melted cheese and tomato sauce
        on a golden crust.
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to card $12
      </button>
    </div>
  );
}

export default MenuItem;
