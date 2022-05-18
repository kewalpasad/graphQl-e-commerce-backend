exports.Category = {
	products: (parent, args, { products }) => products.filter((product) => product.categoryId === parent.id),
};
