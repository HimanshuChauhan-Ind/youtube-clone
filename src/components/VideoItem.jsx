import getDuration from "../assets/getDuration";

const VideoItem = ({ info }) => {
  console.log(info);
  if (!info) return;
  const { snippet, statistics } = info;
  return (
    <div className="shadow-lg w-70">
      <img alt="video thumbnail" src={snippet.thumbnails.medium.url}></img>
      <div className="font-bold truncate p-2">{snippet.title}</div>
      <div className="p-2">
        {statistics.viewCount} views . {getDuration(snippet.publishedAt)}
      </div>
    </div>
  );
};

export default VideoItem;
