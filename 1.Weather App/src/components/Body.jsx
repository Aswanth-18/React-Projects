import Search from "./weather";

const Body = () => {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-blue-400 duration-300 p-6">
        <Search />
      </div>
    </div>
  );
};

export default Body;
