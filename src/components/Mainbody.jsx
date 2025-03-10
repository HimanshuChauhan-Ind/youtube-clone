import { useState } from "react";
import { useEffect } from "react";
import VideoItem from "./VideoItem";
import { Link } from "react-router-dom";

const Mainbody = () => {
  const [videos, setVideos] = useState(null);

  const getVideoList = async () => {
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
        import.meta.env.VITE_YOUTUBE_API
    );
    const json = await response.json();

    setVideos(json.items);
  };

  useEffect(() => {
    getVideoList();
  }, []);

  return (
    videos && (
      <div className="flex gap-2 p-2 flex-wrap justify-center ">
        {videos.map((video) => (
          <Link key={video.id} to={"watch/?v=" + video.id}>
            <VideoItem info={video} />
          </Link>
        ))}
      </div>
    )
  );
};

export default Mainbody;
