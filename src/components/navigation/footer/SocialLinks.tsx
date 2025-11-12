import Link from "next/link";

import Icon from "@/components/Icon";

const SocialLinks = () => {
  return (
    <nav className="flex gap-1">
      <Link
        href={"#"}
        target="_blank"
        title="facebook"
        className="flex-center p-3 link"
      >
        <Icon name="facebook" width={24} height={24} />
      </Link>
      <Link
        href={"#"}
        target="_blank"
        title="instagram"
        className="flex-center p-3 link"
      >
        <Icon name="instagram" width={24} height={24} />
      </Link>
      <Link
        href={"#"}
        target="_blank"
        title="line"
        className="flex-center p-3 link"
      >
        <Icon name="line" width={24} height={24} />
      </Link>
    </nav>
  );
};

export default SocialLinks;
