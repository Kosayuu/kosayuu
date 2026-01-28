import Link from "next/link";

// 占位作品数据，后续可替换为真实项目或从 CMS 获取
const works = [
  {
    id: "1",
    title: "项目示例 A",
    desc: "UI 设计与前端实现的综合案例，展示从需求到上线的完整流程。",
    tags: ["UI 设计", "React", "TypeScript"],
    href: "#",
  },
  {
    id: "2",
    title: "项目示例 B",
    desc: "某产品的设计系统与组件库建设，提升团队协作与开发效率。",
    tags: ["设计系统", "Figma", "Tailwind"],
    href: "#",
  },
  {
    id: "3",
    title: "项目示例 C",
    desc: "全栈应用：从数据库设计到 API 与前端的一体化实现。",
    tags: ["全栈", "Next.js", "Node.js"],
    href: "#",
  },
];

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-12 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          作品
        </h1>
        <p className="mt-2 text-neutral-500">
          精选项目与设计案例，可点击了解更多。
        </p>

        <ul className="mt-10 space-y-6">
          {works.map((w) => (
            <li key={w.id}>
              <Link
                href={w.href}
                className="block rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <h2 className="text-xl font-semibold text-neutral-900">
                  {w.title}
                </h2>
                <p className="mt-2 text-neutral-500">{w.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {w.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
