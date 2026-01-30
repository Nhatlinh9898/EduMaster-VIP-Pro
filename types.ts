export enum EducationLevel {
  PRIMARY = 'Tiểu học (Lớp 1-5)',
  SECONDARY = 'THCS (Lớp 6-9)',
  HIGH_SCHOOL = 'THPT (Lớp 10-12)',
  UNIVERSITY = 'Đại học',
  MASTER = 'Thạc sĩ',
  PHD = 'Tiến sĩ'
}

export interface FormData {
  level: string;
  major: string; // Ngành học hoặc Ban (KHTN/KHXH)
  institutionType: string; // Hệ đào tạo (Đại trà, CLC, Quốc tế)
  detailDepth: string; // Mức độ chi tiết
  focusTopic: string; // Chủ đề trọng tâm (User input)
  outputFormat: string; // Bảng, Danh sách, Lộ trình
}

export interface GenerationResult {
  content: string;
  timestamp: number;
}

export interface VoiceConfig {
  voice: SpeechSynthesisVoice | null;
  rate: number;
  pitch: number;
  volume: number;
}