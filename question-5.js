// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้
const calculateTotalPrice = (products, promotionCode) => {
  let total = 0; // กำหนดค่าเริ่มต้นของราคารวม

  for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].quantity;
  }

  if (promotionCode === "SALE20") {
    total *= 0.8;
  } else if (promotionCode === "SALE50") {
    total *= 0.5;
  }

  return total;
};

console.log(calculateTotalPrice(products, promotionCode));
