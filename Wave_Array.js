/* 

Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place).
In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....

If there are multiple solutions, find the lexicographically smallest one.

Example 1:

Input:
n = 5
arr[] = {1,2,3,4,5}
Output: 2 1 4 3 5
Explanation: Array elements after 
sorting it in wave form are 
2 1 4 3 5.

Example 2:

Input:
n = 6
arr[] = {2,4,7,8,9,10}
Output: 4 2 8 7 10 9
Explanation: Array elements after 
sorting it in wave form are 
4 2 8 7 10 9.

Your Task:
The task is to complete the function convertToWave(), which converts the given array to a wave array.
NOTE: The given array is sorted in ascending order, and you don't need to return anything to make changes in the original array itself.

Expected Time Complexity: O(n).
Expected Auxiliary Space: O(1).

Constraints:
1 ≤ n ≤ 1000000
0 ≤ arr[i] ≤ 10000000

Source: https://practice.geeksforgeeks.org/problems/wave-array-1587115621/1

*/

const Convert_to_Wave = (Numbers) =>
{
	let Index = 0;
	if (Numbers.length % 2 == 0)
	{
		while (Index <= Numbers.length - 1)
		{
			var Temporary_Variable = Numbers [Index];
			Numbers [Index] = Numbers [Index + 1];
			Numbers [Index + 1] = Temporary_Variable;
			Index = Index + 2;
		}
	}
	if (Numbers.length % 2 == 1)
	{
		while (Index <= Numbers.length - 2)
		{
			var Temporary_Variable = Numbers [Index];
			Numbers [Index] = Numbers [Index + 1];
			Numbers [Index + 1] = Temporary_Variable;
			Index = Index + 2;
		}
	}
	return Numbers;
}

console.log (Convert_to_Wave ([1, 2, 3, 4, 5]));
console.log (Convert_to_Wave ([2, 4, 7, 8, 9, 10]));
console.log (Convert_to_Wave ([]));
console.log (Convert_to_Wave ([1]));
console.log (Convert_to_Wave ([...Array (1000000).keys ()]));