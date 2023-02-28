import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies, request }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    
    if (username === "admin" && password === "admin") {
      cookies.set("access", "true", { path: "/", sameSite: "strict" });
      throw redirect(302, "/dashboard");
    } 

    return {
      username,
      message: "username or password is not valid",
    };
  },
};