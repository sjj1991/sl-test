This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Install Bun [https://bun.sh/](https://bun.sh/)
2. Install dependencies

```bash
bun i
```

3. Start development server

```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Vercel Deployment

The application is deployed on Vercel, with a CI/CD pipeline for preview deployment of new branches, and production deployment upon merging into `main` branch.

[https://sl-test.sjj.sg/](https://sl-test.sjj.sg/)

## Folder Structure

- `/app/*`: Application routes and screens.
- `/app/ui`: Reusable UI components.
- `/app/lib`: Reusable functions.
  - `/app/lib/anim.ts`: Animation functions for Framer Motion.
  - `/app/lib/data.ts`: Fetch functions to get data from dummyjson.com.
  - `/app/lib/definitions.ts`: Typescript interfaces.
  - `/app/lib/store.ts`: Zustand store initialisation.
  - `/app/lib/utils.ts`: Reusable generic functions.
- `/public`: Static assets.
- `/__tests__`: Unit tests.

## Project Features

- Application is based on Next.js 14 App Router.
- All API requests are handled server side.
- All pages are server side rendered (with some client side components).
- All pages are fully responsive, supporting screen sizes from the iPhone 15 and up.
- All CSS styling is done via Tailwind CSS.
- All Javascript files are fully typed via Typescript.
- All actions and routing are handled by Javascript without the need to reload the entire page. Fallback is available if Javascript has not been loaded.
- All currency is formatted with native `toLocaleString`.
- Reusable Tailwind classes are available (primary button).

### Homepage (/)

Homepage contains a list of products in a grid layout, and a category picker to view products in a specific category.

- `ProductsListing` uses `Suspense` to show skeleton loader while fetching data. This allows the rest of the page to render first while `ProductsListing` is fetching its data.
- `ProductsListing` layout is created with CSS grid.
- Clicking on a `ProductItem` will link to product details page.
- Changing the category will result in an API request to fetch products in the selected category.
- If there are no products available, "No products found." will be displayed.
- Selected category is stored in the URL query string.
- Alternate mobile friendly category selector is available for smaller viewports.
- Entry animation is handled by Framer Motion.
- Filter for rating and price range is not available as the API does not support them, and its not efficient to fetch all products from the API for filtering on the application.

### Product Details (/product/[id])

Product Details contains the details of a single product, including the ability to add 1 or more of the product to cart.

- Page uses `loading.tsx` to show skeleton loader when data is still being fetched on the server side.
- The product ID is retrieved from the
- Clicking on an image thumbnail will display a larger version, selected image is handled by `useState`.
- Quantity can be selected via the "+" and "-" buttons, the selected quantity is handled by `useState`.
- When the "Add to cart" button is clicked, the following logic is run:
  1. Quantity count is reset to 1.
  2. "Added to cart" message is displayed for 1.5 seconds.
  3. Check if item already exists in cart. If exist, update the additional quantity to the item. If not exist, add the item and quantity to cart.
- Entry animation is handled by Framer Motion.

### Cart Page (/cart)

The cart page shows items added into the cart, as well as total amount calculations.

- Cart items are retrieved from local storage via Zustand hook.
- Quantity can be updated via the "+" and "-" buttons, the quantity is updated directly to local storage via Zustand.
- Clicking on "Remove" will remove the selected item from cart.
- If there are no items in cart, "No items in cart." will be displayed.
- The cost for each line is calculated by the item cost multiplied by quantity.
- The grand total cost is calculated by adding up all of the line totals.
- The non-direct pricing is calculated by multiplying the grand total by 1.1 and rouding up.

### Cart

Cart data is handled by Zustand, with persistant storage via the browser local storage.

- Since cart data is stored in the browser, any cart related components will need to be client side rendered. The `useEffect` hook is used to defer rendering of the component on the server side.
- Storing the cart data in local storage allows the data to persist across page refreshes, closing/opening tab or browser.
- The cart can be accessed from the main navigation on any page.
- The total number of items in the cart will be displayed on the main navigation if there is 1 or more item in the cart.

## Unit Tests

Unit tests uses Vitest, jsdom, and React Testing Library. To run unit tests:

```bash
bun run test
```

Due to time constraints, limited unit testing coverage is available for the following components:

- `app/ui/product/AddToCart.tsx`
- `app/ui/CartBtn.tsx`
