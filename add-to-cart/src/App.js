import { useState } from "react";

const products = [
  {
    image: "🥕",
    title: "Carrot",
    price: 20,
    id: 112,
  },
  {
    image: "🥑",
    title: "Avocardo",
    price: 35,
    id: 115,
  },
  {
    image: "🍓",
    title: "StrawBerry",
    price: 25,
    id: 116,
  },
  {
    image: "🥦",
    title: "Broccoli",
    price: 40,
    id: 113,
  },
  {
    image: "🥝",
    title: "Kiwi",
    price: 15,
    id: 114,
  },
];

const cupons = [
  {
    code: "NEW20",
    off: 20,
  },
  {
    code: "REACT24",
    off: 24,
  },
];

/*

{
    image: "🥕",
    title: "Carrot",
    price: 20,
    quantity:1,
  }

*/

function Button({ children, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);

  const bill = cartItems.reduce(
    (acc, currItm) => acc + currItm.price * currItm.quantity,
    0
  );
  function handleApplyCode(code) {
    const off = cupons.filter((cupon) => cupon.code === code.toUpperCase())[0]
      ?.off;
    if (off) setDiscount(off);
    else setDiscount(0);
  }

  function handleCartItems(selectItem) {
    if (!cartItems.some((itm) => itm.id === selectItem.id))
      return setCartItems((items) => [...items, selectItem]);

    setCartItems((items) =>
      items.map((itm) =>
        itm.id === selectItem.id ? { ...itm, quantity: itm.quantity + 1 } : itm
      )
    );
  }

  function handleDeleteItem(selectItem) {
    setCartItems((items) =>
      items
        .map((itm) =>
          itm.id === selectItem.id
            ? { ...itm, quantity: itm.quantity - 1 }
            : itm
        )
        .filter((item) => item.quantity >= 1)
    );
  }

  return (
    <div className="app">
      <ItemCart onAddItem={handleCartItems} />
      <BillingCart
        cartItems={cartItems}
        onDeleteItem={handleDeleteItem}
        bill={bill}
        onApplyCode={handleApplyCode}
      />
      <CheckOut bill={bill} discount={discount} />
    </div>
  );
}

function ItemCart({ onAddItem }) {
  return (
    <div className="item-cart-section">
      {products.map((itm, i) => (
        <Item item={itm} key={i} onAddItem={onAddItem} />
      ))}
    </div>
  );
}

function BillingCart({ cartItems, onDeleteItem, bill, onApplyCode }) {
  const [cuponCode, setCuponCode] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!cuponCode) return;
    onApplyCode(cuponCode);
  }
  return (
    <div className="billing-section">
      <h2>Billing Section</h2>
      <div className="billing-items">
        {cartItems.length !== 0 ? (
          cartItems.map((item, i) => (
            <CartItem item={item} key={i} onDeleteItem={onDeleteItem} />
          ))
        ) : (
          <p className="static">Add vegitables to buy</p>
        )}
      </div>
      {bill > 0 && (
        <>
          <h3>💰 Total: ${bill}.00</h3>
          <form className="form-cupon" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Cupon Code"
              value={cuponCode}
              onChange={(e) => setCuponCode(e.target.value)}
            />
            <Button>Apply</Button>
          </form>
        </>
      )}
    </div>
  );
}

function CheckOut({ bill, discount }) {
  const discountAmmount = (discount / 100) * bill;
  const totalAmmount = bill - discountAmmount;
  return (
    <div className="ceckout-section">
      <p>💰 Your Bill: ${bill}.00</p>
      <p>
        🥳 Discount: ${bill === 0 ? 0 : discountAmmount}.00 ({discount}% off)
      </p>
      <p>💳 Total: ${totalAmmount}</p>
      <Button>🪙 PAY</Button>
    </div>
  );
}

function Item({ item, onAddItem }) {
  return (
    <div className="item">
      <span className="item-img">{item.image}</span>
      <p className="title">{item.title}</p>
      <span className="price">${item.price}</span>
      <Button onClick={() => onAddItem({ ...item, quantity: 1 })}>Add</Button>
    </div>
  );
}

function CartItem({ item, onDeleteItem }) {
  return (
    item.quantity !== 0 && (
      <p className="cart-item">
        <span>
          {item.image} {item.title} {item.quantity} x ${item.price} =$
          {item.price * item.quantity}.00
        </span>
        <Button
          onClick={() => {
            onDeleteItem(item);
          }}
        >
          ➖
        </Button>
      </p>
    )
  );
}
