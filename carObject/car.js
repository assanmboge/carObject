var car1 = {
    licenceNumber: "YES-007",
    maker: "Toyota",
    model:2001 ,
    price: 25000,
    color: "Grey"
  };
  
  var car2 = {
    licenceNumber: "No-007",
    maker: "Toyota",
    model:2010 ,
    price: 25000,
    color: "Blue"
  };
  var car3 = {
    licenceNumber: "True-007",
    maker: "Toyota",
    model:2005 ,
    price: 25000,
    color: "Red"
  };
  var car4 = {
    licenceNumber: "False-007",
    maker: "Toyota",
    model:2008 ,
    price: 25000,
    color: "White"
  };
  
  function Car(licenceNumberVal, makerVal, modelVal, priceVal, colorVal) {
    this.licenceNumber = licenceNumberVal;
    this.maker = makerVal;
    this.model = modelVal;
    this.price = priceVal;
    this.color = colorVal;
  }
  
  function addNewcar() {
    var licenceNumber = document.getElementsByName('licenceNumber')[0].value;
    var maker = document.getElementsByName('maker')[0].value;
    var model = document.getElementsByName('model')[0].value;
    var price = document.getElementsByName('price')[0].value;
    var color = document.getElementsByName('color')[0].value;
  
    var newCar = new Car(licenceNumber, maker, model, price, color);
    cars.push(newCar);
    clearAllFields();
    console.log(cars)
  }
  
  var cars = [car1,car2,car3,car4];
  
  
  function clearAllFields() {
    document.getElementsByName('licenceNumber')[0].value = "";
    document.getElementsByName('maker')[0].value = "";
    document.getElementsByName('model')[0].value = "";
    document.getElementsByName('price')[0].value = "";
    document.getElementsByName('color')[0].value = "";
  }
  
  
  
  
  function searchLicencePlate() {
    var licenceNumber = document.getElementsByName('search')[0].value;
  
    for (var i = 0; i < cars.length; i++) {
      currentCar = cars[i];
  
      if (currentCar.licenceNumber=licenceNumber) {
        console.log("found match");
        document.getElementById("makerResult").innerHTML=currentCar.maker;
        document.getElementById("modelResult").innerHTML=currentCar.model;
    }
    }
  }
  
  //function displayCar() {
    //document.getElementsByName('maker').innerHTML = Car;
    //document.getElementsByName('model').innerHTML = Car;
  //}
  
  function Cycle(no) {
    this.no = no;
    this.wheels;
  }
  
  function Wheel(no) {
    this.no = no;
    this.spokes;
  }
  
  function Spoke(no) {
    this.no = no;
    this.tension = 2;
  }
  
  function cycleTest() {
    var cycles = [];
    for (var i = 0; i < 5; i++) { //cycle loop starts
      var wheelsBox = [];
      for (var j = 0; j < 2; j++) { //wheel loop starts
        var spokesBox = []; // array
        for (var k = 0; k < 10; k++) { //spoke loop starts
          var currentSpoke = new Spoke(k); // single spoke
          spokesBox.push(currentSpoke);
        } //spoke loop ends
        var currentWheel = new Wheel(j); // single spoke
        currentWheel.spokes = spokesBox;
        wheelsBox.push(currentWheel);
      } //wheel loop ends
      var currentCycle = new Cycle(i);
      currentCycle.wheels = wheelsBox;
      cycles.push(currentCycle);
    } //cycle loop ends
  
    for (var i = 0; i < cycles.length; i++) {
      var currentCycle = cycles[i];
      var wheels = currentCycle.wheels;
      for (var j = 0; j < wheels.length; j++) {
        var currWheel = wheels[j];
        var spokes = currWheel.spokes;
        for (var k = 0; k < spokes.length; k++) {
          var currentSpoke = spokes[k];
          if (currentSpoke.tension = 2) {
            console.log("cycle no. " + i + " wheel no. " + j + " spoke no. " + k + " is ok");
          }
        }
      }
    }
  
  }