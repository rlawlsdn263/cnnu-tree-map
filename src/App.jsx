import { KaKaoMap } from "./components/_index";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-[20px] text-[16px] font-bold sm:text-[24px]">
        전남대학교 나무지도
      </h1>
      <KaKaoMap />
    </div>
  );
}

export default App;
