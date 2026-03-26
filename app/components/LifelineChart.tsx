'use client';

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

const data = [
  { age: 15, score: 70, event: '高校入学。軽音部に入りバンド活動にのめり込む' },
  { age: 18, score: 50, event: '高校卒業・浪人開始。ひたすら勉強に打ち込む' },
  { age: 19, score: 100, event: '大学入学。アカペラサークルに入り、仲間と共に音楽活動に励む。' },
  { age: 21, score: 70, event: 'コロナ禍。アカペラサークルの活動ができなくなる' },
  { age: 25, score: 95, event: '哲学の研究の成果を提出し、大学卒業。少し自分を見つめ直す期間に入る。' },
  { age: 27, score: 95, event: 'スプーキーズに応募（現在）' },
];

const LifelineChart = () => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
          
          <XAxis 
            dataKey="age" 
            unit="歳" 
            tick={{ fill: '#94a3b8', fontSize: 12 }} 
            axisLine={{ stroke: '#334155' }}
            tickLine={{ stroke: '#334155' }}
          />
          
          <YAxis 
            domain={[0, 100]} 
            hide
          />

          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border border-border bg-card px-4 py-3 shadow-xl">
                    <p className="font-bold text-primary">{`${payload[0].payload.age}歳`}</p>
                    <p className="mt-1 text-sm text-foreground">{payload[0].payload.event}</p>
                  </div>
                );
              }
              return null;
            }}
          />

          <ReferenceLine y={50} stroke="#334155" strokeDasharray="3 3" />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#38bdf8"
            strokeWidth={3}
            dot={{ r: 6, fill: '#38bdf8', strokeWidth: 2, stroke: '#1e293b' }}
            activeDot={{ r: 8, fill: '#22d3ee' }}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-center text-xs text-muted-foreground mt-4">
        グラフの点にマウスを合わせると詳細が表示されます
      </p>
    </div>
  );
};

export default LifelineChart;
