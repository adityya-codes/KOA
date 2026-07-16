export function parseFirstPrice(price: string): number | null {
  const cleaned = price.replace(/[,₹]/g, "");
  const match = cleaned.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

export function formatPrice(num: number): string {
  return "₹" + num.toLocaleString("en-IN");
}

export function getDiscountedPrice(price: string): {
  original: string;
  discounted: string;
  show: boolean;
} {
  const num = parseFirstPrice(price);
  if (!num) return { original: price, discounted: price, show: false };
  const discounted = Math.round(num * 0.8);
  return {
    original: formatPrice(num),
    discounted: formatPrice(discounted),
    show: true,
  };
}
