export function formatCurrency(currency){

  const formatedCurrency=new Intl.NumberFormat('en-IN',{
    style:'currency',
    currency:'INR'
  }).format(currency)

  return formatedCurrency

}

export function formatDate(timeString){
  const options = {
    month: 'short',  // Abbreviated month (Oct)
    day: 'numeric',  // Day of the month (2)
    hour: 'numeric', // Hour (12-hour clock)
    minute: 'numeric', // Minute
    hour12: true,     // 12-hour format with AM/PM
  };

  return new Intl.DateTimeFormat('en-IN',options).format(new Date(timeString))
}

export function calcDeliveryTime(timeString){
  const delivarytime=new Date(timeString)
  const currentTime= new Date()

  const deleveryTimeLeft= delivarytime-currentTime

  if(deleveryTimeLeft<=0) return 'Order already delivered 🍰'

  const leftMin=Math.floor((deleveryTimeLeft/1000) /60)
  return `Only ${leftMin} minutes left 😃`

}

export function calcOrderStatus(timeString){
  const delivarytime=new Date(timeString)
  const currentTime= new Date()

  const deleveryTimeLeft= delivarytime-currentTime

  if(deleveryTimeLeft<=0) return 'delivered order'
  else return 'Preparing order'
}