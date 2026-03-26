import LifelineChart from "./components/LifelineChart";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            {/* Left: Profile Info */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-6">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-primary/30 md:h-32 md:w-32">
                  <Image
                    src="/profile.jpeg"
                    alt="谷 陽一朗の顔写真"
                    fill
                    sizes="(max-width: 768px) 96px, 128px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    谷 陽一朗
                  </h1>
                  <p className="mt-1 text-primary">Web Developer</p>
                </div>
              </div>

              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                プログラミングとWeb開発に情熱を注ぐエンジニア志望。
                ユーザー体験を重視した美しいインターフェースの構築に興味があります。
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  youic999@gmail.com
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  京都市内
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/youic99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Right: Personality Card */}
            <div className="rounded-xl border border-border bg-card p-6 lg:w-64">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                16 Personalities
              </p>
              <h2 className="mt-2 text-2xl font-bold text-accent">論理学者</h2>
              <p className="mt-1 text-sm text-muted-foreground">INTP-A</p>
              <a
                href="https://www.16personalities.com/ja/%E7%B5%90%E6%9E%9C/intp-a/m/2vd3sw67p"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                詳しく見る
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="border-t border-border px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="https://libre-mon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    開発中
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-foreground">
                    LibreMon
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    ISBNコードを入力すると、あなただけのアバター「リブレモン」が自動生成される読書管理アプリ。今後は読書量に応じてリブレモンが進化したり、ユーザー同士がリブレモンを通じてコミュニケーションできる機能を追加予定。
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>

            <a
              href="https://github.com/youic99/my-resume"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    公開中
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-foreground">
                    Portfolio Site
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    このサイトのソースコード。Next.jsとTailwind CSSで構築しています。
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Next.js", "Tailwind CSS", "Recharts"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Lifeline Chart Section */}
      <section className="border-t border-border px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Lifeline Chart
          </h2>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="h-[350px]">
              <LifelineChart />
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Education */}
      <section className="border-t border-border px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Education */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Education
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-mono text-xs text-muted-foreground">
                    2024.03
                  </p>
                  <p className="mt-1 font-medium text-foreground">
                    京都大学 総合人間学部 卒業
                  </p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <p className="font-mono text-xs text-muted-foreground">
                    2017.03
                  </p>
                  <p className="mt-1 font-medium text-foreground">
                    福岡県立筑紫丘高校 理数科 卒業
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML/CSS",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Git/GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-border px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            About
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            プログラミングやWeb開発の面白さに目覚め、これを仕事にしようと決意しました。
            独創性と遊び心のある環境で成長し、貢献したいと考えています。
            まだまだ拙い身ではありますが、自走力とキャッチアップの速さを武器に、
            一日も早く戦力になれるよう努めます。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2026 Yoichiro Tani. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}
