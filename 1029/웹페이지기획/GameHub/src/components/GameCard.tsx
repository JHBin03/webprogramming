import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ThumbsUp } from "lucide-react";
import { Game } from "@/data/games";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] bg-gradient-to-br from-card to-card/80 border-border/50">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-full">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold text-foreground">{game.rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2 text-foreground">{game.title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {game.genre.map((g) => (
            <Badge key={g} variant="secondary" className="text-xs">
              {g}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {game.description}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <ThumbsUp className="w-4 h-4 mr-1" />
          추천
        </Button>
        <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90">
          <Link to={`/game/${game.id}`}>자세히 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
