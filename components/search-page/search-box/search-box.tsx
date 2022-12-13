import { AiOutlineSearch } from "react-icons/ai";
import classes from "./search-box.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
const SearchBox = () => {
  const [value, setvalue] = useState("");
  const router = useRouter();
  const submitHandler = () => {
    setvalue("");
    router.push({ pathname: "/search", query: { q: value } });
  };
  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="search our store"
        onChange={(e) => setvalue(e.target.value)}
      />
      <div onClick={submitHandler}>
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default SearchBox;
