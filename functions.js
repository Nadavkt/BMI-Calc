function calculatorBmi() {
  var weight = document.getElementById("weightt").value;

  var height = document.getElementById("heightt").value;

  var heightsquare = Math.pow(height, 2);

  var bmiscore = (weight / heightsquare).toFixed(3);

  console.log(bmiscore);

  if (height < 1.2 || height > 2.2) {
    alert("Your height must be between 1.20 - 2.20 Meter ");
  }
  if (height == null) {
    alert("ERROR... Please fill in your height ");
  }

  if (weight < 30 || weight > 200) {
    alert("Your weight must be between 30 - 200 KG ");
  }
  if (weight == null) {
    alert("ERROR... Please fill in your weight ");
  }

   bmi_number.innerHTML = bmiscore;
}
