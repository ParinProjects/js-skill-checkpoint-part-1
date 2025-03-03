// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
const totalInventoryValue = (inventory) => {
  let total = 0;
  //ให้แก้ไขจำนวนสินค้า “Apple” จาก 100 เป็น 200
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === "Apple") {
      inventory[i].quantity += 100;
    }
  }
  // เพิ่มสินค้าใหม่ที่ชื่อ “Orange” ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
  inventory.push({ name: "Orange", price: 20, quantity: 300 });

  //ให้คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
  for (let i = 0; i < inventory.length; i++) {
    total += (inventory[i].price * inventory[i].quantity);
  }
  return `มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${total} บาท`;
}

console.log(totalInventoryValue(inventory));