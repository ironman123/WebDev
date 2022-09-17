function add7(input)
{
    return input + 7;
}
function capatialize(input)
{
    return input.replace(RegExp(input[0],"g"),input[0].toUpperCase());
}
function lastLetter(input)
{
    return (input[input.length - 1]);
}

function FizzBuzz(input)
{
    if(input % 3 == 0)
    {
        return "Fizz";
    }   
    else if(input % 5 ==0)
    {
        return "Buzz";
    }
    else
    {
        return undefined;
    }
}

let answer = parseInt(prompt("Enter a number to FizzBuzz to: "));

for (let index = 1; index <= answer; index++) 
{
    console.log(FizzBuzz(index) ? FizzBuzz(index) : index);
}