let college = {
    name:"DTU",
    year: 2023
}

let worldWide = {
    name:"UPSC",
    year:1960
}

function exam(studentName, city){
    console.log(this, studentName,city);
    this.studentName = studentName;
    this.city = city;
}

exam.call(worldWide, "Vaibhav", "Delhi");
//worldwide ab this banjayega jab woh exam functio mein chala jayega
// call uss object ko this bnadeta h 
exam.apply(worldWide, ["vaibabj", "delhi"])//apply m bus array ki form m jaatta h
console.log(worldWide)


let fun = exam.bind(college, "Vaibhab");//ye bind sirf store krta h this but usko sidha output ni deta na call krta 
fun("delhi");

