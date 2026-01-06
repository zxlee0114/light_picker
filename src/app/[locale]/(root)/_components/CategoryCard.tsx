import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  image: string;
  path: string;
};

const CategoryCard = ({ title, image, path }: CategoryCardProps) => {
  return (
    <div className="sm:py-7 py-5 sm:px-7 px-6 grid sm:gap-7 gap-3 place-items-center border-2 border-gray-200 rounded-xl hover:bg-gray-200 ease-in duration-300 transition-colors">
      <Image
        src={image}
        alt={title}
        width={160}
        height={160}
        className="max-sm:h-25 max-sm:w-25"
      />
      <h3 className="sm:h3-bold h5-bold">{title}</h3>
      <Link
        href={path}
        className="block btn sm:btn-medium btn-small btn-light w-fit"
        role="button"
      >
        查看更多
      </Link>
    </div>
  );
};

export default CategoryCard;
