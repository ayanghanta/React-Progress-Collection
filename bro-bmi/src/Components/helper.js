export function calculateBMI(weight, height, unit) {
  if (unit === "kg") {
    return Math.round(weight / height ** 2);
  } else {
    return Math.round((weight / height ** 2) * 703);
  }
}
