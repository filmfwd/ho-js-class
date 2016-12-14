(function(exports) {
		exports.pyramid = function() {
			for (var i = 1; i <= 7; i++) {
				var string = "#".repeat(i);
				console.log(string);
			}
		};
		exports.fizzBuzz = function() {
			for (var i = 1; i <= 100; i++) {
				if (i % 3 === 0 && i % 5 === 0) {
					console.log("Fizzbuzz");
				} else if (i % 5 === 0) {
					console.log("Buzz");
				} else if (i % 3 === 0) {
					console.log("Fizz");
				} else {
					console.log(i)
				}
			}
		};
		exports.chessBoard = function() {
			var sizeX = 8;
			var sizeY = 8;
			var board = "";
			for (var y = 0; y < sizeY; y++) {
				for (var x = 0; x < sizeX; x++) {
					if ((x + y) % 2 == 0) board += " ";
					else board += "#";
				}
				board += "\n";
			}
			return board;
		};
		exports.phonePurchase = function() {
			var SPENDING_THRESHOLD = 100;
			var TAX_RATE = 0.09;
			var PHONE_PRICE = 399.99;
			var ACCESSORY_PRICE = 29.99;
			var bankAccount = 5000;
			var phonesPurchased = 0;

			function addTax(amount) {
				return amount * TAX_RATE;
			}

			function addDollars(amount) {
				return "$" + amount.toFixed(2);
			}
			var cost = PHONE_PRICE + ACCESSORY_PRICE;
			cost += addTax(PHONE_PRICE + ACCESSORY_PRICE);
			while (bankAccount - cost > SPENDING_THRESHOLD) {
				console.log("Phone purchased for " + addDollars(cost));
				bankAccount -= cost;
				phonesPurchased++;
			}
		};
		(function(exports) {
			var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			exports.name = function(number) {
				return names[number];
			};
			exports.number = function(name) {
				return names.indexOf(name);
			};
		})(this.weekDay = {});
		exports.weekDay = this.weekDay;
		
		exports.assignGrade = function(score) {
			if (score < 60) {
				return "F";
			} else if (score < 70) {
				return "D";
			} else if (score < 80) {
				return "C";
			} else if (score < 90) {
				return "B";
			} else {
				return "A";
			}
		}
		exports.isPrime = function(number) {
			if (typeof number !== 'number' || !Number.isInteger(number)) {
				return false;
			}
			if (number < 2) {
				return false;
			}
			if (number === 2) {
				return true;
			} else if (number % 2 === 0) {
				return false;
			}
		}
		exports.squareRoot = function(number) {
		    var squareRoot = Math.sqrt(number);
		for (var i = 3; i <= squareRoot; i += 2) {
			if (number % i === 0) {
				return false;
			    }
		    }
	    return true;
		}

	(function(exports) {
		function Vehicle(type, lat, long, speed, full, vehicleNumber, timeLate) {
			this.type = type;
			this.lat = lat;
			this.long = long;
			this.speed = speed;
			this.full = full;
			this.vehicleNumber = vehicleNumber;
			this.timeLate = timeLate;
		}
		Vehicle.prototype.info = {
			city: "Portland",
			state: "Oregon",
			agency: "Trimet"
		};
		Vehicle.prototype.getInfo = function() {
			console.log("Type: " + this.type + "\nLine: " + this.vehicleNumber + "\nLocation: " + this.lat + ", " + this.long);
		};
		Vehicle.prototype.updateLocation = function(newLat, newLong) {
			this.lat = newLat;
			this.long = newLong;
		};
		exports = Vehicle;
	})(this.Vehicle = {})
})(this.toolBox = {})