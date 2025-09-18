import Link from "next/link";

const Main = async () => {
  const res = await fetch("http://localhost:5000/api/blog");
  const blogPosts: any = await res.json();

  return (
    <div className="grid grid-cols-4 gap-4">
      {blogPosts.map((eachItem: any, index: number) => (
        // <Link href={""}>
        <div key={index}>
          <img
            className="w-48 h-42 object-cover rounded-sm"
            src="./sample.webp"
            alt="sample"
          />
          <p className="font-bold text-base">{eachItem.title}</p>
          {/* <p>{eachItem.body}</p> */}
          <div className="flex gap-3">
            <p className="text-gray-400 text-sm">{eachItem.author}</p>
            <p className="text-gray-400 text-sm">
              {eachItem.date.split("T")[0]}
            </p>
          </div>
        </div>
        // {/* </Link> */}
      ))}
    </div>
  );
};

export default Main;
