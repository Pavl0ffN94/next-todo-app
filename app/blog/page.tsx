import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { Metadata } from "next";
import { useEffect } from "react";
import NewPost from "./new/page";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export const revalidate = 10;

export default function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <NewPost />
      <br />
      <PostSearch />
      <Posts />
    </>
  );
}
