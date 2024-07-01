import { useTranslations } from "next-intl";
import Link from "next/link";

const Index = () => {
  const t = useTranslations("Index");
  return (
    <div className="flex flex-col gap-4">
      <div>{t("title")}</div>
      <Link href={"/practice"}>go to practice</Link>
      <Link href={"/en"}>change language to english</Link>
      <Link href={"/ja"}>日本語にする</Link>
    </div>
  );
};

export default Index;
