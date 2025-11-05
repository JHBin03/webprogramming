import { Button } from "@/components/ui/button";

interface GenreFilterProps {
  genres: string[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

export const GenreFilter = ({ genres, selectedGenre, onGenreChange }: GenreFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={selectedGenre === "전체" ? "default" : "outline"}
        onClick={() => onGenreChange("전체")}
        className={selectedGenre === "전체" ? "bg-gradient-to-r from-primary to-accent" : ""}
      >
        전체
      </Button>
      {genres.map((genre) => (
        <Button
          key={genre}
          variant={selectedGenre === genre ? "default" : "outline"}
          onClick={() => onGenreChange(genre)}
          className={selectedGenre === genre ? "bg-gradient-to-r from-primary to-accent" : ""}
        >
          {genre}
        </Button>
      ))}
    </div>
  );
};
