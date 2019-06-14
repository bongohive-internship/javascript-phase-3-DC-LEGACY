// solutions to the exercises mentioned in the readme should be in this file.
// question 1

var num1, num2;
		num1 = prompt("Enter number");
		num2 = prompt("Enter number");
		
		if(num1>num2)
		{
			console.log(num1+" is greatest");
		}
		else if(num2>num1)
		{
			console.log(num2+" is greatst");
		}
		else
		{
			console.log("they are equal");
		}

//Question 2

for (var x=0; x<=15; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");   
        }
        else {
                console.log(x + " is odd");
        }
}

//Question 3

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);

//Question 4

function myFunction() {

    var gradeData = prompt('Enter your Score');
    
        if (gradeData >= 90) {
            return 'A';
        }
        if (gradeData >= 80) {
            return 'B';
        }
        if (gradeData >= 70) {
            return 'C';
        }
        if (gradeData >= 60) {
            return 'D';
        }
        return 'F';
    
}myFunction()



























