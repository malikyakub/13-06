import AnimatedTitle from "../components/AnimatedTitle";
import AnimatedCodeDisplay from "../components/AnimatedCodeDisplay";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative z-10 w-4/5">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 items-center gap-2 w-full max-w-7xl px-4">
        <div className="flex flex-col items-start gap-2 lg:w-[45%]">
          <p className="text-gray-400">Hi all. I am</p>
          <h1 className="text-5xl font-bold">Malik Yakub</h1>
          <AnimatedTitle />
          
          {/* find my profile on Github: */}
          <p className="font-mono text-gray-500 mt-8">
            {/* find my profile on Github: */}
          </p>

          <a
            href="https://github.com/malikyakub"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono hover:opacity-80 transition-opacity inline-block"
          >
            <span className="text-purple-500">const</span>{" "}
            <span className="text-blue-400">githubLink</span>{" "}
            <span className="text-gray-400">= </span>{" "}
            <span className="text-green-400">
              <span className="hidden sm:inline">
                &quot;https://github.com/malikyakub&quot;
              </span>
              <span className="sm:hidden">
                &quot;https://github.com/
                <br />
                malikyakub&quot;
              </span>
            </span>
          </a>
        </div>
        <div className="hidden lg:flex lg:w-[55%] lg:flex-col lg:items-start">
          <AnimatedCodeDisplay />
        </div>
      </div>
    </div>
  );
}
