"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { memo, useCallback } from "react";
import type { FormEventHandler } from "react";

const SignInFormImpl = () => {
  const router = useRouter();
  const hanleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const responce = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      });
      if (responce && !responce.error) {
        router.push("/profile");
      } else {
        console.log(responce);
      }
    },
    [router]
  );

  return (
    <form className="login-form" onSubmit={hanleSubmit}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Sign In</button>
    </form>
  );
};

export const SignInForm = memo(SignInFormImpl);
