//Get a database reference
var data = firebase.database();

function Hey(){
    var data= firebase.database();
    firebase.database().ref('test/lvlTwo/lvlThree').push({
      age: 212310,
      token: "hskdjadas",
  });
}