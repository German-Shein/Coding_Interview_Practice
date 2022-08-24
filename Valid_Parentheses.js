/*

20. Valid Parentheses
Easy

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

	Open brackets must be closed by the same type of brackets.
	Open brackets must be closed in the correct order.

 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

 

Constraints:

	1 <= s.length <= 10^4
	s consists of parentheses only '()[]{}'.

Source: https://leetcode.com/problems/valid-parentheses/

*/

const Check_if_Parentheses_Match = (Parentheses) =>
{
	if (Parentheses.length < 1 || Parentheses.length > 10000 || Parentheses.length & 2 == 1)
	{
		return false;
	}
	const Parentheses_Stack = [];
	let Index;
	for (Index = 0; Index < Parentheses.length; Index = Index  + 1)
	{
		const Character = Parentheses [Index];
		if (Character !== '(' && Character !== ')' && Character !== '[' && Character !== ']' && Character !== '{' && Character !== '}')
		{
			return false;
		}
		if (Character === '(' || Character === '[' || Character === '{')
		{
			Parentheses_Stack.push (Parentheses [Index]);
		}
		else
		{
			const Parenthesis = Parentheses_Stack.pop ();
			if ((Character === ')' && Parenthesis !== '(') || (Character === ']' && Parenthesis !== '[') || (Character === '}' && Parenthesis !== '{'))
			{
				return false;
			}
		}
	}
	if (Parentheses_Stack.length !== 0)
	{
		return false;
	}
	return true;
}