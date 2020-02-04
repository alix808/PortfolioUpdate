const variants1a = {
  one: {
    pathLength: 0,
    opacity: 0
  },
  two: {
    pathLength: 1,
    opacity: 1
  },
  three: {
    opacity: 0,
    scale: 0,
    rotate: 180,
    skew: 45
  }
};

const variants1b = {
  one: {
    pathLength: 0,
    opacity: 0
  },
  two: {
    pathLength: 1,
    opacity: 1
  },
  three: {
    opacity: 0,
    scale: 0,
    rotate: -180
  }
};

const variants2 = {
  one: {
    y: -1000,
    opacity: 1,
    pathLength: 1
  },
  two: {
    y: 0,
    opacity: 1,
    pathLength: 1
  },
  three: {
    opacity: 1,
    pathLength: 1
  },

  four: { pathLength: 1, opacity: 0, rotate: 360 }
};

export const array1 = [
  {
    id: 0,
    path:
      'M25.1,140 L25.1,65.2 L92.5,65.2 L92.5,140 L116.7,140 L116.7,56.6 C116.7,52.6 115.3,49.1666667 112.5,46.3 C109.7,43.4333333 106.233333,42 102.1,42 L102.1,42 L25.1,42 L25.1,0 L0.9,0 L0.9,140 L25.1,140 Z',
    width: 117,
    height: 140,
    style: { transform: 'translate(5px, 0px)' },
    variants: variants1a
  },
  {
    id: 1,
    path:
      'M46.1,98 L46.1,14.6 C46.1,10.4666667 44.7,7 41.9,4.2 C39.1,1.4 35.7,5.68434189e-14 31.7,5.68434189e-14 L0.7,5.68434189e-14 L0.7,23.2 L21.9,23.2 L21.9,98 L46.1,98 Z',
    width: 47,
    height: 98,
    style: { transform: 'translate(20px, 21px)' },
    variants: variants1b
  },
  {
    id: 2,
    path: 'M25.1,25.6 L25.1,0.8 L0.9,0.8 L0.9,25.6 L25.1,25.6 Z',
    width: 26,
    height: 26,
    style: { transform: 'translate(-8px, -55px)' },
    variants: variants2
  }
];

export const array1Mobile = [
  {
    id: 0,
    path:
      'M15.06,84 L15.06,39.12 L55.5,39.12 L55.5,84 L70.02,84 L70.02,33.96 C70.02,31.56 69.18,29.5 67.5,27.78 C65.82,26.06 63.74,25.2 61.26,25.2 L61.26,25.2 L15.06,25.2 L15.06,0 L0.54,0 L0.54,84 L15.06,84 Z',
    width: 71,
    height: 84,
    style: { transform: 'translate(4px, 0px)' },
    variants: variants1a
  },
  {
    id: 1,
    path:
      'M27.86,59 L27.86,8.96 C27.86,6.48 27.02,4.4 25.34,2.72 C23.66,1.04 21.62,0.2 19.22,0.2 L19.22,0.2 L0.62,0.2 L0.62,14.12 L13.34,14.12 L13.34,59 L27.86,59 Z',
    width: 28,
    height: 59,
    style: { transform: 'translate(10px, 12px)' },
    variants: variants1a
  },
  {
    id: 2,
    path: 'M14.66,15.56L14.66 0.68 0.14 0.68 0.14 15.56z',
    width: 15,
    height: 16,
    style: { transform: 'translate(-5px, -34px)' },
    variants: variants2
  }
];
