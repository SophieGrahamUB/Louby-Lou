import { gql, GraphQLClient } from "graphql-request";

const storefrontAccessToken = "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";

const endpoint = "https://16b34b.myshopify.com/admin/api/2023-04/graphql.json";

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
  },
});

export async function getProducts() {
  const getAllProductsQuery = gql`
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            featuredImage {
              altText
              url
            }
          }
        }
      }
    }
  `;
  try {
    return await graphQLClient.request(getAllProductsQuery);
  } catch (error) {
    throw new Error(error);
  }
}
