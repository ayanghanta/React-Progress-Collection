import Button from "../../ui/Button";

function EmptyCart() {
  return (
    <div className="mt-4">
      <div className="flex flex-col items-center justify-center">
        <p className="mt-8 text-lg text-slate-400 mb-8">
          Your Cart is Empty, add some cakes to order :)
        </p>

        <Button type="primary" to="/menu">
          Explore cakes
        </Button>
      </div>
    </div>
  );
}

export default EmptyCart;
