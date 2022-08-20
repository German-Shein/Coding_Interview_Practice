/*

Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 

Constraints:

    2 <= nums.length <= 10000
    -1000000000 <= nums[i] <= 1000000000
    -1000000000 <= target <= 1000000000
    Only one valid answer exists.

 
Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?

Source: https://leetcode.com/problems/two-sum

*/

const Get_Indexes_of_Numbers_that_Add_Up_to_Target = (Values, Target) =>
 {
	if (Values.length < 2 || Values.length > 10000 || Target < -1000000000 || Target > 1000000000)
	{
		return [];
	}
	Values.forEach (Value =>
	{
		if (Value < -1000000000 || Value > 1000000000)
		{
			return [];
		}
	});
	const Complements = {};
	Values.forEach ((Value, Index) =>
	{
		if (Complements [Target - Value] === undefined)
		{
			Complements [Target - Value] = Index;
		}
		else
		{
			Complements [(Target - Value) + 'a'] = Index;
		}
	});
	let Index;
	for (Index = 0; Index < Values.length; Index = Index + 1)
	{
		if ((Values [Index] !== Values [Complements [Values [Index]]]) && (Values [Index] + Values [Complements [Values [Index]]] === Target))
		{
			return [Index, Complements [Values [Index]]]
		}
		else if (Values [Complements [Values [Index] + 'a']] !== undefined)
		{
			if (Values [Index] + Values [Complements [Values [Index] + 'a']] === Target)
			{
				return [Index, Complements [Values [Index] + 'a']]
			}
		}
	}
	return [];
};

console.log (Get_Indexes_of_Numbers_that_Add_Up_to_Target ([2, 7, 11, 15], 9));
console.log (Get_Indexes_of_Numbers_that_Add_Up_to_Target ([3, 2, 4], 6));
console.log (Get_Indexes_of_Numbers_that_Add_Up_to_Target ([3, 3], 6));
console.log (Get_Indexes_of_Numbers_that_Add_Up_to_Target ([9, 5, 7, -1, 63, 23, 94, 12, 25], 24));
console.log (Get_Indexes_of_Numbers_that_Add_Up_to_Target ([0, 4, 3, 0], 0));