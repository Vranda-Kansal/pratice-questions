import { useEffect, useRef, useState } from "react";

const PaginationBottom = ({
  totalPost,
  rowsPerPage,
  setSelectedPage,
  selectedPage,
}) => {
  const pageArr = Array.from(
    { length: Math.ceil(totalPost / rowsPerPage) },
    (_, i) => i + 1,
  );
  return (
    <div className="paginationbottom">
      {pageArr.map((pagenum, i) => (
        <div
          className={`pageNum ${selectedPage === i + 1 && "selected"}`}
          key={i}
          onClick={() => {
            setSelectedPage(i + 1);
          }}
        >
          {pagenum}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [eachPageLimit, setEachPageLimit] = useState(4);
  const pageJumpRef = useRef(1);

  const startInd = eachPageLimit * (selectedPage - 1);
  const endInd = eachPageLimit * selectedPage;

  const inputRef = useRef(null);
  const API_URL = "https://jsonplaceholder.typicode.com/posts/";
  useEffect(() => {
    async function getData() {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    }
    getData();
  }, []);
  return (
    <div>
      <div>
        <input type="number" placeholder="how many rows" ref={inputRef} />
        <button
          onClick={() => {
            setEachPageLimit(inputRef.current.value);
            inputRef.current.value = null;
          }}
        >
          Go
        </button>
      </div>
      {posts.slice(startInd, endInd).map((post) => (
        <div className="post" key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
      <div className="buttonBottom">
        <button
          onClick={() =>
            setSelectedPage((prev) => {
              if (prev > 1) {
                prev = prev - 1;
              } else {
                prev;
              }
              return prev;
            })
          }
        >
          prev
        </button>
        <PaginationBottom
          totalPost={posts.length}
          rowsPerPage={eachPageLimit}
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
        />
        <button
          onClick={() =>
            setSelectedPage((prev) => {
              if (prev < Math.ceil(posts.length / eachPageLimit)) {
                prev = prev + 1;
              } else {
                prev;
              }
              return prev;
            })
          }
        >
          Next
        </button>
      </div>
      <input
        type="number"
        placeholder="page you want to visit"
        ref={pageJumpRef}
        min={1}
        onChange={() => {
          pageJumpRef.current.value &&
            setSelectedPage(Number(pageJumpRef.current.value));
        }}
      />
    </div>
  );
}
export default App;
