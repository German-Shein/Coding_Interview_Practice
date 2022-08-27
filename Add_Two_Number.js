/*

Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

	The number of nodes in each linked list is in the range [1, 100].
	0 <= Node.val <= 9
	It is guaranteed that the list represents a number that does not have leading zeros.

Source: https://leetcode.com/problems/add-two-numbers/

*/

const Add_Two_Linked_List_Numbers = (List_1, List_2) =>
{
	let Carry_Over_Number = 0, Final_List = new ListNode (), Index = 0;
	const Anchor = Final_List;
	while (List_1 !== null || List_2 !== null)
	{
		if (List_1 !== null && List_2 !== null)
		{
			if (List_1.val < 0 || List_1.val > 9 || List_2.val < 0 || List_2.val > 9)
			{
				return new ListNode ();
			}
			const Sum = List_1.val + List_2.val + Carry_Over_Number;
			Final_List.val = Sum >= 10 ? Sum - 10 : Sum;
			Carry_Over_Number = Sum >= 10 ? 1 : 0;
			List_1 = List_1.next;
			List_2 = List_2.next;
		}
		else if (List_1 !== null && List_2 === null)
		{
			if (List_1.val < 0 || List_1.val > 9)
			{
				return new ListNode ();
			}
			const Sum = List_1.val + Carry_Over_Number;
			Final_List.val = Sum >= 10 ? Sum - 10 : Sum;
			Carry_Over_Number = Sum >= 10 ? 1 : 0;
			List_1 = List_1.next;
		}
		else if (List_1 === null && List_2 !== null)
		{
			if (List_2.val < 0 || List_2.val > 9)
			{
				return new ListNode ();
			}
			const Sum = List_2.val + Carry_Over_Number;
			Final_List.val = Sum >= 10 ? Sum - 10 : Sum;
			Carry_Over_Number = Sum >= 10 ? 1 : 0;
			List_2 = List_2.next;
		}
		if (List_1 !== null || List_2 !== null)
		{
			Final_List.next = new ListNode ();
			Final_List = Final_List.next;
		}
		if (List_1 === null && List_2 === null && Carry_Over_Number === 1)
		{
			Final_List.next = new ListNode ();
			Final_List = Final_List.next;
			Final_List.val = Carry_Over_Number;
		}
		Index = Index + 1;
		if (Index > 100)
		{
			return new ListNode ();
		}
	}
	return Anchor;
}