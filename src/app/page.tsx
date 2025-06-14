import AnimatedTitle from "../../components/AnimatedTitle";
import GradientDots from "../../components/GradientDots";

export default function Home() {
  return (
    <>
      <GradientDots />
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="flex flex-col items-start gap-2">
          <p className="text-gray-400">Hi all. I am</p>
          <h1 className="text-6xl font-bold">Malik Yakub</h1>
          <AnimatedTitle />
          <p className="font-mono text-gray-500 mt-8">
            // find my profile on Github:
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
                "https://github.com/malikyakub"
              </span>
              <span className="sm:hidden">
                "https://github.com/
                <br />
                malikyakub"
              </span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
