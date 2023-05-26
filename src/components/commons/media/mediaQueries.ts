export const device = {
  macBook: 1440,
  tablet: 1124,
  phone: 768,
};

export const mediaQueries = (key: keyof typeof device): string => {
  return `@media (max-width: ${device[key]}px)`;
};
