export function formatCurrency(currency) {
  const formatedCurrency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(currency);

  return formatedCurrency;
}

export function formatDate(timeString) {
  const options = {
    month: "short", // Abbreviated month (Oct)
    day: "numeric", // Day of the month (2)
    hour: "numeric", // Hour (12-hour clock)
    minute: "numeric", // Minute
    hour12: true, // 12-hour format with AM/PM
  };

  return new Intl.DateTimeFormat("en-IN", options).format(new Date(timeString));
}

export function calcDeliveryStatus(timeString) {
  const delivarytime = new Date(timeString);
  const currentTime = new Date();

  const deleveryTimeLeft = delivarytime - currentTime;
  const leftMin = Math.floor(deleveryTimeLeft / 1000 / 60);

  if (deleveryTimeLeft <= 0)
    return {
      delivaryText: "Order already delivered 🍰",
      delivarySatus: "delivered order",
      isDelivared: true,
    };
  else
    return {
      delivaryText: `Only ${leftMin} minutes left 😃`,
      delivarySatus: "Preparing order",
      isDelivared: false,
    };
}
