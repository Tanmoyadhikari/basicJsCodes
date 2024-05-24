<script>
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

 function myCar(){
const personCars = {
"person01":{
  carName: "Volvo",
  //lastName: "Doe",
  age: 5,
  eyeColor: "blue"
},"person02":{
  carName: "BMW",
  //lastName: "Doe",
  age: 3,
  eyeColor: "blue"
},"person03":{
  carName: "KTM",
  //lastName: "Doe",
  age: 4,
  eyeColor: "blue"
}};
for(let persons in personCars){
let name = personCars[persons]["carName"];
let year = 2024-personCars[persons]["age"];
let myCar1 = new Car(name,year);
document.write(`Owner :${persons}, Car Name :`+myCar1.name+"  ||  released :"+myCar1.year+"<br>")

}
 //document.getElementById("demo").innerHTML =
//myCar1.name + " " + myCar1.year;
document.write("<br><br>");
return 0;
};

document.write(myCar());

</script>
