let bmi = (weight, height) => (w=weight/Math.pow(height, 2)) <= 18.5 ? "Underweight" : w <= 25.0 ? "Normal" : w <= 30.0 ? "Overweight" : "Obese";
