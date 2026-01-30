import React, { useState } from 'react';
import Header from './components/Header';
import VoiceStudio from './components/VoiceStudio';
import { generateEducationPlan } from './services/geminiService';
import { FormData, EducationLevel } from './types';
import { LEVEL_OPTIONS, MAJOR_SUGGESTIONS, INSTITUTION_TYPES, DETAIL_DEPTHS, OUTPUT_FORMATS } from './constants';

// Simple markdown renderer for the result
const MarkdownView: React.FC<{ content: string }> = ({ content }) => {
  // Very basic parser: Bold, H1, H2, List, Table simulation
  // In a real production app, use 'react-markdown'
  const lines = content.split('\n');
  return (
    <div className="font-sans text-gray-200 leading-relaxed space-y-4">
      {lines.map((line, idx) => {
        if (line.startsWith('### ')) return <h3 key={idx} className="text-xl font-bold text-royal-gold mt-6 border-b border-gray-700 pb-2">{line.replace('### ', '')}</h3>;
        if (line.startsWith('## ')) return <h2 key={idx} className="text-2xl font-bold text-neon-cyan mt-8 mb-4">{line.replace('## ', '')}</h2>;
        if (line.startsWith('# ')) return <h1 key={idx} className="text-3xl font-bold text-white mb-6 text-center">{line.replace('# ', '')}</h1>;
        if (line.startsWith('- ') || line.startsWith('* ')) return <li key={idx} className="ml-4 list-disc text-gray-300 pl-2 marker:text-royal-gold">{line.substring(2)}</li>;
        if (line.startsWith('|')) {
            // Basic table row handling
            const cells = line.split('|').filter(c => c.trim() !== '');
            if (line.includes('---')) return null; // Skip separator line
            return (
                <div key={idx} className="grid grid-flow-col gap-2 p-2 border-b border-gray-700 hover:bg-gray-800/50">
                    {cells.map((cell, cIdx) => (
                        <span key={cIdx} className="block text-sm">{cell.trim()}</span>
                    ))}
                </div>
            )
        }
        return <p key={idx} className="text-base text-gray-300">{line}</p>;
      })}
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    level: EducationLevel.UNIVERSITY,
    major: '',
    institutionType: INSTITUTION_TYPES[0],
    detailDepth: DETAIL_DEPTHS[0],
    focusTopic: '',
    outputFormat: OUTPUT_FORMATS[0]
  });

  const handleSubmit = async () => {
    if (!formData.major && formData.level !== EducationLevel.PRIMARY) {
      alert("Vui lòng nhập hoặc chọn Ngành/Lĩnh vực nghiên cứu.");
      return;
    }
    setLoading(true);
    setResult('');
    try {
      const text = await generateEducationPlan(formData);
      setResult(text);
    } catch (error: any) {
      setResult(`ERROR: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1531297420497-213dc6936301?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed bg-center text-white pb-20">
      <div className="min-h-screen w-full bg-black/80 backdrop-blur-sm overflow-y-auto">
        <Header />

        <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: INPUT CONTROL PANEL */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 rounded-2xl shadow-2xl border-t border-royal-blue/50 sticky top-4">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-gray-700 pb-4">
                <span className="text-neon-cyan">⚡</span> THIẾT LẬP THÔNG SỐ
              </h2>

              <div className="space-y-5">
                {/* Field 1: Level */}
                <div className="space-y-1">
                  <label className="text-xs text-royal-gold uppercase font-semibold">1. Cấp Học / Trình Độ</label>
                  <select 
                    value={formData.level}
                    onChange={(e) => updateField('level', e.target.value)}
                    className="w-full bg-black/60 border border-gray-600 rounded-lg p-3 text-sm focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all"
                  >
                    {LEVEL_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                {/* Field 2: Major */}
                <div className="space-y-1">
                  <label className="text-xs text-royal-gold uppercase font-semibold">2. Ngành / Ban / Khoa</label>
                  <input 
                    type="text" 
                    list="major-suggestions"
                    value={formData.major}
                    onChange={(e) => updateField('major', e.target.value)}
                    placeholder="VD: Công nghệ thông tin, Ban A..."
                    className="w-full bg-black/60 border border-gray-600 rounded-lg p-3 text-sm focus:border-neon-cyan outline-none"
                  />
                  <datalist id="major-suggestions">
                    {MAJOR_SUGGESTIONS.map((s, i) => <option key={i} value={s} />)}
                  </datalist>
                </div>

                {/* Field 3: Institution Type */}
                <div className="space-y-1">
                  <label className="text-xs text-royal-gold uppercase font-semibold">3. Hệ Đào Tạo</label>
                  <select 
                    value={formData.institutionType}
                    onChange={(e) => updateField('institutionType', e.target.value)}
                    className="w-full bg-black/60 border border-gray-600 rounded-lg p-3 text-sm focus:border-neon-cyan outline-none"
                  >
                    {INSTITUTION_TYPES.map((t, i) => <option key={i} value={t}>{t}</option>)}
                  </select>
                </div>

                {/* Field 4: Detail Depth */}
                <div className="space-y-1">
                  <label className="text-xs text-royal-gold uppercase font-semibold">4. Độ Chi Tiết</label>
                  <select 
                    value={formData.detailDepth}
                    onChange={(e) => updateField('detailDepth', e.target.value)}
                    className="w-full bg-black/60 border border-gray-600 rounded-lg p-3 text-sm focus:border-neon-cyan outline-none"
                  >
                    {DETAIL_DEPTHS.map((t, i) => <option key={i} value={t}>{t}</option>)}
                  </select>
                </div>

                {/* Field 5: Focus Topic (Custom) */}
                <div className="space-y-1">
                  <label className="text-xs text-royal-gold uppercase font-semibold">5. Yêu cầu đặc biệt (Optional)</label>
                  <textarea 
                    value={formData.focusTopic}
                    onChange={(e) => updateField('focusTopic', e.target.value)}
                    placeholder="VD: Tập trung vào các môn AI, hoặc so sánh với giáo trình Mỹ..."
                    rows={2}
                    className="w-full bg-black/60 border border-gray-600 rounded-lg p-3 text-sm focus:border-neon-cyan outline-none resize-none"
                  />
                </div>

                {/* Field 6: Format */}
                <div className="space-y-1">
                  <label className="text-xs text-royal-gold uppercase font-semibold">6. Định dạng kết quả</label>
                  <div className="grid grid-cols-2 gap-2">
                    {OUTPUT_FORMATS.map((fmt) => (
                      <button
                        key={fmt}
                        onClick={() => updateField('outputFormat', fmt)}
                        className={`text-xs p-2 rounded border transition-all ${formData.outputFormat === fmt ? 'bg-royal-blue border-neon-cyan text-white' : 'bg-transparent border-gray-700 text-gray-400 hover:border-gray-500'}`}
                      >
                        {fmt.split(' (')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full mt-6 bg-gradient-to-r from-royal-blue to-neon-cyan text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-neon-cyan/50 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? 'ĐANG PHÂN TÍCH...' : 'KHỞI TẠO DỮ LIỆU'}
                    {!loading && <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                  </span>
                  {!loading && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>}
                </button>

              </div>
            </div>
          </div>

          {/* RIGHT: RESULT DISPLAY */}
          <div className="lg:col-span-8">
            <div className="glass-panel min-h-[600px] rounded-2xl p-8 relative flex flex-col">
              {loading && (
                <div className="absolute inset-0 bg-black/80 z-20 flex flex-col items-center justify-center rounded-2xl backdrop-blur-sm">
                  <div className="w-16 h-16 border-4 border-royal-blue border-t-neon-cyan rounded-full animate-spin mb-4"></div>
                  <p className="text-neon-cyan font-mono animate-pulse">Thien Master AI is thinking...</p>
                  <p className="text-gray-500 text-sm mt-2">Đang truy xuất dữ liệu giáo dục...</p>
                </div>
              )}

              {!result && !loading && (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-500 opacity-50">
                  <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  <p className="text-xl font-light">Sẵn sàng khởi tạo lộ trình học tập</p>
                </div>
              )}

              {result && (
                <div className="animate-fade-in-up">
                  <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-6">
                    <h3 className="text-2xl font-serif text-white">KẾT QUẢ PHÂN TÍCH</h3>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/50">Success</span>
                    </div>
                  </div>
                  
                  <div className="prose prose-invert max-w-none mb-8">
                    <MarkdownView content={result} />
                  </div>

                  {/* VOICE STUDIO INTEGRATION */}
                  <div className="border-t border-gray-700 pt-6">
                    <VoiceStudio textToRead={result.replace(/[#*\-|_]/g, ' ')} />
                  </div>
                </div>
              )}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default App;