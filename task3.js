//**
//Напишите в указанном месте конструкцию с методом bind() так,
//чтобы this внутри функции func всегда указывал на объект user.

var user = { name: "Алексей" };
console.log(user.name);

function func(surname, patronymic) {
  alert("привет" + ", " + this.name + " " + patronymic + " " + surname);
  console.log(this);
}

//Тут напишите конструкцию с bind()
var funcuser = func.bind(user);

funcuser("Николаев", "Иванович"); //тут должно вывести 'привет, Алексей Иванович Николаев
