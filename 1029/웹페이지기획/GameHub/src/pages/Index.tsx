import { useState, useMemo } from "react";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { GenreFilter } from "@/components/GenreFilter";
import { Gamepad2 } from "lucide-react";

const Index = () => {
  const [selectedGenre, setSelectedGenre] = useState("전체");

  const allGenres = useMemo(() => {
    const genreSet = new Set<string>();
    games.forEach((game) => {
      game.genre.forEach((g) => genreSet.add(g));
    });
    return Array.from(genreSet).sort();
  }, []);

  const filteredGames = useMemo(() => {
    if (selectedGenre === "전체") return games;
    return games.filter((game) => game.genre.includes(selectedGenre));
  }, [selectedGenre]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad2 className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GameHub
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            당신에게 완벽한 게임을 찾아드립니다
          </p>
        </header>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">장르별 탐색</h2>
          <GenreFilter 
            genres={allGenres}
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            {selectedGenre === "전체" ? "모든 게임" : `${selectedGenre} 게임`}
            <span className="text-muted-foreground ml-2">({filteredGames.length})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
