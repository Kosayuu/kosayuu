import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center overflow-hidden">
      {/* 背景图 + 遮罩 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.svg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-neutral-900/50" aria-hidden />
      </div>

      <div className="relative z-10 max-w-2xl text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-sm">
          Hello, <span className="text-amber-300">Kosayuu</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-neutral-200 font-light">
          Senior UI Designer / Full Stack Developer
        </p>
        <p className="mt-2 text-neutral-300/90 text-sm sm:text-base">
          产品体验与工程实现
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/works"
            className="inline-flex items-center px-7 py-3.5 bg-white text-neutral-900 rounded-lg font-semibold hover:bg-neutral-100 transition-colors shadow-lg shadow-black/20"
          >
            查看作品
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-7 py-3.5 border border-white/60 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            关于我
          </Link>
        </div>
      </div>
    </main>
  );
}
