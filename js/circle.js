(function() {
    "use strict";
    // create a circle object
    var circle = {
        radius: 3,
        getArea: function() {
            // TODO: complete this method
            //area of a circle = pi*r ^ 2
            var area = Math.PI * Math.pow(this.radius, 2);
            // TODO: return the proper value
            return area;
        },
        logInfo: function(doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            var circleArea;
            if(doRounding) {
                circleArea = Math.round(this.getArea());
            } else {
                circleArea = this.getArea();
            }
            console.log("Area of a Circle with Radius: " + this.radius + ", is: " + circleArea);
        }
    };

    // log info about the circle
    console.log("Raw Circle Information:");
    circle.logInfo(false);
    console.log("Circle Information Rounded to the Nearest Whole Number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw Circle Information:");
    circle.logInfo(false);
    console.log("Circle Information Rounded to the Nearest Whole Number");
    circle.logInfo(true);
})();
