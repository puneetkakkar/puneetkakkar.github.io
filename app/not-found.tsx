import NotFoundImage from "@/assets/not-found.svg";
import { link as linkStyles } from "@nextui-org/theme";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mb-44">
      <div className="">
        <Image
          src={NotFoundImage}
          alt="404 not found"
          height={550}
          width={550}
        />
      </div>
      <p className="font-rubik text-medium sm:text-xl dark:text-gray-200 text-gray-700">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className={clsx(
          linkStyles({
            className:
              "font-rubik text-md sm:text-medium dark:text-gray-400 text-gray-600 mt-4",
          }),
          "data-[active=true]:text-primary data-[active=true]:font-medium"
        )}
      >
        Return Home
      </Link>
    </div>
  );
}
