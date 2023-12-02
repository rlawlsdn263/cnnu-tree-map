import { atom } from 'recoil';

const centerAtom = atom({
  key: 'centerAtom',
  default: {
    lat: 35.1749,
    lng: 126.9013,
  },
});

export default centerAtom;
