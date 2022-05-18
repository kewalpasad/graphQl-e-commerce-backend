const { products, categories, reviews } = require('./mockData');

const resolvers = {
	Query: {
		products: () => products,
		product: (parent, args) => products.find((product) => product.id === args.id),
		categories: () => categories,
		category: (parent, args) => categories.find((category) => category.id === args.id),
		reviews: () => reviews,
		review: (parent, args) => reviews.find((review) => review.id === args.id),
	},
};

module.exports = { resolvers };
