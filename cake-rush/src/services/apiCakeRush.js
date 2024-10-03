// const BASE_URL = "http://localhost:3000/api/v1";
const BASE_URL = "https://cake-rush-api-2.onrender.com/api/v1";

export async function getMenu() {
  try {
    const res = await fetch(`${BASE_URL}/cakes`);
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error(`Cant'n fetch cakes`);
  }
}

export async function getOrder(id) {
  try {
    const res = await fetch(`${BASE_URL}/orders/${id}`);
    const data = await res.json();
    const { order } = data.data;

    return order;
  } catch (err) {
    throw new Error(`Can't fetch your order`);
  }
}

export async function createOrder(order) {
  try {
    const res = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();

    return data.data.order;
  } catch (err) {
    throw new Error(`Something went wrong in placing your order`);
  }
}

export async function updateOrder(orderId, updateObj) {
  try {
    const res = await fetch(`${BASE_URL}/orders/${orderId}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();
  } catch (err) {
    throw new Error(`Can't make your order priority`);
  }
}
