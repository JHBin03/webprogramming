export interface Game {
  id: string;
  title: string;
  genre: string[];
  rating: number;
  description: string;
  image: string;
  features: string[];
  releaseYear: number;
}

export const games: Game[] = [
  {
    id: "1",
    title: "엘든 링",
    genre: ["액션", "RPG"],
    rating: 4.8,
    description: "방대한 오픈월드에서 펼쳐지는 소울라이크 액션 RPG. 프롬소프트웨어와 조지 R.R. 마틴이 만든 압도적인 판타지 세계를 탐험하세요.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop",
    features: ["싱글플레이", "스토리 중심", "높은 난이도", "오픈월드"],
    releaseYear: 2022
  },
  {
    id: "2",
    title: "발더스 게이트 3",
    genre: ["RPG", "전략"],
    rating: 4.9,
    description: "D&D 규칙을 기반으로 한 턴제 전략 RPG. 선택에 따라 달라지는 스토리와 깊이 있는 캐릭터 커스터마이징이 특징입니다.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    features: ["싱글플레이", "멀티플레이", "스토리 중심", "선택과 결과"],
    releaseYear: 2023
  },
  {
    id: "3",
    title: "사이버펑크 2077",
    genre: ["액션", "RPG"],
    rating: 4.5,
    description: "미래 도시 나이트시티를 배경으로 한 오픈월드 액션 RPG. 화려한 그래픽과 깊이 있는 스토리가 돋보입니다.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    features: ["싱글플레이", "오픈월드", "스토리 중심", "고사양 그래픽"],
    releaseYear: 2020
  },
  {
    id: "4",
    title: "리그 오브 레전드",
    genre: ["전략", "멀티플레이"],
    rating: 4.3,
    description: "전 세계에서 가장 인기 있는 MOBA 게임. 150개 이상의 챔피언으로 전략적인 팀 전투를 즐기세요.",
    image: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=800&h=600&fit=crop",
    features: ["멀티플레이", "전략적", "경쟁적", "무료 플레이"],
    releaseYear: 2009
  },
  {
    id: "5",
    title: "젤다의 전설: 티어스 오브 더 킹덤",
    genre: ["액션", "어드벤처"],
    rating: 4.9,
    description: "하이랄 왕국의 하늘과 땅을 탐험하는 오픈월드 어드벤처. 창의적인 퍼즐과 자유로운 탐험이 특징입니다.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop",
    features: ["싱글플레이", "오픈월드", "퍼즐", "탐험"],
    releaseYear: 2023
  },
  {
    id: "6",
    title: "스타듀 밸리",
    genre: ["시뮬레이션", "캐주얼"],
    rating: 4.7,
    description: "평화로운 시골 마을에서 농장을 가꾸고 주민들과 교류하는 힐링 시뮬레이션 게임입니다.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
    features: ["싱글플레이", "느긋한 플레이", "시뮬레이션", "저사양"],
    releaseYear: 2016
  },
  {
    id: "7",
    title: "데드 바이 데이라이트",
    genre: ["공포", "멀티플레이"],
    rating: 4.2,
    description: "1명의 킬러와 4명의 생존자가 펼치는 비대칭 공포 게임. 긴장감 넘치는 숨바꼭질을 경험하세요.",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=600&fit=crop",
    features: ["멀티플레이", "공포", "협동", "경쟁적"],
    releaseYear: 2016
  },
  {
    id: "8",
    title: "호라이즌 포비든 웨스트",
    genre: ["액션", "어드벤처"],
    rating: 4.6,
    description: "기계 생명체가 지배하는 포스트 아포칼립스 세계를 탐험하는 액션 어드벤처 게임입니다.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop",
    features: ["싱글플레이", "오픈월드", "스토리 중심", "고사양 그래픽"],
    releaseYear: 2022
  }
];
