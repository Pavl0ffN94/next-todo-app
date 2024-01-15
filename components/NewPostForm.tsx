import { redirect } from "next/dist/server/api-utils";

async function createPost(data: FormData) {
  "use server";
  const { title, body } = Object.fromEntries(data);

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  const post = await response.json();

  redirect(`/blog/${post.id}`);
}

export default function NewPostForm() {
  return (
    <form className="form" action={createPost}>
      <input type="text" placeholder="title" required name="title" />
      <textarea placeholder="content" required name="body" />
      <div>
        <input type="submit" value="Add post" />
      </div>
    </form>
  );
}
