const PostsList = ({ posts, deletePost }) => {
  return (
    <div className="w-1/2 bg-neutral-100 text-neutral-900 flex flex-col items-center justify-center gap-5 p-10">
      {posts.map((p, i) => (
        <div
          key={`post-${i}`}
          className="border bg-neutral-400 shadow-2xl p-4 rounded-md w-full"
        >
          <div className=" text-xl font-bold flex justify-between items-center">
            <div>{p.title}</div>
            <button onClick={() => deletePost(p.slug)}>{p.id}</button>
          </div>
          <div>{p.content}</div>
          <img
            src={`http://localhost:3000/img/posts/${p.image}`}
            alt=""
            width={100}
            height={100}
          />
          <div>{p.category.name}</div>
          <ul className="flex gap-2">
            {p.tags.map((t, i) => (
              <li key={`tag-${i}`}>{t.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
