/*

Pow(x, n)

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).


Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25

Constraints:

	-100.0 < x < 100.0
	-2^31 <= n <= 2^31 - 1
	-10^4 <= x^n <= 10^4

Source: https://leetcode.com/problems/powx-n/

*/

const Calculate_the_Power = (Value, Power) =>
{
	if (Value < -100.0 || Value > 100.0 || Power < -2147483648 || Power > 2147483647)
	{
		return 0;
	}
	if (Power === 0)
	{
		return 1;
	}
	const Square_Root_of_a_Result = Calculate_the_Power (Value, Power > 0 ? Math.floor (Power / 2) : Math.ceil (Power / 2));
	if (Power % 2 === 0)
	{
		return Square_Root_of_a_Result * Square_Root_of_a_Result;
	}
	else
	{
		return Power > 0 ? Value * Square_Root_of_a_Result * Square_Root_of_a_Result : (Square_Root_of_a_Result * Square_Root_of_a_Result / Value);
	}
};

console.log (Calculate_the_Power (52, 156));
console.log (Calculate_the_Power (-34, 61));
console.log (Calculate_the_Power (55, -13));
console.log (Calculate_the_Power (6, 10));
console.log (Calculate_the_Power (-64, -93));