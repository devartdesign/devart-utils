export const hexToRgba = (hex: string, opacity: number): string => {
  let r;
  let g;
  let b;
  opacity = isNaN(opacity) ? 100 : opacity;
  hex = hex.replace('#', '');
  if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    const rd = `${hex.substring(0, 1)} ${hex.substring(0, 1)}`;
    const gd = `${hex.substring(1, 2)} ${hex.substring(1, 2)}`;
    const bd = `${hex.substring(2, 3)} ${hex.substring(2, 3)}`;
    r = parseInt(rd, 16);
    g = parseInt(gd, 16);
    b = parseInt(bd, 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
};
