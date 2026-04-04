import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/posts/";
  useEffect(() => {
    async function getData() {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setPosts(data);
    }
    getData();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
