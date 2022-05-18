const { gql } = require('apollo-server');

const typeDefs = gql`
	type Query {
		products: [Product!]!
		product(id: ID!): Product!
		categories: [Category!]!
		category(id: ID!): Category!
		reviews: [Review!]!
		review(id: ID!): Review!
	}

	type Product {
		id: ID!
		name: String!
		description: String!
		quantity: Int!
		price: Float!
		image: String!
		onSale: Boolean!
	}

	type Category {
		id: ID!
		name: String!
	}

	type Review {
		id: ID!
		date: String!
		title: String!
		comment: String!
		rating: Int!
		productId: ID!
	}
`;

module.exports = { typeDefs };
