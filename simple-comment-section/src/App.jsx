import { useRef, useState } from "react";
import comments from "../constant";

// Comment renders ONE comment + its replies
const Comment = ({
  comment,
  allComments,
  replies,
  handleAddReply,
  setRplyText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputOpen, setOpenInput] = useState(false);

  return (
    <div className="reply_section">
      {/* The UI you already had */}
      <div className="each_Comment">
        <img src={comment.icon} alt="avatar" width="20px" height="20px" />
        <div>{comment.comment}</div>
      </div>

      {replies.length > 0 && (
        <button onClick={() => setIsOpen((prev) => !prev)}>Replies</button>
      )}
      <button
        onClick={() => {
          setOpenInput(true);
        }}
      >
        add
      </button>

      {inputOpen && (
        <div>
          <input
            type="text"
            placeholder="share your thoughts"
            onChange={(e) => setRplyText(e.target.value)}
          />
          <button
            onClick={() => {
              handleAddReply(comment.cmtId);
              setOpenInput(false);
              setIsOpen(true);
            }}
          >
            done
          </button>
        </div>
      )}

      {/* When open, render a new CommentSection with MY cmtId as parentId */}
      {isOpen && (
        <CommentSection
          cmtId={comment.cmtId}
          allComments={allComments}
          handleAddReply={handleAddReply}
          setRplyText={setRplyText}
        />
      )}
    </div>
  );
};

const CommentSection = ({
  allComments,
  cmtId,
  handleAddReply,
  setRplyText,
}) => {
  const filteredData =
    allComments.filter((cmt) => cmt.parentId === cmtId) || [];
  console.log(filteredData);
  return (
    <div>
      {filteredData.map((comment) => {
        // Find children of THIS comment here itself
        const replies = allComments.filter(
          (cmt) => cmt.parentId === comment.cmtId,
        );

        return (
          <Comment
            key={comment.cmtId}
            comment={comment}
            allComments={allComments}
            replies={replies}
            handleAddReply={handleAddReply}
            setRplyText={setRplyText}
          />
        );
      })}
    </div>
  );
};

const App = () => {
  const [allComments, setAllComments] = useState([]);
  const [replytext, setRplyText] = useState(null);
  const inputRef = useRef(null);
  function handleAddReply(parentId) {
    const inputValue = inputRef.current.value;
    setAllComments((prev) => {
      return [
        ...prev,
        {
          parentId: parentId || "p001",
          cmtId: crypto.randomUUID(),
          comment: parentId != null ? replytext : inputValue,
          icon: "https://i.pravatar.cc/150?img=1",
        },
      ];
    });
    inputRef.current.value = "";
    setRplyText(null);
  }
  return (
    <div>
      <CommentSection
        allComments={allComments}
        cmtId="p001"
        handleAddReply={handleAddReply}
        setRplyText={setRplyText}
      />
      <div>
        <p>
          <label for="commentReveiew">Comment now:</label>
        </p>
        <textarea
          name="replyInput"
          rows="4"
          cols="50"
          ref={inputRef}
          placeholder="share your thoughts"
        ></textarea>
        <button onClick={() => handleAddReply()}>Add reply</button>
      </div>
    </div>
  );
};

export default App;
