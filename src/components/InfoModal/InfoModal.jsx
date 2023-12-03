import { CustomOverlayMap } from "react-kakao-maps-sdk";

const InfoModal = ({
  title,
  content,
  relation,
  images,
  setActiveModalIndex,
  lat,
  lng,
}) => {
  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }} yAnchor={1.15}>
      <div className="w-[500px] whitespace-normal rounded-md border border-black bg-white p-[4px]">
        <p className="mb-[4px] text-[16px] font-bold">{title}</p>
        <div className="mb-[4px] flex items-center">
          {images.map((img, index) => {
            return (
              <img
                key={index}
                src={img}
                alt={img}
                className="h-[100px] w-[100px] object-cover"
              />
            );
          })}
        </div>
        <p className="mb-[4px] text-[14px]">{content}</p>
        <p className="text-[14px]">{relation}</p>
        <img
          alt="close"
          width="14"
          height="13"
          src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
          style={{
            position: "absolute",
            right: "5px",
            top: "5px",
            cursor: "pointer",
          }}
          onClick={() => setActiveModalIndex(null)}
        />
      </div>
    </CustomOverlayMap>
  );
};

export default InfoModal;
