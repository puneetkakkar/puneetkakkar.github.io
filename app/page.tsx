import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col-reverse sm:flex-row justify-center gap-4 py-8 md:py-10">
      <div className="inline-block items-center text-center sm:text-left justify-center max-w-lg"></div>
      <div className=""></div>
    </section>
  );
}
