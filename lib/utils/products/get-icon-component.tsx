import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface IGetIconComponentProps {
  iconName: string;
  className?: string;
}

export function getIconComponent({
  iconName,
  className = "h-8 w-8",
}: IGetIconComponentProps) {
  const Icon = (Icons as Record<string, LucideIcon>)[iconName];
  return Icon ? <Icon className={className} /> : null;
}
