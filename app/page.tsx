import LifelineChart from './components/LifelineChart';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 bg-slate-50 min-h-screen text-slate-800">
      
      {/* --- ヘッダー・基本情報 --- */}
      <header className="bg-white p-8 rounded-2xl shadow-sm mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          {/* プロフィール画像 */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-50">
            <Image
              src="/profile.jpeg" // publicフォルダ直下を参照します
              alt="谷 陽一朗の顔写真"
              fill // 親要素いっぱいに広げる
              className="object-cover" // アスペクト比を維持して切り抜き
              priority // ページの最重要要素として優先的に読み込む
            />
          </div>

          <div>
            <h1 className="text-4xl font-extrabold text-slate-900">谷 陽一朗</h1>
            <p className="text-blue-600 font-medium text-lg">Web開発エンジニア志望 / アルバイト応募</p>
            <div className="mt-4 space-y-1 text-slate-600">
              <p>📧 youic999@gmail.com</p>
              <p>📍 京都市内（出社可能）</p>
            </div>
          </div>
        </div>
        
        {/* 16Personalities 結果 */}
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 text-center">
          <p className="text-sm text-purple-600 font-bold mb-1">16 Personalities</p>
          <h2 className="text-2xl font-bold text-purple-900 italic">「論理学者」</h2>
          <p className="text-xs text-purple-700 mt-2 italic underline decoration-dotted">
            <a href="https://www.16personalities.com/ja/%E7%B5%90%E6%9E%9C/intp-a/m/2vd3sw67p" target="_blank" rel="noopener noreferrer">結果を詳しく見る →</a>
          </p>
        </div>
      </header>

      {/* --- メインコンテンツ：2カラム --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 左側：経歴・スキル (2/3の幅) */}
        <div className="md:col-span-2 space-y-8">
          
          {/* ライフラインチャート */}
          <section className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full mr-3"></span>
              ライフラインチャート
            </h3>
            <div className="h-[350px]">
              <LifelineChart />
            </div>
          </section>

          {/* 自己PR・意気込み */}
          <section className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full mr-3"></span>
              応募への意気込み
            </h3>
            <p className="leading-relaxed text-slate-700">
              Web開発の面白さに目覚め、独学でNext.jsを用いたポートフォリオ作成に挑戦しています。
              スプーキーズ様の技術力の高さと遊び心のある社風に惹かれ、「自分もこの環境で成長したい、貢献したい」と強く思い応募いたしました。
              未経験ではありますが、自走力とキャッチアップの速さを武器に、一日も早く戦力になれるよう努めます。
            </p>
          </section>
        </div>

        {/* 右側：サイドバー的な情報 (1/3の幅) */}
        <div className="space-y-8">
          {/* 学歴 */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-blue-500">
            <h3 className="font-bold text-lg mb-4 text-slate-900">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-slate-400 font-mono">2017.04</p>
                <p className="font-bold text-sm">福岡県立筑紫丘高校 理数科 卒業</p>
                <p className="text-xs text-slate-400 font-mono">2024.04</p>
                <p className="font-bold text-sm">京都大学 総合人間学部 卒業</p>
              </div>
            </div>
          </section>

          {/* 学習中のスキル */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-emerald-500">
            <h3 className="font-bold text-lg mb-4 text-slate-900">Skills</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Git/GitHub'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-medium border border-emerald-100">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* リンク */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-slate-700">
            <h3 className="font-bold text-lg mb-4 text-slate-900">Links</h3>
            <div className="space-y-2 text-sm text-blue-600 underline">
              <p><a href="https://github.com/youic99/my-resume" target="_blank" rel="noopener noreferrer">GitHub (Source Code)</a></p>
            </div>
          </section>
        </div>
      </div>

      <footer className="mt-12 text-center text-slate-400 text-sm">
        <p>&copy; 2026 Yoichiro Tani. Built with Next.js & Recharts.</p>
      </footer>
    </main>
  );
}