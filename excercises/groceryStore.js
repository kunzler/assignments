var shopper = {
    name: "Tom",
    itemsInCart: 4,
    statement: function() {
        return (this.name + " has " + this.itemsInCart + " in the cart"); }
    };

    //console.log(shopper);
console.log(shopper.statement());