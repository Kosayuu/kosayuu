import Link from "next/link";
import Image from "next/image";

// 占位作品数据，后续可替换为真实项目或从 CMS 获取
const works = [
  {
    id: "1",
    title: "项目示例 A",
    desc: "UI 设计与前端实现的综合案例，展示从需求到上线的完整流程。",
    tags: ["UI 设计", "React", "TypeScript"],
    href: "#",
    image: "/images/work-1.svg",
  },
  {
    id: "2",
    title: "项目示例 B",
    desc: "某产品的设计系统与组件库建设，提升团队协作与开发效率。",
    tags: ["设计系统", "Figma", "Tailwind"],
    href: "#",
    image: "/images/work-2.svg",
  },
  {
    id: "3",
    title: "项目示例 C",
    desc: "全栈应用：从数据库设计到 API 与前端的一体化实现。",
    tags: ["全栈", "Next.js", "Node.js"],
    href: "#",
    image: "/images/work-3.svg",
  },
];

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-12 sm:py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            作品
          </h1>
          <p className="mt-2 text-neutral-500 max-w-xl">
            精选项目与设计案例，可点击了解更多。
          </p>
        </header>

        <ul className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <li key={w.id}>
              <Link
                href={w.href}
                className="group block rounded-xl bg-white border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-neutral-300 transition-all duration-200"
              >
                <div className="aspect-[800/520] relative bg-neutral-100 overflow-hidden">
                  <Image
                    src={w.image}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-neutral-900 group-hover:text-neutral-700">
                    {w.title}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-500 line-clamp-2">
                    {w.desc}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {w.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
