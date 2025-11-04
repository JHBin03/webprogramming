import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { mockGames } from "@/data/mockGames";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Star, ThumbsUp, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { GameComments } from "@/components/GameComments";

export default function GameDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = mockGames.find((g) => g.id === id);

  const [userRating, setUserRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isRecommended, setIsRecommended] = useState(false);

  if (!game) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">게임을 찾을 수 없습니다</h1>
          <Button onClick={() => navigate("/")}>홈으로 돌아가기</Button>
        </div>
      </div>
    );
  }

  const handleRating = (rating: number) => {
    setUserRating(rating);
    toast.success(`${rating}점으로 평가했습니다!`);
  };

  const handleRecommend = () => {
    if (!isRecommended) {
      setIsRecommended(true);
      toast.success("게임을 추천했습니다!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          돌아가기
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="aspect-video rounded-lg overflow-hidden border border-primary/20 shadow-card">
              <img
                src={game.imageUrl}
                alt={game.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 rounded-lg bg-gradient-card border border-primary/20">
              <h3 className="text-lg font-semibold mb-4">별점 평가</h3>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onMouseEnter={() => setHoveredRating(rating)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => handleRating(rating)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        rating <= (hoveredRating || userRating)
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {userRating > 0 && (
                <p className="text-sm text-muted-foreground mt-3">
                  {userRating}점으로 평가하셨습니다
                </p>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-2">
                {game.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {game.developer} • {game.releaseYear}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 fill-primary text-primary" />
                <span className="text-2xl font-bold">{game.rating}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ThumbsUp className="w-5 h-5" />
                <span>{game.totalRecommendations.toLocaleString()} 추천</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {game.genre.map((g, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-primary/10 text-primary border border-primary/30"
                >
                  {g}
                </span>
              ))}
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">게임 소개</h2>
              <p className="text-muted-foreground leading-relaxed">
                {game.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">게임 특징</h2>
              <div className="flex flex-wrap gap-2">
                {game.preferences.map((pref, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-md bg-secondary/10 text-secondary border border-secondary/30"
                  >
                    {pref}
                  </span>
                ))}
              </div>
            </div>

            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={handleRecommend}
              disabled={isRecommended}
            >
              <ThumbsUp className={`w-5 h-5 ${isRecommended ? "fill-current" : ""}`} />
              {isRecommended ? "추천 완료!" : "이 게임 추천하기"}
            </Button>
          </div>
        </div>

        {/* 댓글 섹션 */}
        <div className="mt-12">
          <GameComments gameId={game.id} />
        </div>
      </main>
    </div>
  );
}
