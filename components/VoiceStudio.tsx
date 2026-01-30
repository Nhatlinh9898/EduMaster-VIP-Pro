import React, { useState, useEffect, useCallback } from 'react';
import { VoiceConfig } from '../types';

interface VoiceStudioProps {
  textToRead: string;
}

const VoiceStudio: React.FC<VoiceStudioProps> = ({ textToRead }) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [config, setConfig] = useState<VoiceConfig>({
    voice: null,
    rate: 1,
    pitch: 1,
    volume: 1
  });

  useEffect(() => {
    const loadVoices = () => {
      const available = window.speechSynthesis.getVoices();
      // Filter for Vietnamese voices first, then English as fallback
      const vnVoices = available.filter(v => v.lang.includes('vi'));
      const enVoices = available.filter(v => v.lang.includes('en'));
      const sortedVoices = [...vnVoices, ...enVoices];
      
      setVoices(sortedVoices);
      if (sortedVoices.length > 0 && !config.voice) {
        setConfig(prev => ({ ...prev, voice: sortedVoices[0] }));
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSpeak = useCallback(() => {
    if (!textToRead) return;
    
    // Stop current speech
    window.speechSynthesis.cancel();

    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textToRead);
    if (config.voice) utterance.voice = config.voice;
    utterance.rate = config.rate;
    utterance.pitch = config.pitch;
    utterance.volume = config.volume;

    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  }, [textToRead, config, isPlaying]);

  const handleDownload = () => {
    // Note: Browser TTS API does not natively support downloading as MP3 without a server-side recording mechanism.
    // For this frontend-only demo, we will simulate the action or provide a blob if possible (MediaRecorder from audio context is complex with TTS).
    // We will show a toast instead.
    alert("Tính năng tải xuống MP3 đang được phát triển trong phiên bản Server-Side (Yêu cầu Backend).");
  };

  return (
    <div className="mt-8 p-6 rounded-xl border border-neon-cyan/30 bg-gray-900/50 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-neon-cyan flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
          VOICE STUDIO PRO
        </h3>
        <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">TTS Engine v2.0</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Voice Selection */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Giọng Đọc (AI Voice)</label>
          <select 
            className="w-full bg-black/40 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:border-neon-cyan transition-colors"
            onChange={(e) => {
              const selected = voices.find(v => v.name === e.target.value);
              if (selected) setConfig({ ...config, voice: selected });
            }}
            value={config.voice?.name || ''}
          >
            {voices.map(v => (
              <option key={v.name} value={v.name}>
                {v.name} ({v.lang})
              </option>
            ))}
          </select>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
             <span className="text-xs text-gray-400 w-16">Tốc độ</span>
             <input 
               type="range" min="0.5" max="2" step="0.1" 
               value={config.rate}
               onChange={(e) => setConfig({...config, rate: parseFloat(e.target.value)})}
               className="w-full accent-neon-cyan h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
             />
             <span className="text-xs text-white w-8 text-right">{config.rate}x</span>
          </div>
          
          <div className="flex items-center gap-4">
             <span className="text-xs text-gray-400 w-16">Cao độ</span>
             <input 
               type="range" min="0.5" max="1.5" step="0.1" 
               value={config.pitch}
               onChange={(e) => setConfig({...config, pitch: parseFloat(e.target.value)})}
               className="w-full accent-royal-gold h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
             />
             <span className="text-xs text-white w-8 text-right">{config.pitch}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button 
          onClick={handleSpeak}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition-all ${isPlaying ? 'bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30' : 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan/30'}`}
        >
          {isPlaying ? (
            <>
              <span className="animate-pulse">●</span> Dừng Đọc
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Nghe Ngay
            </>
          )}
        </button>

        <button 
          onClick={handleDownload}
          className="flex-none px-6 py-3 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-white transition-all flex items-center justify-center"
          title="Tải MP3"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        </button>
      </div>
    </div>
  );
};

export default VoiceStudio;