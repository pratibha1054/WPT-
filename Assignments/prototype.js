
function Student(name,age)
{
    this.name = name;
    this.age = age;
}
function Product(name,price)
{
    this.name = name;
    this.price = price;
}

Student.prototype.print = function()
{
    document.write("Student Name: " + this.name + "<br>");
    document.write("Age: " + this.age + "<br>");
}
Product.prototype.print = function()
{
    document.write("Product Name: " + this.name + "<br>");
    document.write("Price: " + this.price + "<br>");
}

var s1 = new Student("Rahul", 21);
var p1 = new Product("Laptop", 50000);

s1.print();
p1.print();
