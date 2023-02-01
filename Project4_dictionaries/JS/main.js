function my_Dictionary() {
    var Car = {
        Type: "Tesla",
        Color: "Blue",
        Model: "X",
        Year: 2019 
    };
    delete Car.Type
    document.getElementById("Dictionary").innerHTML= Car.Year;
}
