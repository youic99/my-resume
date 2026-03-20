// app/page.tsx
import LifelineChart from './components/LifelineChart';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8 font-sans">
      {/* 1. Header */}
      <header className="mb-12 border-b pb-8">
        <h1 className="text-4xl font-bold">谷 陽一朗</h1>
        <p className="text-xl text-gray-600">Frontend Engineer Candidate</p>
      </header>

      {/* 2. 16Personalities */}
      <section className="mb-12 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Personality: 冒険家 (ISFP-T)</h2>
        <p>診断結果のURL: [ここにリンク]</p>
      </section>

      {/* 3. Lifeline Chart (クライアントコンポーネントとして作成) */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Lifeline Chart</h2>
        <div className="h-[300px] w-full">
          <LifelineChart />
        </div>
      </section>

      {/* 4. Resume Details */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold border-l-4 border-blue-500 pl-2 mb-4">Education</h3>
          <p>〇〇大学 卒業 (20XX年)</p>
        </div>
        <div>
          <h3 className="font-bold border-l-4 border-blue-500 pl-2 mb-4">Vision</h3>
          <p>「技術で人を驚かせる」エンジニアを目指しています。</p>
        </div>
      </section>
    </main>
  );
}