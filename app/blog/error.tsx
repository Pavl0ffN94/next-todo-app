"use client";

export default function ErrorPosts({ error }: { error: Error }) {
  return <h1>Oops! {error.message}</h1>;
}
