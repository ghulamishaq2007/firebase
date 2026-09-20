import { 
  createOrderWithStockDeduction, 
  getProduct, 
  subscribeToProduct, 
  subscribeToProducts,
  cancelOrder,
  getOrder,
  db
} from "./firebase-service.js";
import { canonicalizeProductId } from "./firebase-config.js";

// Attach core Firebase functions to window for global access
window.zenvoraFirebase = {
  createOrderWithStockDeduction,
  getProduct,
  subscribeToProduct,
  subscribeToProducts,
  cancelOrder,
  getOrder,
  canonicalizeProductId,
  db
};

console.log("[ZENVORA] Firebase bridge initialized.");
