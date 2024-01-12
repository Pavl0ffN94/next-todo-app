import { getAllPosts } from "@/services/getPosts";
import { Metadata } from "next";

interface IProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const posts: any[] = await getAllPosts();
  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

async function getData(id: string) {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return await responce.json();
}

export async function generateMetadata({
  params: { id },
}: IProps): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: IProps) {
  const post = await getData(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
