// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
const updateTodo = (todoList) => {
  // เพิ่ม Object ใหม่เข้าไปใน myTodo ซึ่งมี id เป็น 5 และมี todo เป็น "Walk the dog" 
  todoList.push({ id: 5, todo: "Walk the dog" });

  //แก้ไขชื่อ Object ที่มี id เป็น 4 เพื่อให้ todo ของ Object นั้นมีค่าเป็น "Go to the gym"
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id === 4) {
      todoList[i].todo = "Go to the gym";
    }
  }

  // ลบ Object สุดท้ายใน Array ออก
  todoList.pop();

  // นำ myTodo มาแสดงบนหน้าจอ Console
  console.log(todoList);

  //  ให้นำข้อมูลใน Object สุดท้ายมาแสดงบนหน้าจอ Console ในรูปแบบ "To-do id: {id}, {todo}"
  const lastTodo = todoList[todoList.length - 1];
  console.log(`To-do id: ${lastTodo.id}, ${lastTodo.todo}`);
};


updateTodo(myTodo);
