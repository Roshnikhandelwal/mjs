class user{
    constructor(name,email){
        this.name=name;
        this.email= email;
    }
    course=[];
    getdata(){
        //console.log(this.name,this.email)
        return {name:this.name,emial:this.email}
    }

    enroll(name){
        this.course.push(name)
       // return this.course;
    }
    getList(){
        return this.course;
    }

}
export {user}

// let com = new user("ritesh","ritesg@.com")
// //com.getdata()
// console.log(com.getdata())
// com.enroll("rosh","rohan","rahul","rohit")
// console.log(com.getList())