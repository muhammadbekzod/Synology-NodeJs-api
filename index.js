var Syno = require("./synologyAPI");


var syno = new Syno(
    protocol = "HTTP",
    address = "192.168.0.20",
    port = "5000",
    username = "admin",
    password = "azerty",
    debug = true);


syno.Auth.Connect().then(function(value) {
    console.log("Connecté!");

    syno.DS.getTasks().then(function(value) {

        console.log("Success : " + value.Success)

        for(var task in value.Tasks){
            console.log(value.Tasks[task].id)
        }



    }, function(reason) {

        console.log("Error : " + reason.Message)

    })



}, function(reason) {
    console.log("Error : " + reason.Message);

});










// data.Auth.Logout().then(function(data){
//       console.log("Deconnecté")
//   },function(reason){
//           console.log("Pas Deconnecté")  
//   });