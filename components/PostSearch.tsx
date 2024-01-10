"use client";

import { usePosts } from "@/store";
import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
  memo,
} from "react";

const PostSearchImpl = () => {
  const [search, setSearch] = useState("");
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const getValueInput: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setSearch(event.target.value);
    },
    [setSearch]
  );

  const hanldeSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      event.preventDefault();
      await getPostsBySearch(search);
    },
    [getPostsBySearch, search]
  );

  return (
    <form onSubmit={hanldeSubmit}>
      <input
        type="search"
        placeholder="serch"
        value={search}
        onChange={getValueInput}
      />
      <button type="submit"> Search </button>
    </form>
  );
};

export const PostSearch = memo(PostSearchImpl);
