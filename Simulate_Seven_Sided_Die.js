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
	let Roll_1 = Random_Number_Between_1_and_5 ();
	let Roll_2 = Random_Number_Between_1_and_5 () % 3;
	let Sum = Roll_1 + Roll_2;
	if (Sum === 1 || Sum === 7)
	{
		return Sum;
	}
	if (Sum === 2 || Sum === 6)
	{
		Roll_1 = Random_Number_Between_1_and_5 ();
		Roll_2 = Random_Number_Between_1_and_5 () % 3;
		Sum = Roll_1 + Roll_2;
		if (Sum === 2 || Sum === 6)
		{
			return Sum;
		}
	}
	if (Sum === 3 || Sum === 4 || Sum === 5)
	{
		Roll_1 = Random_Number_Between_1_and_5 ();
		Roll_2 = Random_Number_Between_1_and_5 () % 3;
		Sum = Roll_1 + Roll_2;
		if (Sum === 3 || Sum === 4 || Sum === 5)
		{
			Roll_1 = Random_Number_Between_1_and_5 ();
			Roll_2 = Random_Number_Between_1_and_5 () % 3;
			Sum = Roll_1 + Roll_2;
			if (Sum === 3 || Sum === 4 || Sum === 5)
			{
				return Sum;
			}
		}
	}
	return Sum;
}

let Output = "";

for (let Index = 0; Index < 100; Index = Index + 1)
{
	Output = Output + " " + Random_Number_Between_1_and_7  ().toString ();
}

console.log (Output);