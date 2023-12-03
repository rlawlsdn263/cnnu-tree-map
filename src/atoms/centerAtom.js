import { atom } from "recoil";

const centerAtom = atom({
  key: "centerAtom",
  default: {
    lat: 35.1769,
    lng: 126.9069,
  },
});

export default centerAtom;
