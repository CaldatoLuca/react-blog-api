const PostsList = ({ posts }) => {
  return (
    <div className="w-1/2 bg-neutral-100 text-neutral-900 flex flex-col h-full ">
      {posts.map((p) => (
        <div>
          <span className=" text-xl font-bold">Title:</span> {p.title}
        </div>
      ))}
    </div>
  );
};

export default PostsList;
