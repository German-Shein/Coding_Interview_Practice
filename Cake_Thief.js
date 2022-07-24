/*

 You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.

While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

Each type of cake has a weight and a value, stored in an object with two properties:

    weight: the weight of the cake in kilograms
    value: the monetary value of the cake in British shillings

For example:

  // Weighs 7 kilograms and has a value of 160 shillings
{ weight: 7, value: 160 }

// Weighs 3 kilograms and has a value of 90 shillings
{ weight: 3, value: 90 }

You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

For example:

  const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

const capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);
// Returns 555 (6 of the middle type of cake and 1 of the last type of cake)

Weights and values may be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing or duffel bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous about keeping our algorithms flexible and comprehensive. 

Source: https://www.interviewcake.com/question/javascript/cake-thief?

*/


const Cake_Types = 
[
	{
		Weight: 7,
		Value: 160
	},
	{
		Weight: 3,
		Value: 90
	},
	{
		Weight: 2,
		Value: 15
	},
]

/*

const Steal_Cakes = (Cake_Types, Capacity) =>
{
	if (Capacity <= 0)
	{
		return 0;
	}
	if (Cake_Types.map (Cake_Type => Cake_Type.Weight).includes (0))
	{
		return Number.POSITIVE_INFINITY;
	}
	const Combinations = [];
	let Index_1;
	for (Index_1 = 0; Index_1 < Cake_Types.length; Index_1 = Index_1 + 1)
	{
		const Combination = [];
		let Temporary_Capacity = Capacity;
		let Index_2 = Index_1;
		while (Temporary_Capacity > 0)
		{
			if (Temporary_Capacity < Cake_Types [Index_2].Weight)
			{
				Index_2 = Index_2 + 1;
			}
			let Number_of_Cakes = Math.floor (Temporary_Capacity / Cake_Types [Index_2].Weight);
			Combination.push (Number_of_Cakes);
			Temporary_Capacity = Temporary_Capacity - Number_of_Cakes * Cake_Types [Index_2].Weight;
		}
		Combinations.push (Combination);
	}
	const Sums = [];
	for (Index_1 = 0; Index_1 < Combinations.length; Index_1 = Index_1 + 1)
	{
		let Sum = 0;
		Combinations [Index_1].forEach ((Amount, Index_2) => (Sum = Sum + Amount * Cake_Types [Index_1 + Index_2].Value));
		if (Number.isInteger (Sum))
		{
			Sums.push (Sum);
		}
	}
	let Maximum_Sum = 0;
	Sums.forEach (Sum => Maximum_Sum = Sum > Maximum_Sum ? Sum : Maximum_Sum);
	return Maximum_Sum;
}

*/

const Steal_Cakes = (Cake_Types, Capacity) =>
{
	if (Capacity <= 0)
	{
		return 0;
	}
	if (Cake_Types.map (Cake_Type => Cake_Type.Weight).includes (0))
	{
		return Number.POSITIVE_INFINITY;
	}
	let Index_1 = 0, Sum = 0;
	while (Capacity > 0 || Index_1 < Cake_Types.length)
	{
		let Maximum_Value_of_a_type_of_Cake = 0, Maximum_Value_of_a_type_of_Cake_Index = 0, Number_of_Cakes = 0;
		for (let Index_2 = Index_1; Index_2 < Cake_Types.length; Index_2 = Index_2 + 1)
		{
			Number_of_Cakes = Math.floor (Capacity / Cake_Types [Index_2].Weight);
			if (Number_of_Cakes * Cake_Types [Index_2].Value > Maximum_Value_of_a_type_of_Cake)
			{
				Maximum_Value_of_a_type_of_Cake = Number_of_Cakes * Cake_Types [Index_2].Value;
				Maximum_Value_of_a_type_of_Cake_Index = Index_2;
			}
		}
		Number_of_Cakes = Math.floor (Capacity / Cake_Types [Maximum_Value_of_a_type_of_Cake_Index].Weight);
		if (Capacity - Number_of_Cakes * Cake_Types [Maximum_Value_of_a_type_of_Cake_Index].Weight < 0)
		{
			break;
		}
		Capacity = Capacity - Number_of_Cakes * Cake_Types [Maximum_Value_of_a_type_of_Cake_Index].Weight;
		Index_1 = Index_1 + 1;
		Sum = Sum + Maximum_Value_of_a_type_of_Cake;
	}
	return Sum;
}

console.log (Steal_Cakes (Cake_Types, 20));
console.log (Steal_Cakes (Cake_Types, 0));
console.log (Steal_Cakes ([{Value: 1, Weight: 0}], 20));

Steal_Cakes (Cake_Types, 20);