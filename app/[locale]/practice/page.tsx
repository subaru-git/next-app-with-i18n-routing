import { useTranslations } from "next-intl";
import Link from "next/link";

const Practice = () => {
  const t = useTranslations("Practice");
  return (
    <div className="flex flex-col gap-4">
      <div>{t("title")}</div>
      <Link href={"/en"}>change language to english</Link>
      <Link href={"/ja"}>日本語にする</Link>
    </div>
  );
};

export default Practice;
