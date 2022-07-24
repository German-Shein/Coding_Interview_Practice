/*

You have a function rand5() that generates a random integer from 1 to 5. Use it to write a function rand7() that generates a random integer from 1 to 7.

rand5() returns each integer with equal probability. rand7() must also return each integer with equal probability.
Gotchas

Simply running rand5() twice, adding the results, and taking a modulus won't give us an equal probability for each possible result.

Not convinced? Count the number of ways to get each possible result from 1..71..71..7.

Your function will have worst-case infinite runtime, because sometimes it will need to "try again."

However, at each "try" you only need to make two calls to rand5(). If you're making 3 calls, you can do better.

Source: https://www.interviewcake.com/question/javascript/simulate-7-sided-die

*/

const Random_Number_Between_1_and_5 = () =>
{
	return (Math.floor (Math.random () * 5) + 1);
}

/*

const Random_Number_Between_1_and_7 = () =>
{
	return (Random_Number_Between_1_and_5 () % 2 + Random_Number_Between_1_and_5 () % 2 + Random_Number_Between_1_and_5 () % 2 + Random_Number_Between_1_and_5 () % 2 + Random_Number_Between_1_and_5 () % 2 + Random_Number_Between_1_and_5 () % 2 + Random_Number_Between_1_and_5 () % 2);
}

*/
/*

const Random_Number_Between_1_and_7 = () =>
{
	return (Random_Number_Between_1_and_5 () + Random_Number_Between_1_and_5 () % 3);
}

*/

const Random_Number_Between_1_and_7 = () =>
{
	let Roll_1 = Random_Number_Between_1_and_5 () - 1;
	let Roll_2 = Random_Number_Between_1_and_5 () - 1;
    let Sum = Roll_1 + Roll_2;
    while (Sum > 7 && Sum == 0)
    {
        Roll_1 = Random_Number_Between_1_and_5 () - 1;
	    Roll_2 = Random_Number_Between_1_and_5 () - 1;
        Sum = Roll_1 + Roll_2;
    }
	return Sum;
}

let Output = "";

for (let Index = 0; Index < 100; Index = Index + 1)
{
	Output = Output + " " + Random_Number_Between_1_and_7  ().toString ();
}

console.log (Output);