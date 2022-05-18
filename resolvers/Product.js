exports.Product = {
	category: (parent, args, { categories }) => categories.find((category) => category.id === parent.categoryId),
};
