/*

Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21

Constraints:

	-2^31 <= x <= 2^31 - 1

Source: https://leetcode.com/problems/reverse-integer/

*/

const Get_the_Number_of_Digits_in_a_Number = (Value) => Math.floor (Math.log10 (Math.abs (Value))) + 1;

const Get_the_Number_at_Index = (Index, Length, Value) => Math.floor (Value / Math.pow (10, Length - Index - 1)) - (Math.floor ((Math.floor (Value / Math.pow (10, Length - Index - 1))) / 10) * 10);

const Reverse_an_Integer = (Value) =>
{
	if (Value < -Math.pow (2, 31) || Value > Math.pow (2, 31) - 1)
	{
		return 0
	}
	const Length_of_the_Number = Get_the_Number_of_Digits_in_a_Number (Value);
	let Index, Reversed_Number = 0;
	for (Index = 0; Index < Length_of_the_Number; Index = Index + 1)
	{
		Reversed_Number = Reversed_Number + Get_the_Number_at_Index (Index, Length_of_the_Number, Math.abs (Value)) * Math.pow (10, Index);
		if (Reversed_Number < -Math.pow (2, 31) || Reversed_Number > Math.pow (2, 31) - 1)
		{
			return 0
		}
	}
	if (Value < 0)
	{
		Reversed_Number = -Reversed_Number;
	}
	return Reversed_Number;
};

console.log (Reverse_an_Integer (123));
console.log (Reverse_an_Integer (321));
console.log (Reverse_an_Integer (120));
console.log (Reverse_an_Integer (36547678));
console.log (Reverse_an_Integer (326236));
console.log (Reverse_an_Integer (-57384567));
console.log (Reverse_an_Integer (29534000));
console.log (Reverse_an_Integer (123456789098765432123456789));
console.log (Reverse_an_Integer (-9362));