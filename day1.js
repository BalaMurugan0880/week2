var lines = 13;
var multiplier = 4;
for (var i = 1; i < lines; i++){
  console.log(i+" x "+multiplier+ " = "+ i*multiplier)
 }

for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
