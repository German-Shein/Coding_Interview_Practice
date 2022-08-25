/*

Majority Element II

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

Example 1:

Input: nums = [3,2,3]
Output: [3]

Example 2:

Input: nums = [1]
Output: [1]

Example 3:

Input: nums = [1,2]
Output: [1,2]

 

Constraints:

    1 <= nums.length <= 5 * 10^4
    -10^9 <= nums[i] <= 10^9

 

Follow up: Could you solve the problem in linear time and in O(1) space?

Source: https://leetcode.com/problems/majority-element-ii/

*/

const Find_the_Majority_Elements = (Numbers) =>
{
    if (Numbers.length < 1 || Numbers.length > 50000)
    {
        return [];
    }
    const Majority_Threshold = Math.floor (Numbers.length / 3);
    const Frequency_Map = new Map ();
    const Frequent_Numbers = [];
    let Index;
    for (Index = 0; Index < Numbers.length; Index = Index + 1)
    {
        const Value = Numbers [Index];
        if (Value < -1000000000 || Value > 1000000000)
        {
            return [];
        }
        const Frequency_Map_Value = Frequency_Map.get (Value);
        Frequency_Map.set (Value, Frequency_Map_Value === undefined ? 1 : Frequency_Map_Value + 1);
    }
    Frequency_Map.forEach ((Value, Key) =>
    {
        if (Value > Majority_Threshold)
        {
            Frequent_Numbers.push (Key);
        }
    })
    return Frequent_Numbers;
}