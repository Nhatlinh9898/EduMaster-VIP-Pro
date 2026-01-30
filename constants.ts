import { EducationLevel } from './types';

export const LEVEL_OPTIONS = [
  { value: EducationLevel.PRIMARY, label: "Tiểu học (Lớp 1 - 5)" },
  { value: EducationLevel.SECONDARY, label: "Trung học cơ sở (Lớp 6 - 9)" },
  { value: EducationLevel.HIGH_SCHOOL, label: "Trung học phổ thông (Lớp 10 - 12)" },
  { value: EducationLevel.UNIVERSITY, label: "Đại học / Cao đẳng" },
  { value: EducationLevel.MASTER, label: "Thạc sĩ (Master)" },
  { value: EducationLevel.PHD, label: "Tiến sĩ (PhD/Doctorate)" }
];

export const MAJOR_SUGGESTIONS = [
  // --- CÔNG NGHỆ THÔNG TIN & DỮ LIỆU ---
  "Khoa học Máy tính (Computer Science)",
  "Kỹ thuật Phần mềm (Software Engineering)",
  "Hệ thống thông tin (Information Systems)",
  "An toàn thông tin & An ninh mạng",
  "Mạng máy tính & Truyền thông dữ liệu",
  "Trí tuệ nhân tạo (AI) & Khoa học dữ liệu",
  "Kỹ thuật Máy tính (Computer Engineering)",
  "Thiết kế Đồ họa & Đa phương tiện",
  "Công nghệ Game & Thực tế ảo (VR/AR)",
  "Internet vạn vật (IoT)",
  "Tin học ứng dụng",

  // --- KỸ THUẬT & CÔNG NGHỆ ---
  "Kỹ thuật Cơ khí & Cơ điện tử",
  "Kỹ thuật Điện - Điện tử",
  "Kỹ thuật Điều khiển & Tự động hóa",
  "Kỹ thuật Ô tô",
  "Kỹ thuật Hàng không & Vũ trụ",
  "Kỹ thuật Tàu thủy & Thiết bị nổi",
  "Kỹ thuật Xây dựng (Dân dụng & Công nghiệp)",
  "Kỹ thuật Cầu đường",
  "Kỹ thuật Trắc địa & Bản đồ",
  "Kỹ thuật Hóa học & Lọc hóa dầu",
  "Kỹ thuật Môi trường",
  "Kỹ thuật Vật liệu & Công nghệ Nano",
  "Kỹ thuật Nhiệt - Lạnh",
  "Kỹ thuật Dệt may & Thời trang",
  "Công nghệ In & Truyền thông",
  "Công nghệ Thực phẩm",
  "Kỹ thuật Y sinh",
  "Kỹ thuật Hạt nhân",
  "Kỹ thuật Hệ thống công nghiệp",
  "Quản lý Công nghiệp",
  "Kiến trúc & Quy hoạch đô thị",
  "Thiết kế Nội thất",
  "Kiến trúc Cảnh quan",

  // --- KINH TẾ & QUẢN LÝ ---
  "Quản trị Kinh doanh (MBA)",
  "Marketing & Digital Marketing",
  "Tài chính - Ngân hàng",
  "Kế toán & Kiểm toán",
  "Kinh doanh Quốc tế",
  "Thương mại điện tử (E-commerce)",
  "Kinh tế Quốc tế",
  "Kinh tế Phát triển",
  "Kinh tế Đầu tư",
  "Quản trị Nhân lực (HRM)",
  "Quản trị Khách sạn",
  "Quản trị Dịch vụ Du lịch & Lữ hành",
  "Quản trị Nhà hàng & Dịch vụ ăn uống",
  "Quản trị Sự kiện & Giải trí",
  "Logistics & Quản lý Chuỗi cung ứng",
  "Bất động sản",
  "Toán Kinh tế & Thống kê kinh doanh",
  "Hệ thống thông tin quản lý (MIS)",

  // --- Y DƯỢC & SỨC KHỎE ---
  "Y Đa khoa",
  "Răng - Hàm - Mặt",
  "Dược học",
  "Y học Cổ truyền",
  "Y học Dự phòng",
  "Điều dưỡng",
  "Kỹ thuật Xét nghiệm Y học",
  "Kỹ thuật Hình ảnh Y học",
  "Phục hồi chức năng",
  "Dinh dưỡng học",
  "Y tế Công cộng",
  "Quản lý Bệnh viện",
  "Khúc xạ nhãn khoa",
  "Hộ sinh",

  // --- KHOA HỌC XÃ HỘI & NHÂN VĂN ---
  "Tâm lý học",
  "Xã hội học",
  "Công tác xã hội",
  "Báo chí học",
  "Truyền thông đa phương tiện",
  "Quan hệ công chúng (PR)",
  "Quan hệ Quốc tế",
  "Đông phương học",
  "Hàn Quốc học",
  "Nhật Bản học",
  "Trung Quốc học",
  "Việt Nam học",
  "Ngôn ngữ Anh",
  "Ngôn ngữ Pháp",
  "Ngôn ngữ Đức",
  "Ngôn ngữ Nga",
  "Ngôn ngữ Tây Ban Nha",
  "Ngôn ngữ Italia",
  "Văn học",
  "Lịch sử",
  "Địa lý học",
  "Triết học",
  "Chính trị học",
  "Quản lý Nhà nước",
  "Lưu trữ học & Quản trị văn phòng",
  "Nhân học",
  "Văn hóa học",
  "Quốc tế học",

  // --- LUẬT ---
  "Luật học (Luật Dân sự, Hình sự...)",
  "Luật Kinh tế",
  "Luật Thương mại Quốc tế",
  "Luật Hành chính",

  // --- SƯ PHẠM & GIÁO DỤC ---
  "Sư phạm Toán",
  "Sư phạm Ngữ Văn",
  "Sư phạm Tiếng Anh",
  "Sư phạm Vật lý",
  "Sư phạm Hóa học",
  "Sư phạm Sinh học",
  "Sư phạm Lịch sử",
  "Sư phạm Địa lý",
  "Giáo dục Tiểu học",
  "Giáo dục Mầm non",
  "Giáo dục Đặc biệt",
  "Giáo dục Công dân",
  "Giáo dục Thể chất",
  "Giáo dục Quốc phòng - An ninh",
  "Quản lý Giáo dục",
  "Tâm lý học Giáo dục",

  // --- NÔNG - LÂM - NGƯ NGHIỆP ---
  "Công nghệ Sinh học",
  "Thú y",
  "Chăn nuôi",
  "Nông học (Trồng trọt)",
  "Bảo vệ thực vật",
  "Lâm nghiệp",
  "Quản lý Tài nguyên rừng",
  "Nuôi trồng Thủy sản",
  "Quản lý Đất đai",
  "Phát triển Nông thôn",

  // --- NGHỆ THUẬT & SÁNG TẠO ---
  "Thiết kế Thời trang",
  "Thiết kế Công nghiệp",
  "Hội họa (Mỹ thuật)",
  "Điêu khắc",
  "Gốm",
  "Thanh nhạc",
  "Biểu diễn nhạc cụ (Piano, Guitar, Violin...)",
  "Sáng tác âm nhạc",
  "Chỉ huy âm nhạc",
  "Diễn viên Kịch - Điện ảnh",
  "Đạo diễn Điện ảnh - Truyền hình",
  "Quay phim",
  "Biên kịch",
  "Múa & Biên đạo múa",
  "Lý luận phê bình Văn học Nghệ thuật",

  // --- KHOA HỌC CƠ BẢN ---
  "Toán học",
  "Vật lý học",
  "Hóa học",
  "Sinh học",
  "Khoa học Trái đất",
  "Hải dương học",
  "Khí tượng thủy văn"
];

