"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function ConverterPage() {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('http://127.0.0.1:5001/convert', { method: 'POST', body: formData });
      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `南瓜树转换_${file.name.replace('.pdf', '')}.docx`;
        a.click();
      }
    } catch (err) {
      alert("服务暂时不可用，请确保后端已启动");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 简单的导航栏 */}
      <nav className="p-6">
        <Link href="/" className="text-orange-500 font-bold flex items-center gap-2">
          ← 返回首页
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto pt-12 px-6 text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-4">PDF 转 Word 转换器</h1>
        <p className="text-gray-500 mb-12">上传您的 PDF 文件，我们将为您还原为可编辑的 Word 文档。</p>

        {/* 核心转换区域 */}
        <div className="relative border-4 border-dashed border-gray-100 rounded-[2.5rem] p-16 hover:border-orange-200 transition-colors group">
          <input 
            type="file" 
            accept=".pdf" 
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
          />
          <div className="flex flex-col items-center">
            <div className={`w-24 h-24 rounded-3xl bg-orange-50 text-4xl flex items-center justify-center mb-6 transition-transform ${loading ? 'animate-spin' : 'group-hover:scale-110'}`}>
              {loading ? "⏳" : "📄"}
            </div>
            <p className="text-xl font-bold text-gray-800">
              {loading ? "正在处理中，请稍候..." : "拖拽文件至此 或 点击上传"}
            </p>
            <p className="text-gray-400 mt-2">支持最大 20MB 的 PDF 文件</p>
          </div>
        </div>

        {/* 提示信息 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
          <div>🛡️ 安全加密：文件处理后立即删除</div>
          <div>⚡ 极速转换：通常在 10 秒内完成</div>
          <div>✨ 完美还原：保留原有文字和排版</div>
        </div>
      </div>
    </div>
  );
}