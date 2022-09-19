/*Значение null представляет отсутствие какого-либо объектного значения.
 В JavaScript,null является примитивом, и в контексте логических операций,
  рассматривается как ложное (falsy). */
  /*let object = null;
  const text = null;
  console.log(object);
  console.log(text);*/




  const myAge = '20';

/*
  напиши ниже условие, которое выведет в консоль текст "возраст указан верно" 
  только в том случае, если ТИПОМ переменной myAge является number.
  Тебе понадобится оператор typeof: https://learn.javascript.ru/types#type-typeof
*/
// тут твой код
if (Number(myAge)) {
    console.log('возраст указан верно')
}