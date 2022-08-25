/*

Power of Three

Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

 

Example 1:

Input: n = 27
Output: true

Example 2:

Input: n = 0
Output: false

Example 3:

Input: n = 9
Output: true

 

Constraints:

    -2^31 <= n <= 2^31 - 1

 
Follow up: Could you solve it without loops/recursion?

Source: https://leetcode.com/problems/power-of-three/

*/

const Check_if_the_Number_is_a_Power_of_Three = (Value) =>
{
    if (Value === 1)
    {
        return true;
    }
    if (Value < 1 || Value > 2147483647 || Value % 3 !== 0)
    {
        return false;
    }
    else
    {
        return isPowerOfThree (Value / 3);
    }
}