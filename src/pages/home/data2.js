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

export const array2 = [
  {
    id: 0,
    path:
      'M128.8,140L128.8 116.2 75.4 116.2 75.4 23.8 128.8 23.8 128.8 0 0.4 0 0.4 23.8 50.6 23.8 50.6 116.2 0.4 116.2 0.4 140z',
    width: 129,
    height: 140,
    style: { transform: 'translate(-9px, 0px)' },
    variants: variants1a
  },
  {
    id: 1,
    path:
      'M24.2,98 L24.2,23.2 L67.2,23.2 L67.2,98 L91.4,98 L91.4,23.2 L134.4,23.2 L134.4,98 L158.6,98 L158.6,14.6 C158.6,10.6 157.233333,7.16666667 154.5,4.3 C151.766667,1.43333333 148.333333,0 144.2,0 L144.2,0 L14.4,0 C10.2666667,0 6.83333333,1.43333333 4.1,4.3 C1.36666667,7.16666667 0,10.6 0,14.6 L0,14.6 L0,98 L24.2,98 Z',
    width: 159,
    height: 98,
    style: { transform: 'translate(50px, 21px)' },
    variants: variants1b
  },
  {
    id: 2,
    path:
      'M40,49.8 L40,14.6 C40,10.4666667 38.5666667,7 35.7,4.2 C32.8333333,1.4 29.4,0 25.4,0 L25.4,0 L0.8,0 L0.8,22 L17.6,22 L17.6,49.8 L40,49.8 Z',
    width: 40,
    height: 50,
    style: { transform: 'translate(-156px, -45px)' },
    variants: variants2
  }
];

export const array2Mobile = [
  {
    id: 0,
    path:
      'M77.88,84L77.88 69.72 45.84 69.72 45.84 14.28 77.88 14.28 77.88 0 0.84 0 0.84 14.28 30.96 14.28 30.96 69.72 0.84 69.72 0.84 84z',
    width: 78,
    height: 84,
    style: { transform: 'translate(-6px, 0px)' },
    variants: variants1a
  },
  {
    id: 1,
    path:
      'M14.92,59 L14.92,14.12 L40.72,14.12 L40.72,59 L55.24,59 L55.24,14.12 L81.04,14.12 L81.04,59 L95.56,59 L95.56,8.96 C95.56,6.56 94.74,4.5 93.1,2.78 C91.46,1.06 89.4,0.2 86.92,0.2 L86.92,0.2 L9.04,0.2 C6.56,0.2 4.5,1.06 2.86,2.78 C1.22,4.5 0.4,6.56 0.4,8.96 L0.4,8.96 L0.4,59 L14.92,59 Z',
    width: 96,
    height: 59,
    style: { transform: 'translate(30px, 12px)' },
    variants: variants1b
  },
  {
    id: 2,
    path:
      'M23.8,29.88 L23.8,8.76 C23.8,6.28 22.94,4.2 21.22,2.52 C19.5,0.84 17.44,0 15.04,0 L15.04,0 L0.28,0 L0.28,13.2 L10.36,13.2 L10.36,29.88 L23.8,29.88 Z',
    width: 24,
    height: 30,
    style: { transform: 'translate(-94px, -27px)' },
    variants: variants2
  }
];
