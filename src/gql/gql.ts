/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddItem($productId: String!, $cartId: ID!, $quantity: Int!) {\n  cartAddItem(\n    id: $cartId\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    items {\n      quantity\n    }\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartFindOrCreate($productId: String!, $cartId: ID!) {\n  cartFindOrCreate(input: {items: {productId: $productId}}, id: $cartId) {\n    id\n    items {\n      quantity\n      product {\n        id\n      }\n    }\n  }\n}": types.CartFindOrCreateDocument,
    "fragment CartFragment on Cart {\n  id\n  items {\n    ...CartListItemFragment\n  }\n}": types.CartFragmentFragmentDoc,
    "query CartGetById($cartId: ID!) {\n  cart(id: $cartId) {\n    id\n    items {\n      product {\n        id\n        name\n        price\n        images {\n          url\n          alt\n        }\n        categories {\n          name\n        }\n      }\n      quantity\n    }\n  }\n}": types.CartGetByIdDocument,
    "fragment CartListItemFragment on CartItem {\n  product {\n    id\n    name\n    price\n    images {\n      url\n      alt\n    }\n    categories {\n      name\n    }\n  }\n  quantity\n}": types.CartListItemFragmentFragmentDoc,
    "mutation CartRemoveItem($productId: ID!, $cartId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n    items {\n      product {\n        id\n      }\n    }\n  }\n}": types.CartRemoveItemDocument,
    "query CategoriesGetList($take: Int, $skip: Int) {\n  categories(take: $take, skip: $skip) {\n    data {\n      ...CategoryListItemFragment\n    }\n  }\n}": types.CategoriesGetListDocument,
    "fragment CategoryListItemFragment on Category {\n  id\n  name\n  slug\n  description\n}": types.CategoryListItemFragmentFragmentDoc,
    "fragment CollectionListItemFragment on Collection {\n  name\n  id\n  description\n  slug\n  products {\n    name\n    price\n    images {\n      alt\n      url\n    }\n    id\n    description\n    categories {\n      name\n      slug\n    }\n    reviews {\n      rating\n    }\n  }\n}": types.CollectionListItemFragmentFragmentDoc,
    "query CollectionsGetList($take: Int, $skip: Int) {\n  collections(take: $take, skip: $skip) {\n    data {\n      name\n      id\n      description\n      slug\n      products {\n        name\n        price\n        images {\n          alt\n          url\n        }\n        id\n        description\n        categories {\n          name\n          slug\n        }\n        reviews {\n          rating\n        }\n      }\n    }\n  }\n}": types.CollectionsGetListDocument,
    "fragment ProductListItemFragment on Product {\n  name\n  price\n  rating\n  images {\n    alt\n    url\n  }\n  id\n  description\n  categories {\n    name\n    slug\n  }\n  reviews {\n    rating\n  }\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsGetListByCollectionSlug($slug: String!) {\n  collection(slug: $slug) {\n    ...CollectionListItemFragment\n  }\n}": types.ProductsGetListByCollectionSlugDocument,
    "query ProductsGetItem($id: ID!) {\n  product(id: $id) {\n    ...ProductListItemFragment\n  }\n}": types.ProductsGetItemDocument,
    "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItemFragment\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetListByCategorySlugDocument,
    "query ProductsGetListByOrder($take: Int, $skip: Int, $orderBy: ProductSortBy, $order: SortDirection) {\n  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {\n    data {\n      ...ProductListItemFragment\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetListByOrderDocument,
    "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetListBySearchDocument,
    "mutation ReviewCreate($productId: ID!, $author: String!, $description: String!, $email: String!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "fragment ReviewListItemFragment on Review {\n  author\n  description\n  id\n  rating\n  title\n  email\n}": types.ReviewListItemFragmentFragmentDoc,
    "query ReviewsGetListByProductId($id: ID!) {\n  product(id: $id) {\n    reviews {\n      ...ReviewListItemFragment\n    }\n  }\n}": types.ReviewsGetListByProductIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($productId: String!, $cartId: ID!, $quantity: Int!) {\n  cartAddItem(\n    id: $cartId\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    items {\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartFindOrCreate($productId: String!, $cartId: ID!) {\n  cartFindOrCreate(input: {items: {productId: $productId}}, id: $cartId) {\n    id\n    items {\n      quantity\n      product {\n        id\n      }\n    }\n  }\n}"): typeof import('./graphql').CartFindOrCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartFragment on Cart {\n  id\n  items {\n    ...CartListItemFragment\n  }\n}"): typeof import('./graphql').CartFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($cartId: ID!) {\n  cart(id: $cartId) {\n    id\n    items {\n      product {\n        id\n        name\n        price\n        images {\n          url\n          alt\n        }\n        categories {\n          name\n        }\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartListItemFragment on CartItem {\n  product {\n    id\n    name\n    price\n    images {\n      url\n      alt\n    }\n    categories {\n      name\n    }\n  }\n  quantity\n}"): typeof import('./graphql').CartListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($productId: ID!, $cartId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n    items {\n      product {\n        id\n      }\n    }\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList($take: Int, $skip: Int) {\n  categories(take: $take, skip: $skip) {\n    data {\n      ...CategoryListItemFragment\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryListItemFragment on Category {\n  id\n  name\n  slug\n  description\n}"): typeof import('./graphql').CategoryListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItemFragment on Collection {\n  name\n  id\n  description\n  slug\n  products {\n    name\n    price\n    images {\n      alt\n      url\n    }\n    id\n    description\n    categories {\n      name\n      slug\n    }\n    reviews {\n      rating\n    }\n  }\n}"): typeof import('./graphql').CollectionListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList($take: Int, $skip: Int) {\n  collections(take: $take, skip: $skip) {\n    data {\n      name\n      id\n      description\n      slug\n      products {\n        name\n        price\n        images {\n          alt\n          url\n        }\n        id\n        description\n        categories {\n          name\n          slug\n        }\n        reviews {\n          rating\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  name\n  price\n  rating\n  images {\n    alt\n    url\n  }\n  id\n  description\n  categories {\n    name\n    slug\n  }\n  reviews {\n    rating\n  }\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCollectionSlug($slug: String!) {\n  collection(slug: $slug) {\n    ...CollectionListItemFragment\n  }\n}"): typeof import('./graphql').ProductsGetListByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetItem($id: ID!) {\n  product(id: $id) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').ProductsGetItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItemFragment\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByOrder($take: Int, $skip: Int, $orderBy: ProductSortBy, $order: SortDirection) {\n  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {\n    data {\n      ...ProductListItemFragment\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListByOrderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($productId: ID!, $author: String!, $description: String!, $email: String!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewListItemFragment on Review {\n  author\n  description\n  id\n  rating\n  title\n  email\n}"): typeof import('./graphql').ReviewListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsGetListByProductId($id: ID!) {\n  product(id: $id) {\n    reviews {\n      ...ReviewListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ReviewsGetListByProductIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
