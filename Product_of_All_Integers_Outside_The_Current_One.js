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