import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import type { GameComment } from "@/types/game";

interface GameCommentsProps {
  gameId: string;
}

export function GameComments({ gameId }: GameCommentsProps) {
  const [comments, setComments] = useState<GameComment[]>([
    {
      id: "1",
      gameId,
      userName: "게이머123",
      content: "정말 재밌게 플레이했습니다! 스토리가 압권이네요.",
      timestamp: new Date("2024-01-15"),
    },
    {
      id: "2",
      gameId,
      userName: "프로게이머",
      content: "그래픽이 정말 훌륭합니다. 추천합니다!",
      timestamp: new Date("2024-01-20"),
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim()) {
      toast.error("댓글 내용을 입력해주세요");
      return;
    }

    const comment: GameComment = {
      id: Date.now().toString(),
      gameId,
      userName: "익명",
      content: newComment,
      timestamp: new Date(),
    };

    setComments([comment, ...comments]);
    setNewComment("");
    toast.success("댓글이 등록되었습니다!");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">댓글 ({comments.length})</h2>

      {/* 댓글 작성 */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="댓글을 남겨주세요..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px] bg-background/50 border-primary/20"
        />
        <Button type="submit" variant="hero">
          댓글 등록
        </Button>
      </form>

      {/* 댓글 목록 */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 rounded-lg bg-gradient-card border border-primary/20"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-primary">
                {comment.userName}
              </span>
              <span className="text-sm text-muted-foreground">
                {comment.timestamp.toLocaleDateString("ko-KR")}
              </span>
            </div>
            <p className="text-foreground leading-relaxed">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
