import { AiOutlineSearch } from "react-icons/ai";
import classes from "./search-box.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
const SearchBox = () => {
  const [value, setvalue] = useState("");
  const router = useRouter();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setvalue("");
    router.push({ pathname: "/search", query: { q: value } });
  };
  return (
    <form className={classes.container} onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="search our store"
        onChange={(e) => setvalue(e.target.value)}
      />
      <button type="submit">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default SearchBox;
