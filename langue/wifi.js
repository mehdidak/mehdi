const wifi=require("wifi");
wifi().then(password=>{
    console.log(password);

})