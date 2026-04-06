import { useState } from "react";
import comments from "../constant";

const CommentSection = ({ id, allComments }) => {
  console.log(id);
  const filteredData = allComments.filter((cmt) => cmt.parentId === id) || [];
  console.log(filteredData);
  return (
    <div>
      {filteredData.map((comment) => (
        <div className="reply_section">
          <div className="each_Comment">
            <img src={comment.icon} alt="avatar" width="20px" height="20px" />
            <div>{comment.comment}</div>
          </div>
          <CommentSection id={comment.cmtId} allComments={allComments} />
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [allComments, setAllComments] = useState(comments);
  return (
    <div>
      <CommentSection id="p001" allComments={allComments} />
    </div>
  );
};

export default App;
