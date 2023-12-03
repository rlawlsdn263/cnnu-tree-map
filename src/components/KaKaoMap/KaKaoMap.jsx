import { useKakaoLoader, Map } from "react-kakao-maps-sdk";

import { TreeMarker } from "../_index";
import { trees } from "../../constants/_index";
import { useRecoilValue } from "recoil";
import { default as centerAtom } from "../../atoms/centerAtom";
import { useState } from "react";
import useURLQuery from "../../hooks/useURLQuery";

const KaKaoMap = () => {
  useKakaoLoader();

  const center = useRecoilValue(centerAtom);
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  useURLQuery();

  return (
    <div className="h-[500px] w-[500px] rounded-md border-[2px] border-black p-[4px] sm:w-[1000px]">
      <Map
        center={center}
        isPanto={false}
        style={{ width: "100%", height: "100%", borderRadius: "4px" }}
        level={4}
      >
        {/* 나무마커 생성 */}
        {trees.map((tree, index) => (
          <TreeMarker
            key={tree.title}
            title={tree.title}
            content={tree.content}
            relation={tree.relation}
            position={tree.latlng}
            images={tree.images}
            index={index}
            isActive={activeModalIndex === index}
            setActiveModalIndex={setActiveModalIndex}
          />
        ))}
      </Map>
    </div>
  );
};

export default KaKaoMap;
