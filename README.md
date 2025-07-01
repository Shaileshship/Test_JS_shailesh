# JS Test: Product Price Fetcher Using Promises

## Description
This project demonstrates how to use JavaScript Promises to simulate asynchronous API calls for fetching product prices in a basic online store scenario. The code includes a function `getProductPrice(productId)` that returns a Promise, resolving with the product price if the product exists, or rejecting with an error if not. The delay is simulated using `setTimeout` to mimic a real API call.

## Features
- Simulates fetching product prices for `apple`, `banana`, and `orange`.
- Returns a Promise that resolves with the price or rejects with an error message.
- Demonstrates handling both successful and failed lookups.

## How to Run
1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Open your terminal and navigate to the project directory:
   ```sh
   cd /path/to/your/project
   ```
3. Run the script:
   ```sh
   node getProductPrice.js
   ```
4. You will see the prices for available products and error messages for unavailable ones.

## Example Output
```
Apple price: 1.2
Banana price: 0.5
Orange price: 0.8
Product not found
```

## Files
- `getProductPrice.js` - Main script for fetching product prices using Promises.
- `delay.js` - Example script showing how to use a delay function with Promises.
