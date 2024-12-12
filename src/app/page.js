export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-8 overflow-y-auto bg-zinc-800">
      <div>
        <p className="text-3xl font-bold tracking-tighter text-amber-500">
          Welcome to
        </p>
        <p className="text-5xl font-bold tracking-tighter ">
          BTTracker App<span className=" text-amber-500">!</span>
        </p>
        <p className="mt-2 text-xl tracking-tight">
          Track<span className="font-bold text-amber-500"> / </span>Plan your expenses
        </p>
      </div>
    </div>
  );
}
