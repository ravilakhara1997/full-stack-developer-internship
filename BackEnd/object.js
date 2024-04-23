const student={
    id:1,
    name:'Ravi Lakhara',
    email:'ravi@gmail.com',
    print:function(){
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`email: ${this.email}`);
    }
}

module.exports=student;