export const INSTITUTION_TYPES = [
  "Đào tạo Đại trà (Tiêu chuẩn)",
  "Chất lượng cao / Tiên tiến",
  "Hệ Quốc tế / Liên kết",
  "Vừa học vừa làm / Tại chức",
  "Nghiên cứu chuyên sâu (Academic Track)",
  "Ứng dụng thực hành (Vocational Track)"
];

export const DETAIL_DEPTHS = [
  "Tổng quan (Danh sách môn chính)",
  "Chi tiết (Bao gồm số tín chỉ/tiết học)",
  "Lộ trình theo kỳ học (Semester plan)",
  "Phân tích chuyên sâu (Mô tả nội dung môn)",
  "So sánh với chương trình quốc tế"
];

export const OUTPUT_FORMATS = [
  "Bảng thống kê (Table)",
  "Danh sách phân cấp (Bulleted List)",
  "Lộ trình từng bước (Step-by-step)",
  "Bài phân tích chuyên gia (Essay)"
];

export const SYSTEM_PROMPT_TEMPLATE = `
Bạn là "Thien Master AI" - Một kiến trúc sư giáo dục và chuyên gia tư vấn học thuật hàng đầu thế giới.
Nhiệm vụ của bạn là lập thống kê chi tiết các môn học và lộ trình đào tạo dựa trên yêu cầu người dùng.

THÔNG TIN ĐẦU VÀO:
- Cấp học: {{level}}
- Ngành/Lĩnh vực: {{major}}
- Hệ đào tạo: {{institutionType}}
- Mức độ chi tiết: {{detailDepth}}
- Trọng tâm/Ghi chú thêm: {{focusTopic}}
- Định dạng mong muốn: {{outputFormat}}

YÊU CẦU ĐẦU RA:
1. Ngôn ngữ: Tiếng Việt 100%, văn phong trang trọng, học thuật, chính xác.
2. Cấu trúc:
   - Mở đầu: Tổng quan về chương trình học và mục tiêu đào tạo.
   - Thân bài: Liệt kê các môn học theo phân loại (Đại cương, Cơ sở ngành, Chuyên ngành, Tốt nghiệp) hoặc theo Lớp (nếu là phổ thông).
   - Nếu người dùng chọn "Bảng", hãy dùng Markdown Table.
   - Nếu người dùng chọn "Lộ trình", hãy chia theo Kỳ 1, Kỳ 2...
   - Kết luận: Lời khuyên cho người học để đạt kết quả xuất sắc (GPA cao/Học bạ đẹp).
3. Đảm bảo dữ liệu sát với thực tế giáo dục tại Việt Nam (nếu không nói rõ quốc gia) hoặc chuẩn quốc tế (nếu là hệ liên kết).
4. Sử dụng icon (📚, 🎓, 💡) để trình bày đẹp mắt.

Hãy thể hiện sự uyên bác và thấu hiểu sâu sắc nhu cầu người học.
`;