
import Link from "next/link";


interface FacultyCardProps {
  imageUrl: string;
  name: string;
  description: string;
  role: string;
  Learnmore:string,
}

const FacultyCard: React.FC<FacultyCardProps> = ({
  imageUrl,
  name,
  description,
  role,
  Learnmore
})  =>{
  return (
    <>
      <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900 hover:scale-105 hover:border-black hover:text-blue hover:border hover:border-solid">
        <div className="flex items-center gap-x-4 mb-3">
          <div className="inline-flex justify-center items-center size-[82px] hover:scale-105 rounded-full border-4  border-blue-50 bg-blue dark:border-blue-900 dark:bg-blue-800">
            <img
              src={imageUrl}
              alt=""
              // width={44}
              // height={44}
              className="size-[74px] rounded-full cursor-pointer"
            />
          </div>
          <div className="flex-shrink-0">
            <h3 className="block text-lg font-semibold text-gray-800 dark:text-white cursor-pointer">
              {name}
            </h3>
            <p className=" text-gray-500 text-justify">{role}</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 cursor-pointer">
          {description}
        </p>
        <Link
          href={Learnmore}
          className="mt-2 inline-flex items-center gap-x-1.5 text-[1rem] text-blue decoration-2 group-hover:underline font-medium"
        >
          Know more
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </>
  );
}

export default FacultyCard;
