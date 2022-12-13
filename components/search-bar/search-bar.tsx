import classes from "./seach-bar.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { search_show } from "../../features/search/searchSlice";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";
const SearchBar = () => {
  const show = useAppSelector((state) => state.search.show);
  const dispatch = useAppDispatch();
  const [value, setvalue] = useState("");
  const router = useRouter();

  const closeHandler = () => {
    dispatch(search_show(false));
  };

  const submitHandler = () => {
    closeHandler();
    setvalue("");
    router.push({ pathname: "/search", query: { q: value } });
  };
  return (
    <div
      className={`${classes.outer} ${show ? classes.visible : ""}`}
      onClick={closeHandler}
    >
      <div
        className={`${classes.inner} ${show ? classes.fix : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.content}>
          <div className={classes.input}>
            <input
              type="text"
              placeholder="search our store"
              value={value}
              onChange={(e) => setvalue(e.target.value)}
            />
            <div onClick={submitHandler} className={classes.search_icon}>
              <AiOutlineSearch />
            </div>
          </div>

          <div className={classes.close_icon} onClick={closeHandler}>
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
