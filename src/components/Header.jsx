import { useEffect, useState } from "react";
import { SEARCH_LOGO, USER_LOGO, YOUTUBE_SEARCH } from "../assets/constants";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { setSearchData } from "../assets/Store/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const searchCache = useSelector((state) => state.search[searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache) {
        setSearchResult(searchCache);
      } else {
        getSearchResults();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchResults = async () => {
    const response = await fetch(YOUTUBE_SEARCH + searchQuery);
    const data = await response.json();
    setSearchResult(data[1]);
    dispatch(setSearchData({ [searchQuery]: data[1] }));
  };

  return (
    <div className="grid grid-cols-12 p-2">
      <div className="col-span-2">
        <Logo />
      </div>
      <div className=" col-span-9">
        <div className="flex  h-10 ">
          <input
            type="text"
            placeholder="Search"
            className=" border border-gray-300 p-2 rounded-l-full w-[80%] "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearchResults(true)}
            onBlur={() => setShowSearchResults(false)}
          />
          <button className="h-10  bg-gray-300 px-3 rounded-r-full">
            <img className="h-5" src={SEARCH_LOGO} />
          </button>
        </div>
        {searchQuery && showSearchResults && (
          <div className="absolute bg-white w-3/5 rounded-xl border border-gray-300 p-2">
            <ul>
              {searchResult.map((result, index) => (
                <li key={index} className="hover:bg-gray-300 p-1 rounded-lg">
                  <img className="h-5 inline mr-2" src={SEARCH_LOGO} />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 h-10">
        <img
          className="h-10 float-right pr-2 "
          src={USER_LOGO}
          alt="user_logo"
        ></img>
      </div>
    </div>
  );
};

export default Header;
