import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT_TEMPLATE } from "../constants";
import { FormData } from "../types";

export const generateEducationPlan = async (formData: FormData): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("Vui lòng cấu hình API Key để sử dụng tính năng này.");
  }

  const ai = new GoogleGenAI({ apiKey });

  // Construct the prompt by replacing placeholders
  let prompt = SYSTEM_PROMPT_TEMPLATE
    .replace('{{level}}', formData.level)
    .replace('{{major}}', formData.major)
    .replace('{{institutionType}}', formData.institutionType)
    .replace('{{detailDepth}}', formData.detailDepth)
    .replace('{{focusTopic}}', formData.focusTopic || "Không có ghi chú thêm")
    .replace('{{outputFormat}}', formData.outputFormat);

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    });

    return response.text || "Xin lỗi, không thể tạo nội dung lúc này. Vui lòng thử lại.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Đã có lỗi xảy ra khi kết nối với AI. Vui lòng kiểm tra API Key hoặc thử lại sau.");
  }
};