exports.Query = {
	products: (parent, { filter }, { products }) => (filter.onSale != null ? products.filter((product) => product.onSale === filter.onSale) : products),
	product: (parent, args, { products }) => products.find((product) => product.id === args.id),
	categories: (parent, args, { categories }) => categories,
	category: (parent, args, { categories }) => categories.find((category) => category.id === args.id),
	reviews: (parent, args, { reviews }) => reviews,
	review: (parent, args, { reviews }) => reviews.find((review) => review.id === args.id),
};
