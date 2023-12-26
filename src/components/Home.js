import React from "react";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h1>{t("welcome")}</h1>
        <p>{t("description")}</p>
      </div>
      <LanguageSwitcher />
    </>
  );
}

export default Home;
