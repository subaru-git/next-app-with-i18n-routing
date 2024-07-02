import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const t = await getTranslations({ locale, namespace: "Practice.seo" });
  return {
    title: t("title"),
    description: t("description"),
  };
};

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
