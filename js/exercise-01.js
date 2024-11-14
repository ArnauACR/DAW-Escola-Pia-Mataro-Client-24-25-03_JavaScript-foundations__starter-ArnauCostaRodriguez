/* 
    1. Create a variable called 'name' that points at a string containing your name
    2. Define function 'updateValue', which receives a value and updates variable 'name'
    3. On the next line, call function 'updateValue' with your favourite musician's name
      Log 'name' value.
    4. On the next line, call function 'updateValue' with value 'true'
      Log 'name' value.
    5. On the next line, call function 'updateValue' value '28'
      Log 'name' value.

*/
--1
let name = "Arnau";
--2
function updateValue(newValue) {
  name = newValue;
}
--3
updateValue("Eminem");
console.log(name);
--4
updateValue(true);
console.log(name);
--5
updateValue(28);
console.log(name);