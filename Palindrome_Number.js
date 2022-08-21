/*

Palindrome Number

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 

Constraints:

    -2^31 <= x <= 2^31 - 1

 
Follow up: Could you solve it without converting the integer to a string?

Source: https://leetcode.com/problems/palindrome-number/

*/

const Check_if_the_Number_is_a_Palindrome = (Value) =>
{
	if (Value < 0 || Value > 2147483647)
	{
		return false;
	}
	if (Value >= 0 && Value < 9)
	{
		return true;
	}
	const Number_Length = Math.floor (Math.log10 (Value)) + 1;
	let Index;
	for (Index = 0; Index < Math.floor (Number_Length / 2); Index = Index + 1)
	{    
		if (Math.floor (Value / (10 ** Index)) % 10 !== Math.floor (Value / (10 ** (Number_Length - Index - 1)))  % 10)
		{
			return false;    
		}
	}
	return true;
};