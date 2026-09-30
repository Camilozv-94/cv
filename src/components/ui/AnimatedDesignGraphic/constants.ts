export const particles = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  startX: 100,
  startY: 110,
  endX: 0 + (Math.random() - 0.5) * 450,
  endY: 0 + (Math.random() - 0.5) * 450,
  size: Math.random() * 8 + 4,
  duration: Math.random() * 2.5 + 1.5,
  delay: Math.random() * 2,
}));
