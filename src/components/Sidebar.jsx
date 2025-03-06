const Sidebar = () => {
  return (
    <div className="p-2 w-1/6">
      <ul>
        <li className="font-bold pt-1">You</li>
        <li className="pt-1">History</li>
        <li className="pt-1">Playlist</li>
        <li className="pt-1">Your videos</li>
      </ul>
      <ul>
        <li className="font-bold pt-2">Explore</li>
        <li className="pt-1">Trending</li>
        <li className="pt-1">Shoping</li>
        <li className="pt-1">Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
