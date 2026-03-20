'use client'; // Rechartsはブラウザで動くため必須です

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

// 1. グラフに表示するデータ
// 自分の人生の出来事に合わせて数値を調整してください
const data = [
  { age: 15, score: 70, event: '中学卒業' },
  { age: 18, score: 50, event: '高校卒業・浪人開始' },
  { age: 19, score: 100, event: '大学入学' },
  { age: 21, score: 70, event: 'コロナ禍' },
  { age: 25, score: 95, event: '大学卒業' },
  { age: 27, score: 95, event: 'スプーキーズに応募（現在）' },
];

const LifelineChart = () => {
  return (
    <div className="w-full h-full bg-white p-4 rounded-xl shadow-sm border">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          {/* 背景のグリッド線 */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
          
          {/* X軸：年齢 */}
          <XAxis 
            dataKey="age" 
            unit="歳" 
            tick={{ fill: '#666' }} 
            axisLine={{ stroke: '#ccc' }}
          />
          
          {/* Y軸：モチベーション（0〜100） */}
          <YAxis 
            domain={[0, 100]} 
            hide // 数値そのものより波形が大事なので隠してもOK
          />

          {/* ホバー時の説明パネル */}
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-slate-800 text-white p-3 rounded shadow-lg text-sm">
                    <p className="font-bold">{`${payload[0].payload.age}歳`}</p>
                    <p className="mt-1">{payload[0].payload.event}</p>
                  </div>
                );
              }
              return null;
            }}
          />

          {/* 基準線（中心線） */}
          <ReferenceLine y={50} stroke="#ddd" strokeDasharray="3 3" />

          {/* 折れ線本体 */}
          <Line
            type="monotone" // 滑らかな曲線にする
            dataKey="score"
            stroke="#3b82f6" // 青色
            strokeWidth={3}
            dot={{ r: 6, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 8 }}
            animationDuration={1500} // 表示時のアニメーション
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-center text-xs text-gray-400 mt-2">
        ※グラフの点にマウスを合わせると詳細が表示されます
      </p>
    </div>
  );
};

export default LifelineChart;