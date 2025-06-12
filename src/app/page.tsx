export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">
          Hello{" "}
          <span className="text-teal-500 relative">
            M
            <span className="relative">
              k
              <span className="absolute -right-3 -top-2 text-sm transform rotate-12">
                ◇
              </span>
            </span>
          </span>
        </h1>
        <span className="text-sm text-gray-500">13 - 06</span>
      </div>
    </div>
  );
}
