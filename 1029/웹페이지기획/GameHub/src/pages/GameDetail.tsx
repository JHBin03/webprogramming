import { useParams, Link } from "react-router-dom";
import { games } from "@/data/games";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CommentSection } from "@/components/CommentSection";
import { ArrowLeft, ThumbsUp, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GameDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const game = games.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">게임을 찾을 수 없습니다</h1>
          <Button asChild>
            <Link to="/">홈으로 돌아가기</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleRecommend = () => {
    toast({
      title: "추천 완료!",
      description: `${game.title}를 추천했습니다.`,
    });
  };

  const handleShare = () => {
    toast({
      title: "링크 복사됨",
      description: "게임 링크가 클립보드에 복사되었습니다.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            뒤로 가기
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src={game.image} 
              alt={game.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{game.title}</h1>
              <p className="text-muted-foreground">출시년도: {game.releaseYear}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {game.genre.map((g) => (
                <Badge key={g} variant="secondary" className="text-sm">
                  {g}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">평균 평점</p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-foreground">{game.rating}</span>
                  <span className="text-muted-foreground">/ 5.0</span>
                </div>
              </div>
            </div>

            <p className="text-foreground/90 leading-relaxed">{game.description}</p>

            <div>
              <h3 className="font-semibold text-foreground mb-2">주요 특징</h3>
              <div className="flex flex-wrap gap-2">
                {game.features.map((feature) => (
                  <Badge key={feature} variant="outline">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={handleRecommend}
                className="flex-1 bg-gradient-to-r from-primary to-accent"
              >
                <ThumbsUp className="w-4 h-4 mr-2" />
                추천하기
              </Button>
              <Button 
                onClick={handleShare}
                variant="outline"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <CommentSection />
      </div>
    </div>
  );
};

export default GameDetail;
