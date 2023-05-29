const ellipse = {
    width: 10,
    height: 5,
    getArea: function() {
        return this.width * this.height * Math.PI;
    },
    getPerimeter: function() {
        const x = (this.width**2 + this.height**2)/2;
        return 2 * Math.PI * Math.sqrt(x);
    },
    getEccentricity: function() {
        const y = 1 - ((this.height/this.width))**2;
        return Math.sqrt(y);
    }
};
