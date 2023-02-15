export const load = async () => {
  const getPosts = async () => {
		const res = await fetch("http://127.0.0.1:5173/api/posts.json");
		const data = await res.json();
		return data;
	}

  return {
    posts: getPosts(),
  };
}