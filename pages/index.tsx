"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MONANIMALS = ["🦍", "🦧", "🐒", "🙈", "🙉", "🙊", "🐵"];

function randomMonanimal() {
  return MONANIMALS[Math.floor(Math.random() * MONANIMALS.length)];
}

function generateMockBlocks() {
  const blocks = [];
  for (let i = 0; i < 10; i++) {
    blocks.push({
      id: 1000 + i,
      validator: `0x${Math.random().toString(16).substring(2, 8)}`,
      txs: Math.floor(Math.random() * 20),
      time: new Date(Date.now() - i * 6000).toLocaleTimeString(),
      monanimal: randomMonanimal(),
    });
  }
  return blocks;
}

export default function Home() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    setBlocks(generateMockBlocks());
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        🧬 Monanimal Chain Zoo
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blocks.map((block) => (
          <Card key={block.id} className="rounded-2xl shadow-xl animate-fadeIn">
            <CardContent className="p-4">
              <div className="text-5xl text-center mb-2">{block.monanimal}</div>
              <div className="text-center text-xl font-semibold mb-1">
                Block #{block.id}
              </div>
              <div className="text-center text-sm text-gray-600 mb-2">
                Validator: {block.validator}
              </div>
              <div className="flex justify-between items-center text-sm">
                <Badge variant="outline">⏱ {block.time}</Badge>
                <Badge variant="secondary">📦 {block.txs} TXs</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
