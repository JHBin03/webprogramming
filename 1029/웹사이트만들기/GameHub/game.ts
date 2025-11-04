export type GameGenre = 
  | "액션"
  | "RPG"
  | "어드벤처"
  | "시뮬레이션"
  | "전략"
  | "스포츠"
  | "레이싱"
  | "퍼즐"
  | "호러"
  | "FPS";

export type GamePreference = 
  | "싱글플레이"
  | "멀티플레이"
  | "스토리 중심"
  | "그래픽 중요"
  | "짧은 플레이타임"
  | "긴 플레이타임";

export interface Game {
  id: string;
  title: string;
  genre: GameGenre[];
  rating: number;
  description: string;
  preferences: GamePreference[];
  imageUrl: string;
  releaseYear: number;
  developer: string;
  totalRecommendations: number;
}

export interface UserRating {
  gameId: string;
  userId: string;
  rating: number;
  timestamp: Date;
}

export interface GameRecommendation {
  gameId: string;
  userId: string;
  timestamp: Date;
}

export interface GameComment {
  id: string;
  gameId: string;
  userName: string;
  content: string;
  timestamp: Date;
}
