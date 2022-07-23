/*

Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays.

Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.

Example 1:

Input:
5 3
1 2 3 4 5
1 2 3
Output: 
5
Explanation: 
1, 2, 3, 4 and 5 are the
elements which comes in the union set
of both arrays. So count is 5.

Example 2:

Input:
6 2 
85 25 1 32 54 6
85 2 
Output: 
7
Explanation: 
85, 25, 1, 32, 54, 6, and
2 are the elements which comes in the
union set of both arrays. So count is 7.

Your Task:
Complete doUnion funciton that takes a, n, b, m as parameters and returns the count of union elements of the two arrays. The printing is done by the driver code.

Constraints:
1 ≤ n, m ≤ 100000
0 ≤ a[i], b[i] < 100000

Elements are not necessarily distinct.

Expected Time Complexity : O((n+m)log(n+m))
Expected Auxilliary Space : O(n+m)

Source: https://practice.geeksforgeeks.org/problems/union-of-two-arrays3538/1

*/

const Unite_Arrays = (Numbers_1, Numbers_2) =>
{
	if (Numbers_1.length === 0)
	{
		return Numbers_2;
	}
	if (Numbers_2.length === 0)
	{
		return Numbers_1;
	}
	if (Numbers_1.length === Numbers_2.length)
	{
		let Arrays_Equality_Status = true;
		Numbers_1.forEach ((Value, Index) =>
		{
			if (Value !== Numbers_2 [Index])
			{
				Arrays_Equality_Status = false;
			}
		});
		if (Arrays_Equality_Status)
		{
			return Numbers_1;
		}
	}
}

const Remove_Duplicates = (Numbers, Starting_Index, Median, End_Index)  =>
{
	const Union = new Array (Numbers.length);
	const Subarray_1 = new Array (Median - Starting_Index + 1);
	const Subarray_2 = new Array (End_Index - Median);
	Subarray_1.forEach ((Value, Index) => (Value = Numbers [Starting_Index + Index]));
	Subarray_2.forEach ((Value, Index) => (Value = Numbers [Median + Index + 1]));
	Union.forEach 
}

const Create_a_Union = (Numbers, Starting_Index, End_Index) =>
{
	if (Starting_Index < End_Index)
	{
		const Median = Starting_Index = (End_Index - Starting_Index) / 2;
		Create_a_Union (Numbers, 0, Median);
		Create_a_Union (Numbers, Median + 1, Numbers.length - 1);
		return Remove_Duplicates (Numbers, Starting_Index, Median, End_Index);
	}
}