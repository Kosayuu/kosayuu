import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-12 sm:py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-10">
          关于
        </h1>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
          <div className="shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-neutral-200 shadow-md ring-1 ring-neutral-200/80">
            <Image
              src="/images/about.svg"
              alt=""
              width={176}
              height={176}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1 space-y-5 text-neutral-600 leading-relaxed">
            <p className="text-base sm:text-lg">
              <span className="font-semibold text-neutral-800">Kosayuu</span>
              ，Senior UI Designer / Full Stack Developer，专注于产品体验与工程实现的结合。
            </p>
            <p>
              这里会陆续更新个人项目、设计案例与学习笔记，欢迎通过作品页了解更多。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
