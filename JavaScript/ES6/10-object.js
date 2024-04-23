const obj1 = {
    id: 3,
    fname: "Ravi",
    lname: "Kumar",
    address: "F-12, Police Line Sultanpur",
    displayinfo: function() {
        return this.fname + " " + this.lname;
    }
};
console.log("Normal Function",obj1.displayinfo());



const obj2 = {
    id: 3,
    fname: "Mohd",
    lname: "Ali",
    address: "F-12, Police Line Sultanpur",
    displayinfo: ()=>{
        return obj2.fname + " " + obj2.lname;
    }
};

console.log("Arrow Function",obj2.displayinfo());