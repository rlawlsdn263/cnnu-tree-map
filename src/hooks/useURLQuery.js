import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import centerAtom from '../atoms/centerAtom';

const useURLQuery = () => {
  const setCenterAtom = useSetRecoilState(centerAtom);

  useEffect(() => {
    // 현재 페이지의 URL을 가져옵니다.
    const currentUrl = window.location.href;

    // URL에서 쿼리 파라미터를 파싱합니다.
    const urlParams = new URLSearchParams(new URL(currentUrl).search);

    // lat와 lng 값을 가져옵니다.
    const lat = urlParams.get('lat');
    const lng = urlParams.get('lng');

    // 값이 있으면 사용합니다. 없으면 기본값이나 오류 처리를 할 수 있습니다.
    if (lat && lng) {
      // 위도와 경도를 사용하여 필요한 작업을 수행합니다.
      setCenterAtom({
        lat: lat,
        lng: lng,
      });
      console.log(lat, lng);
    } else {
      console.log('No Query Found');
    }
  }, []);
};

export default useURLQuery;
