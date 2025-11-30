import Link from "next/link";

import Icon from "@/components/Icon";
import { SOCIAL_LINKS } from "@/constants/data";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const SocialLinks = () => {
  return (
    <nav className="flex gap-1">
      <TooltipProvider>
        {SOCIAL_LINKS.map(item => {
          const { title, link, icon } = item;
          return (
            <Tooltip key={title}>
              <TooltipTrigger asChild>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-center p-3 link"
                >
                  <Icon name={icon} className="size-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>{title}</TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </nav>
  );
};

export default SocialLinks;
