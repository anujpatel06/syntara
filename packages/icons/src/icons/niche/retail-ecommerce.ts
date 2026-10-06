/** Domain: retail ecommerce. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconAntiTheftGate = createIcon('anti-theft-gate', [
  ['rect', { x: 3, y: 3, width: 4, height: 18, rx: 2 }],
  ['rect', { x: 17, y: 3, width: 4, height: 18, rx: 2 }],
  ['path', { d: 'M10 9.5a3.5 3.5 0 0 1 0 5M12.75 8a5.5 5.5 0 0 1 0 8' }],
]);
export const IconBagAdd = createIcon('bag-add', [
  ['path', { d: 'M5.5 8h13l-.75 11a1.5 1.5 0 0 1-1.5 1.5H7.75a1.5 1.5 0 0 1-1.5-1.5Z' }],
  ['path', { d: 'M9 8V6.5a3 3 0 0 1 6 0V8' }],
  ['path', { d: 'M12 11.75v5M9.5 14.25h5' }],
]);
export const IconBagCheck = createIcon('bag-check', [
  ['path', { d: 'M5.5 8h13l-.75 11a1.5 1.5 0 0 1-1.5 1.5H7.75a1.5 1.5 0 0 1-1.5-1.5Z' }],
  ['path', { d: 'M9 8V6.5a3 3 0 0 1 6 0V8' }],
  ['path', { d: 'M9.5 14l1.75 1.75 3.25-3.5' }],
]);
export const IconBagRemove = createIcon('bag-remove', [
  ['path', { d: 'M5.5 8h13l-.75 11a1.5 1.5 0 0 1-1.5 1.5H7.75a1.5 1.5 0 0 1-1.5-1.5Z' }],
  ['path', { d: 'M9 8V6.5a3 3 0 0 1 6 0V8' }],
  ['path', { d: 'M9.5 14.25h5' }],
]);
export const IconBoxOpen = createIcon('box-open', [
  ['path', { d: 'M5 10v9a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19v-9Z' }],
  ['path', { d: 'M5 10 3 6.25h7L12 10M19 10l2-3.75h-7L12 10' }],
]);
export const IconCardTerminal = createIcon('card-terminal', [
  ['rect', { x: 6, y: 2.5, width: 12, height: 19, rx: 3 }],
  ['rect', { x: 8.5, y: 5, width: 7, height: 5, rx: 2 }],
  ['circle', { cx: 10.25, cy: 13.75, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.75, cy: 13.75, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10.25, cy: 17.25, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.75, cy: 17.25, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCartAdd = createIcon('cart-add', [
  ['path', { d: 'M2.75 4h2.25l2.25 11h10.5l2-7.5H6' }],
  ['path', { d: 'M12.75 9.25v3.75M10.9 11.1h3.75' }],
  ['circle', { cx: 9, cy: 19, r: 1.3, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 19, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCartCheck = createIcon('cart-check', [
  ['path', { d: 'M2.75 4h2.25l2.25 11h10.5l2-7.5H6' }],
  ['path', { d: 'M10.75 11.1l1.5 1.5 2.75-3' }],
  ['circle', { cx: 9, cy: 19, r: 1.3, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 19, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCartRemove = createIcon('cart-remove', [
  ['path', { d: 'M2.75 4h2.25l2.25 11h10.5l2-7.5H6' }],
  ['path', { d: 'M10.9 11.1h3.75' }],
  ['circle', { cx: 9, cy: 19, r: 1.3, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 19, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCashDrawer = createIcon('cash-drawer', [
  ['path', { d: 'M5.5 7h13l2.5 5.5H3Z' }],
  ['rect', { x: 3, y: 12.5, width: 18, height: 7.5, rx: 2.5 }],
  ['path', { d: 'M12 7v5.5' }],
  ['path', { d: 'M10 16.25h4' }],
]);
export const IconCashRegister = createIcon('cash-register', [
  ['rect', { x: 12.5, y: 3.5, width: 7, height: 4, rx: 1.5 }],
  ['path', { d: 'M16 7.5v3' }],
  ['path', { d: 'M5.5 10.5h13l1.75 6H3.75Z' }],
  ['rect', { x: 3, y: 16.5, width: 18, height: 4, rx: 1.75 }],
  ['circle', { cx: 8.5, cy: 13.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 13.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15.5, cy: 13.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconContactlessPayment = createIcon('contactless-payment', [
  ['rect', { x: 2.5, y: 8.5, width: 12, height: 9, rx: 2.5 }],
  ['path', { d: 'M17 8.75a4.5 4.5 0 0 1 0 6.5M19.75 6.25a8 8 0 0 1 0 11.5' }],
  ['path', { d: 'M5.5 14.5h3' }],
]);
export const IconCoupon = createIcon('coupon', [
  ['rect', { x: 2.5, y: 6, width: 19, height: 12, rx: 2.5 }],
  ['path', { d: 'M15.5 7.75v1.5M15.5 11.25v1.5M15.5 14.75v1.5' }],
  ['path', { d: 'M11 9.5 7 14.5' }],
  ['circle', { cx: 7.25, cy: 9.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10.75, cy: 14.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconDeliveryScooter = createIcon('delivery-scooter', [
  ['path', { d: 'M3.75 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM15.75 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z' }],
  ['path', { d: 'M8.25 17.5h6.25l2.6-5.5M14.5 5.5h1.75L18 17.5' }],
  ['rect', { x: 3.25, y: 8, width: 7, height: 6, rx: 1.75 }],
]);
export const IconDoorstepDelivery = createIcon('doorstep-delivery', [
  ['path', { d: 'M4 20.5V5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 14 5v15.5M2.5 20.5h19' }],
  ['rect', { x: 15.25, y: 14.5, width: 6, height: 6, rx: 1.75 }],
  ['circle', { cx: 11.25, cy: 12.5, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconEscalator = createIcon('escalator', [
  ['path', { d: 'M4.75 17h2l7.5-9h5a1.75 1.75 0 0 1 0 3.5h-3.5l-7.5 9h-3.5a1.75 1.75 0 0 1 0-3.5Z' }],
]);
export const IconFastDelivery = createIcon('fast-delivery', [
  ['rect', { x: 9, y: 6, width: 12, height: 12, rx: 2.5 }],
  ['path', { d: 'M15 6v4' }],
  ['path', { d: 'M2.75 9h4M4.25 12h2.75M2.75 15h4' }],
]);
export const IconFragileGlass = createIcon('fragile-glass', [
  ['path', { d: 'M7.5 3.5h9l-.5 5a4 4 0 0 1-8 0Z' }],
  ['path', { d: 'M12 12.5v8M8.5 20.5h7' }],
  ['path', { d: 'M12.5 3.5 11 6l2 1.5' }],
]);
export const IconGarmentRack = createIcon('garment-rack', [
  ['path', { d: 'M4 21V4.5h16V21M2.75 21h2.5M18.75 21h2.5' }],
  ['path', { d: 'M12 4.5v2.75L6 12.5h12l-6-5.25' }],
]);
export const IconGiftBag = createIcon('gift-bag', [
  ['path', { d: 'M5 9.5h14l-1 11H6Z' }],
  ['path', { d: 'M12 9.5C10 6 7 5.5 7 7.25s3 2.25 5 2.25Zm0 0c2-3.5 5-4 5-2.25S14 9.5 12 9.5Z' }],
]);
export const IconGiftCard = createIcon('gift-card', [
  ['rect', { x: 2.5, y: 5.5, width: 19, height: 13, rx: 2.5 }],
  ['path', { d: 'M8.5 5.5v13' }],
  ['path', { d: 'M8.5 10C6.5 8 4.75 8.5 5 9.75s3.5.25 3.5.25Zm0 0c2-2 3.75-1.5 3.5-.25S8.5 10 8.5 10Z' }],
]);
export const IconGroceryBag = createIcon('grocery-bag', [
  ['path', { d: 'M5.5 10h13l-1 10.5h-11Z' }],
  ['path', { d: 'M8 10l3.4-6.3a1.25 1.25 0 0 1 2.2 1.2L10.75 10' }],
  ['path', { d: 'M14 10c0-2.5 1.5-4 4-4 0 2.5-1.5 4-4 4Z' }],
]);
export const IconHangingSign = createIcon('hanging-sign', [
  ['path', { d: 'M7 10.5 12 4.5l5 6' }],
  ['rect', { x: 3.5, y: 10.5, width: 17, height: 9, rx: 2.5 }],
  ['path', { d: 'M8 15h8' }],
  ['circle', { cx: 12, cy: 4, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconInStock = createIcon('in-stock', [
  ['rect', { x: 3, y: 8, width: 12.5, height: 12.5, rx: 2.5 }],
  ['path', { d: 'M9.25 8v4.166666666666667' }],
  ['path', { d: 'M16.75 5.75l1.75 1.75 3-3.5' }],
]);
export const IconInventory = createIcon('inventory', [
  ['path', { d: 'M9 4.5v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2.5A1.5 1.5 0 0 1 19 6v14a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V6a1.5 1.5 0 0 1 1.5-1.5Z' }],
  ['path', { d: 'M7.75 10.5l1.25 1.25 2-2.25M7.75 16l1.25 1.25 2-2.25' }],
  ['path', { d: 'M13 11h3M13 16.5h3' }],
]);
export const IconLoyaltyCard = createIcon('loyalty-card', [
  ['rect', { x: 2.5, y: 5.5, width: 19, height: 13, rx: 2.5 }],
  ['path', { d: 'M8.5 9L9.29 10.91L11.35 11.07L9.78 12.42L10.26 14.43L8.5 13.35L6.74 14.43L7.22 12.42L5.65 11.07L7.71 10.91Z' }],
  ['path', { d: 'M14 10.5h4M14 13.5h2.5' }],
]);
export const IconMarketStall = createIcon('market-stall', [
  ['path', { d: 'M3.5 9.5 5 4.5h14l1.5 5q-2.125 1.75-4.25 0t-4.25 0-4.25 0-4.25 0Z' }],
  ['path', { d: 'M5 11.5v9M19 11.5v9M3.5 15.5h17' }],
]);
export const IconMobileShopping = createIcon('mobile-shopping', [
  ['rect', { x: 6.5, y: 2.5, width: 11, height: 19, rx: 3 }],
  ['path', { d: 'M9.75 9.5h4.5l-.4 4h-3.7ZM10.75 9.5a1.25 1.25 0 0 1 2.5 0' }],
  ['circle', { cx: 12, cy: 18.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconOnlineStore = createIcon('online-store', [
  ['rect', { x: 5, y: 4.5, width: 14, height: 10.5, rx: 2.5 }],
  ['path', { d: 'M2.75 18.5h18.5' }],
  ['path', { d: 'M9.75 8.75h4.5l-.4 3.5h-3.7ZM10.75 8.75a1.25 1.25 0 0 1 2.5 0' }],
]);
export const IconOutOfStock = createIcon('out-of-stock', [
  ['rect', { x: 3, y: 8, width: 12.5, height: 12.5, rx: 2.5 }],
  ['path', { d: 'M9.25 8v4.166666666666667' }],
  ['path', { d: 'M17 3.5l4 4M21 3.5l-4 4' }],
]);
export const IconPackingTape = createIcon('packing-tape', [
  ['circle', { cx: 10, cy: 11, r: 7 }],
  ['circle', { cx: 10, cy: 11, r: 2.75 }],
  ['path', { d: 'M17 11v9.5' }],
]);
export const IconParcelLocker = createIcon('parcel-locker', [
  ['rect', { x: 3.5, y: 3, width: 17, height: 18, rx: 3 }],
  ['path', { d: 'M12 3v18M3.5 9h8.5M3.5 15h8.5M12 12h8.5' }],
]);
export const IconParcelScan = createIcon('parcel-scan', [
  ['path', { d: 'M7 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2' }],
  ['path', { d: 'M17 3h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2' }],
  ['rect', { x: 7.5, y: 7.5, width: 9, height: 9, rx: 2.5 }],
  ['path', { d: 'M12 7.5v3' }],
]);
export const IconPickupPoint = createIcon('pickup-point', [
  ['path', { d: 'M12 21c-3.5-3.5-7-7-7-11a7 7 0 0 1 14 0c0 4-3.5 7.5-7 11Z' }],
  ['rect', { x: 9, y: 7, width: 6, height: 6, rx: 1.75 }],
]);
export const IconPriceDrop = createIcon('price-drop', [
  ['path', { d: 'M3 4.5h5.5l6 6a1.5 1.5 0 0 1 0 2.1l-3.4 3.4a1.5 1.5 0 0 1-2.1 0L3 10Z' }],
  ['path', { d: 'M19 8v11M16.5 16.5 19 19l2.5-2.5' }],
  ['circle', { cx: 5.75, cy: 7.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconProductCatalog = createIcon('product-catalog', [
  ['rect', { x: 4.5, y: 3, width: 15, height: 18, rx: 2.5 }],
  ['path', { d: 'M7.5 6.5h3.5V10H7.5ZM13 6.5h3.5V10H13ZM7.5 14h3.5v3.5H7.5ZM13 14h3.5v3.5H13Z' }],
]);
export const IconProductReview = createIcon('product-review', [
  ['path', { d: 'M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-4 3.5V17H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z' }],
  ['path', { d: 'M12 6.75L13.06 9.29L15.8 9.51L13.71 11.31L14.35 13.99L12 12.55L9.65 13.99L10.29 11.31L8.2 9.51L10.94 9.29Z' }],
]);
export const IconPurchaseOrder = createIcon('purchase-order', [
  ['rect', { x: 5, y: 4, width: 14, height: 17, rx: 2.5 }],
  ['rect', { x: 9, y: 2.5, width: 6, height: 3, rx: 1.25 }],
  ['path', { d: 'M9 13l2 2 4-4.5' }],
]);
export const IconQueueBarrier = createIcon('queue-barrier', [
  ['path', { d: 'M6 8.5v12M18 8.5v12M4 20.5h4M16 20.5h4' }],
  ['path', { d: 'M6 9.5c3 3.5 9 3.5 12 0' }],
  ['circle', { cx: 6, cy: 6.25, r: 1.3, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18, cy: 6.25, r: 1.3, fill: 'currentColor', stroke: 'none' }],
]);
export const IconReturnParcel = createIcon('return-parcel', [
  ['rect', { x: 3.5, y: 9.5, width: 12, height: 11, rx: 2.5 }],
  ['path', { d: 'M9.5 9.5v4' }],
  ['path', { d: 'M13 4.5h5a3 3 0 0 1 0 6h-1M15 2.5l-2 2 2 2' }],
]);
export const IconReusableBag = createIcon('reusable-bag', [
  ['path', { d: 'M5 9h14l-1 11.5H6Z' }],
  ['path', { d: 'M8.5 9c0-4 1.5-5.5 3.5-5.5s3.5 1.5 3.5 5.5' }],
  ['path', { d: 'M9.5 17c0-2.5 2-4 5-4 0 2.5-2 4-5 4Z' }],
]);
export const IconRewardPoints = createIcon('reward-points', [
  ['circle', { cx: 12, cy: 12, r: 8.75 }],
  ['path', { d: 'M12 7.75L13.19 10.61L16.28 10.86L13.93 12.88L14.65 15.89L12 14.28L9.35 15.89L10.07 12.88L7.72 10.86L10.81 10.61Z' }],
]);
export const IconSaleBadge = createIcon('sale-badge', [
  ['path', { d: 'M19.75 12Q21.66 14.59 18.71 15.88Q19.07 19.07 15.88 18.71Q14.59 21.66 12 19.75Q9.41 21.66 8.13 18.71Q4.93 19.07 5.29 15.88Q2.34 14.59 4.25 12Q2.34 9.41 5.29 8.13Q4.93 4.93 8.12 5.29Q9.41 2.34 12 4.25Q14.59 2.34 15.88 5.29Q19.07 4.93 18.71 8.12Q21.66 9.41 19.75 12Z' }],
  ['path', { d: 'M9.5 14.5l5-5' }],
  ['circle', { cx: 9.75, cy: 9.75, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14.25, cy: 14.25, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconServiceBell = createIcon('service-bell', [
  ['path', { d: 'M4.75 18.5a7.25 7.25 0 0 1 14.5 0' }],
  ['path', { d: 'M3 18.5h18' }],
  ['path', { d: 'M12 11.25V8.75M10 8.5h4' }],
]);
export const IconShippingLabel = createIcon('shipping-label', [
  ['rect', { x: 4, y: 3, width: 16, height: 18, rx: 2.5 }],
  ['path', { d: 'M7.5 7.5h6' }],
  ['path', { d: 'M8 12v5M11 12v5M15.5 12v5' }],
  ['circle', { cx: 13.25, cy: 14.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconShippingPallet = createIcon('shipping-pallet', [
  ['rect', { x: 4.5, y: 7.5, width: 6.5, height: 6.5, rx: 1.75 }],
  ['rect', { x: 13, y: 7.5, width: 6.5, height: 6.5, rx: 1.75 }],
  ['path', { d: 'M3 15h18v5.5h-3.5v-3h-3.75v3h-3.5v-3H6.5v3H3Z' }],
]);
export const IconShopScale = createIcon('shop-scale', [
  ['path', { d: 'M3.5 6C5 8.5 8 9 12 9v2.5V9c4 0 7-.5 8.5-3' }],
  ['path', { d: 'M6.75 11.5h10.5l2 9H4.75Z' }],
  ['circle', { cx: 12, cy: 16, r: 2.75 }],
  ['path', { d: 'M12 16l1.5-1.5' }],
]);
export const IconShoppingBasket = createIcon('shopping-basket', [
  ['path', { d: 'M3 10h18l-1.75 8.5a2.5 2.5 0 0 1-2.45 2H7.2a2.5 2.5 0 0 1-2.45-2Z' }],
  ['path', { d: 'M7.5 10 10 4.5h4l2.5 5.5' }],
  ['path', { d: 'M10 13.5v3.5M14 13.5v3.5' }],
]);
export const IconShoppingList = createIcon('shopping-list', [
  ['rect', { x: 5, y: 3, width: 14, height: 18, rx: 2.5 }],
  ['path', { d: 'M11 8h5M11 12h5M11 16h5' }],
  ['circle', { cx: 8.25, cy: 8, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 8.25, cy: 12, r: 0.95, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 8.25, cy: 16, r: 0.95, fill: 'currentColor', stroke: 'none' }],
]);
export const IconStoreHours = createIcon('store-hours', [
  ['path', { d: 'M7 10 12 4.5l5 5.5' }],
  ['rect', { x: 3.5, y: 10, width: 17, height: 10, rx: 2.5 }],
  ['path', { d: 'M12 12.75V15l1.75 1.25' }],
  ['circle', { cx: 12, cy: 4, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconStoreShelf = createIcon('store-shelf', [
  ['path', { d: 'M4 20.5V3.5h16v17' }],
  ['path', { d: 'M4 11h16' }],
  ['path', { d: 'M6.5 11V8h3v3h1.5V6.5H14V11' }],
  ['path', { d: 'M12.5 20.5V17h4.5v3.5' }],
]);
export const IconThisSideUp = createIcon('this-side-up', [
  ['path', { d: 'M8 19V5M5 8l3-3 3 3M16 19V5M13 8l3-3 3 3M4 20.5h16' }],
]);
export const IconVendingMachine = createIcon('vending-machine', [
  ['rect', { x: 5, y: 2.5, width: 14, height: 19, rx: 3 }],
  ['rect', { x: 7.5, y: 5, width: 6.5, height: 9.5, rx: 2 }],
  ['path', { d: 'M8 18h5' }],
  ['circle', { cx: 16.25, cy: 6.5, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.25, cy: 9.25, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.25, cy: 12, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconWarehouse = createIcon('warehouse', [
  ['path', { d: 'M3 20.5V9.25l9-5.25 9 5.25V20.5M2.5 20.5h19' }],
  ['path', { d: 'M7.5 20.5V13h9v7.5M7.5 16.75h9' }],
]);
export const IconWishlist = createIcon('wishlist', [
  ['path', { d: 'M5.5 8h13l-.75 11a1.5 1.5 0 0 1-1.5 1.5H7.75a1.5 1.5 0 0 1-1.5-1.5Z' }],
  ['path', { d: 'M9 8V6.5a3 3 0 0 1 6 0V8' }],
  ['path', { d: 'M12 12.6a1.6 1.6 0 0 0-3 .8c0 1.4 1.6 2.4 3 3.35 1.4-.95 3-1.95 3-3.35a1.6 1.6 0 0 0-3-.8Z' }],
]);
