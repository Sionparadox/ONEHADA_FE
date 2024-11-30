// src/types/admin.ts

// 기본 사용자 정보 타입
export interface User {
  id: string;
  name: string;
  birth: string;
  phone: string;
  gender: 'male' | 'female' | null;
}

// 상담 데이터 타입
export interface Counsel {
  id: string;
  agent_id: string;
  user_id: string;
  consultation_title: string;
  consultation_content: string;
  consultation_date: string;
}

// 상담 컨텍스트 타입
export interface CounselContextType {
  selectedUserId: string | null;
  setSelectedUserId: (id: string | null) => void;
  counselData: Counsel[];
  setCounselData: (data: Counsel[]) => void;
  fetchCounselData: () => Promise<void>;
  refetchCounselData: () => void;
}

// 활동 로그 관련 타입
export interface Log {
  timestamp: string;
  details: string;
}

export interface ActivityLog {
  user_name: string;
  logs: Log[];
}

// API 응답 타입
export interface UserAPIResponse {
  id: string;
  user_name: string;
  user_birth: string;
  user_phone: string;
  user_gender: string;
}

// 컴포넌트 Props 타입
export interface ConsultationCardProps {
  title: string;
  date: string;
  content: string;
  birth: string;
  phone: string;
}

export interface UserData {
  birth: string;
  phone: string;
  name: string;
  gender: 'male' | 'female' | null;
}

export interface UserAPIResponse {
  id: string;
  user_birth: string;
  user_phone: string;
  user_name: string;
  user_gender: string;
}
