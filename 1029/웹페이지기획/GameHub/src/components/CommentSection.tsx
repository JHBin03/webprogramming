import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "게이머123",
      content: "정말 재미있는 게임이에요! 강력 추천합니다.",
      date: "2024-01-15"
    },
    {
      id: "2",
      author: "플레이어456",
      content: "그래픽이 정말 멋지네요. 스토리도 흥미진진합니다.",
      date: "2024-01-14"
    }
  ]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: "익명",
      content: newComment,
      date: new Date().toISOString().split('T')[0]
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">댓글 ({comments.length})</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="이 게임에 대한 의견을 남겨주세요..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px] bg-muted/50 border-border"
        />
        <Button type="submit" className="bg-gradient-to-r from-primary to-accent">
          댓글 작성
        </Button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id} className="p-4 bg-muted/30 border-border/50">
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarFallback className="bg-primary/20 text-primary">
                  {comment.author[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-foreground">{comment.author}</span>
                  <span className="text-xs text-muted-foreground">{comment.date}</span>
                </div>
                <p className="text-sm text-foreground/90">{comment.content}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
