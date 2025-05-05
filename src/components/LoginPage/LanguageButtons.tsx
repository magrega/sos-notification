import { Box } from "@mui/material";
import { flags } from "assets/lang/langFlags";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageButtons = () => {
  const { i18n } = useTranslation();

  const [currentLang, setCurrentLang] = useState(i18n.language);

  const handleLanguage = (lang: string) => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <Box
      sx={{
        mt: -3,
        mb: 3,
        display: "flex",
        gap: 0.5,
        justifyContent: "flex-end",
        height: "26px",
      }}
    >
      {["ru", "en"].map((lang) => (
        <button
          key={lang}
          style={currentLang === lang ? activeLang : inactiveLang}
          onClick={() => handleLanguage(lang)}
        >
          <img src={flags[lang]} alt="language flag" style={imgStyles} />
        </button>
      ))}
    </Box>
  );
};

const ButtonStyles = {
  width: "25px",
  padding: 0,
  border: "1px solid rgba(0, 0, 0, .2)",
  margin: "auto 0",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "all .5s",
};

const inactiveLang = {
  ...ButtonStyles,
  WebkitBoxShadow: "0px 3px 13px 3px rgba(34, 60, 80, 0.2)",
  moxBoxShadow: "0px 3px 13px 3px rgba(34, 60, 80, 0.2)",
  boxShadow: "0px 3px 13px 3px rgba(34, 60, 80, 0.2)",
  filter: "brightness(1)",
};

const activeLang = {
  ...ButtonStyles,
  WebkitBoxShadow: "none",
  moxBoxShadow: "none",
  boxShadow: "none",
  filter: "brightness(.5)",
  cursor: "default",
};

const imgStyles = {
  width: "100%",
  verticalAlign: "bottom",
};

export default LanguageButtons;
