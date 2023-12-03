// https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/overlay/basicMarker
// https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/overlay/addMarkerClickEvent
import { MapMarker } from "react-kakao-maps-sdk";
import tree from "../../assets/tree.png";
import { InfoModal } from "../_index";
import { useSetRecoilState } from "recoil";
import { default as centerAtom } from "../../atoms/centerAtom";

const TreeMarker = ({
  title,
  content,
  relation,
  images,
  position,
  index,
  isActive,
  setActiveModalIndex,
}) => {
  const setCenter = useSetRecoilState(centerAtom);

  return (
    <>
      <MapMarker
        position={{ lat: position.lat, lng: position.lng }}
        image={{
          src: tree,
          size: {
            width: 54,
            height: 54,
          },
        }}
        clickable={true}
        onClick={() => {
          setCenter({ lat: position.lat + 0.003, lng: position.lng });
          setActiveModalIndex(isActive ? null : index);
        }}
      ></MapMarker>
      {isActive && (
        <InfoModal
          title={title}
          content={content}
          relation={relation}
          images={images}
          lat={position.lat}
          lng={position.lng}
          setActiveModalIndex={setActiveModalIndex}
        />
      )}
    </>
  );
};

export default TreeMarker;
