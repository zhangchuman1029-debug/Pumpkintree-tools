export default function Page() {
  const tools = [
    { 
      title: "AI 知识点提取", 
      desc: "上传 PDF 或图片，AI 自动为你提炼核心考点，生成复习讲义。", 
      status: "运行中", 
      color: "from-orange-400 to-orange-600", 
      active: true,
      url: "https://www.pumpkintree.online", // <-- 请确保此处填入真实的子域名
      icon: "🚀"
    },
    { 
      title: "格式转换器", 
      desc: "支持 PDF、Word、Markdown 互转，保持排版无损，秒级处理。", 
      status: "预告", 
      color: "from-slate-400 to-slate-500", 
      active: false,
      url: "#",
      icon: "🔄"
    },
    { 
      title: "翻译助手", 
      desc: "基于 DeepSeek 高级语境理解，提供比传统翻译更地道的学术/技术翻译。", 
      status: "预告", 
      color: "from-slate-400 to-slate-500", 
      active: false,
      url: "#",
      icon: "🌍"
    },
    { 
      title: "表情包生成", 
      desc: "输入一段文字，AI 自动生成风格独特的原创表情包，开启斗图模式。", 
      status: "预告", 
      color: "from-slate-400 to-slate-500", 
      active: false,
      url: "#",
      icon: "🎨"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 顶部炫彩条 */}
      <div className="h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />

      {/* Hero 区域 */}
      <div className="max-w-5xl mx-auto pt-20 pb-12 px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
            🎃 Pumpkintree Online
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            不仅仅是工具 <br />
            <span className="text-orange-500">更是效率的进化</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">
            基于 DeepSeek AI 驱动，为你的学习与开发提供最轻量、最智能的解决方案。
          </p>
        </div>
      </div>

      {/* 工具列表 */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, i) => (
            <div key={i} className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tool.color} shadow-lg shadow-orange-100 flex items-center justify-center text-2xl`}>
                   {/* 这里也可以直接显示 tool.icon 如果背景颜色不需要太深 */}
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-lg ${tool.active ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {tool.status}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{tool.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8">{tool.desc}</p>
              
              {tool.active ? (
                <a 
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-4 bg-gray-900 text-white rounded-2xl font-bold text-center hover:bg-orange-600 transition-all active:scale-95 shadow-md hover:shadow-orange-200"
                >
                  {tool.icon} 立即进入 →
                </a>
              ) : (
                <div className="w-full py-4 bg-gray-100 text-gray-400 rounded-2xl font-bold text-center cursor-not-allowed">
                  ✨ 即将上线
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center py-12 text-gray-400 text-sm border-t border-gray-100">
        © 2026 南瓜树工作室 | Powered by Vercel
      </footer>
    </div>
  );
}