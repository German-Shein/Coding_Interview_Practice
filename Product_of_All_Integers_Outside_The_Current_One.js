/*

You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Here's the catch: You can't use division in your solution!

Source: https://www.interviewcake.com/question/javascript/product-of-other-numbers

*/

/*

const Multiply_all_Integers_Except_at_the_Index = (Numbers) =>
{
	let Index, Products_1 = [1], Products_2 = [1], Final_Products = [];
	for (Index = 1; Index < Numbers.length; Index = Index + 1)
	{
		Products_1.push (Products_1 [Index - 1] * Numbers [Index - 1]);
	}
	for (Index = Numbers.length - 1; Index > 0; Index = Index - 1)
	{
		Products_2.push (Products_2 [Numbers.length - Index - 1] * Numbers [Index]);
	}
	for (Index = 0; Index < Numbers.length; Index = Index + 1)
	{
		Final_Products.push (Products_1 [Index] * Products_2 [Products_2.length - 1 - Index]);
	}
	return Final_Products;
}

*/

const Multiply_all_Integers_Except_at_the_Index = (Numbers) =>
{
	let Index, Product = 1, Products = new Array (Numbers.length);
	for (Index = 0; Index < Numbers.length; Index = Index + 1)
	{
		Products [Index] = Product;
		Product = Product * Numbers [Index];
	}
	Product = 1;
	for (Index = Numbers.length - 1; Index >= 0; Index = Index - 1)
	{
		Products [Index] = Products [Index] * Product;
		Product = Product * Numbers [Index];
	}
	return Products;
}

console.log (Multiply_all_Integers_Except_at_the_Index ([2, 7, 3, 4]));