Math.randomBetween = function (a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
};

Math.randomSeed = function (seed) {
    this.seed = seed;
    this.next = function() {
        var x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };
};

var random = new Math.randomSeed(1);

console.log(random.next());
console.log(random.next());
console.log(random.next());
