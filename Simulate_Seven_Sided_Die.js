const Random_Number_Between_1_and_5 = () =>
{
	return (Math.floor (Math.random () * 5) + 1);
}

const Random_Number_Between_1_and_7 = () =>
{
	return (Random_Number_Between_1_and_5 () % 2 + Random_Number_Between_1_and_5 () % 2 + Random_Number_Between_1_and_5 () % 2 + Random_Number_Between_1_and_5 () % 2 + Random_Number_Between_1_and_5 () % 2 + Random_Number_Between_1_and_5 () % 2 + Random_Number_Between_1_and_5 () % 2);
}

let Output = "";

for (let Index = 0; Index < 100; Index = Index + 1)
{
	Output = Output + " " + Random_Number_Between_1_and_7  ().toString ();
}

console.log (Output);