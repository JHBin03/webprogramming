// 임시 게임 데이터
const games = [
  { id: 1, title: "엘든 링", genre: "RPG", rating: 4.8, description: "광대한 오픈월드에서 모험을 즐기는 액션 RPG", recommendations: 12 },
  { id: 2, title: "스타듀 밸리", genre: "시뮬레이션", rating: 4.6, description: "농사와 연애, 마을 생활을 즐길 수 있는 힐링 게임", recommendations: 20 },
  { id: 3, title: "문명 VI", genre: "전략", rating: 4.3, description: "세계를 지배하기 위한 턴제 전략 시뮬레이션", recommendations: 9 },
  { id: 4, title: "갓 오브 워", genre: "액션", rating: 4.9, description: "북유럽 신화 속 크레토스의 서사적 전투", recommendations: 30 }
];

// 장르 선택 시 게임 표시
document.getElementById("genreSelect").addEventListener("change", function() {
  const selectedGenre = this.value;
  const filtered = selectedGenre ? games.filter(g => g.genre === selectedGenre) : [];

  const gameList = document.getElementById("gameList");
  gameList.innerHTML = "";

  filtered.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
      <h3>${game.title}</h3>
      <p>⭐ ${game.rating}</p>
      <button onclick="recommend(${game.id})">추천하기</button>
      <button onclick="viewDetail(${game.id})">자세히 보기</button>
    `;
    gameList.appendChild(card);
  });
});

function recommend(id) {
  const game = games.find(g => g.id === id);
  game.recommendations++;
  alert(`${game.title} 추천 완료! (총 ${game.recommendations}회)`);
}

function viewDetail(id) {
  window.location.href = `game-detail.html?id=${id}`;
}
