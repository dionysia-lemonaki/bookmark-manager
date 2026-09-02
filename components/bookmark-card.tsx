import { Eye, Clock, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BookmarkCard() {
  return (
    <Card className="rounded-[10px] p-0 gap-0">
      <div className="p-4">
        <div className="grid grid-cols-[auto_1fr_auto] gap-3 pb-4 border-b">
          <div className="w-11 h-11 rounded-lg bg-muted"></div>
          <div className="flex flex-col gap-1">
            <h2>Frontend Mentor</h2>
            <p>frontendmentor.io</p>
          </div>
          <button className="w-8 h-8 bg-muted rounded-lg"></button>
        </div>
        <div className="pt-4 flex flex-col gap-4">
          <p>
            Improve your front-end coding skills by building real projects.
            Solve real-world HTML, CSS and JavaScript challenges whilst working
            to professional designs.
          </p>
          <ul className="flex items-center gap-2">
            <li>
              <Badge>Practice</Badge>
            </li>
            <li>
              <Badge>Learning</Badge>
            </li>
            <li>
              <Badge>Community</Badge>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-3 px-4 border-t">
        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-1.5">
            <Eye size={12} />
            <span>47</span>
          </li>
          <li className="flex items-center gap-1.5">
            <Clock size={12} />
            <span>23 Sept</span>
          </li>
          <li className="flex items-center gap-1.5">
            <Calendar size={12} />
            <span>15 Jan</span>
          </li>
        </ul>
      </div>
    </Card>
  );
}
