import { useKakaoLoader, Map } from 'react-kakao-maps-sdk';
import styles from './KaKaoMap.module.css';
import { TreeMarker } from '../_index';
import { trees } from '../../constants/_index';
import { useRecoilValue } from 'recoil';
import { default as centerAtom } from '../../atoms/centerAtom';
import { useState } from 'react';
import useURLQuery from '../../hooks/useURLQuery';

const KaKaoMap = () => {
  useKakaoLoader();

  const center = useRecoilValue(centerAtom);
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  useURLQuery();

  return (
    <div className={styles.KaKaoMap}>
      <Map
        center={center}
        isPanto={false}
        style={{ width: '100%', height: '100%' }}
        level={3}
      >
        {/* 나무마커 생성 */}
        {trees.map((tree, index) => (
          <TreeMarker
            key={tree.title}
            title={tree.title}
            position={tree.latlng} // 마커를 표시할 위치
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
