import Link from "next/link";

export default function Home() {
  return (
    // <main> 相当于 Figma 的顶层 Frame
    // min-h-screen: 高度至少占满一屏 (Height: Fill)
    // flex, items-center, justify-center: 典型的居中布局 (Auto Layout Center-Center)
    // bg-neutral-50: 极浅的灰色背景
    <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 p-8">
      
      {/* 这是一个容器，相当于一个 Group */}
      <div className="max-w-2xl text-center space-y-6">
        
        {/* 标题 */}
        <h1 className="text-6xl font-bold tracking-tight text-neutral-900">
          Hello, <span className="text-blue-600">Kosayuu</span>
        </h1>
        
        {/* 副标题 */}
        <p className="text-xl text-neutral-500 font-light">
          Senior UI Designer / Full Stack Developer
        </p>

        {/* 按钮容器 */}
        <div className="pt-8">
          <Link
            href="/works"
            className="inline-block px-8 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-700 transition-colors"
          >
            View My Works
          </Link>
        </div>

      </div>
    </main>
  );
}