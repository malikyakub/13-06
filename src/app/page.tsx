import AnimatedTitle from "@/components/AnimatedTitle";
import GradientDots from "@/components/GradientDots";

export default function Home() {
  return (
    <>
      <GradientDots />
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="flex flex-col items-start gap-2">
          <p className="text-gray-400">Hi all. I am</p>
          <h1 className="text-6xl font-bold">Malik Yakub</h1>
          <AnimatedTitle />
        </div>
      </div>
    </>
  );
}
