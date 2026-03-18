export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16 sm:px-10">
        <section className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            个人介绍
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            你好，我在哪？
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
            一个 i 人的精神角落。
          </p>

          <div className="mt-6 grid gap-4 rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:grid-cols-2">
            <div className="space-y-1">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                名字
              </div>
              <div className="text-base font-semibold text-zinc-900">
                Mitra
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                正在做的事
              </div>
              <div className="text-base text-zinc-800">
                正在学习独立开发
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
