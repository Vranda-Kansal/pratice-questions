const comments = [
  // Top-level comments (parentId is the post ID)
  {
    parentId: "p001",
    cmtId: "c001",
    comment: "This is such a great post, loved reading it!",
    icon: "https://i.pravatar.cc/150?img=1",
  },
  {
    parentId: "p001",
    cmtId: "c002",
    comment: "Very informative, thanks for sharing.",
    icon: "https://i.pravatar.cc/150?img=2",
  },
  {
    parentId: "p001",
    cmtId: "c003",
    comment: "I completely agree with this perspective.",
    icon: "https://i.pravatar.cc/150?img=3",
  },
  {
    parentId: "p001",
    cmtId: "c004",
    comment: "Can you share more details on this topic?",
    icon: "https://i.pravatar.cc/150?img=4",
  },

  // Replies to c001
  {
    parentId: "c001",
    cmtId: "c005",
    comment: "Glad you liked it! More coming soon.",
    icon: "https://i.pravatar.cc/150?img=5",
  },
  {
    parentId: "c001",
    cmtId: "c006",
    comment: "Same here, really enjoyed this one.",
    icon: "https://i.pravatar.cc/150?img=6",
  },

  // Reply to c005 (nested)
  {
    parentId: "c005",
    cmtId: "c007",
    comment: "Looking forward to the next one!",
    icon: "https://i.pravatar.cc/150?img=7",
  },

  // Reply to c007 (deeply nested)
  {
    parentId: "c007",
    cmtId: "c008",
    comment: "Me too, can't wait!",
    icon: "https://i.pravatar.cc/150?img=8",
  },

  // Replies to c002
  {
    parentId: "c002",
    cmtId: "c009",
    comment: "Agreed, very well written.",
    icon: "https://i.pravatar.cc/150?img=9",
  },
  {
    parentId: "c002",
    cmtId: "c010",
    comment: "I shared this with my team as well.",
    icon: "https://i.pravatar.cc/150?img=10",
  },

  // Reply to c010
  {
    parentId: "c010",
    cmtId: "c011",
    comment: "Your team will love it for sure!",
    icon: "https://i.pravatar.cc/150?img=11",
  },

  // Reply to c004
  {
    parentId: "c004",
    cmtId: "c012",
    comment: "Check out part 2, it covers that in depth.",
    icon: "https://i.pravatar.cc/150?img=12",
  },
];
export default comments;
