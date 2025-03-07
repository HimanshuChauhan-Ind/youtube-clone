import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../assets/Store/appconfig";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();

  dispatch(closeSidebar());

  return (
    <div className="pl-10">
      <iframe
        className="rounded-xl"
        width="1280"
        height="720"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
        title="&#39;SETTLEMENT&#39; - Oikawa Tooru - AMV (Haikyuu!)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchVideo;
