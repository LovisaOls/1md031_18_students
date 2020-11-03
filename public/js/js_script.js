function MenuItem(n, kC, g, l){
    this.name = n;
    this.calories = kC;
    this.gluten = g;
    this.lactose = l;

    this.order = function(){
        return this.name + this.calories;
    };
}

var bobBurger = new MenuItem('The Bob Burger', 800 , true, false);

console.log(bobBurger.order());
