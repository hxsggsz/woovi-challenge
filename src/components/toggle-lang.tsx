import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function ToggleLang() {
  const [lang, setLang] = useState(
    localStorage.getItem("@lang") ?? navigator.language,
  );

  const { t, i18n } = useTranslation();

  const handleChange = (ev: SelectChangeEvent) => {
    const value = ev.target.value;

    setLang(value);
    i18n.changeLanguage(value);
    localStorage.setItem("@lang", value);
  };

  return (
    <FormControl>
      <InputLabel id="select-language">{t("header:select:label")}</InputLabel>

      <Select
        value={lang}
        id="select-language"
        onChange={handleChange}
        labelId="select-language"
        label={t("header:select:label")}
      >
        <MenuItem value="en-US">en-US</MenuItem>
        <MenuItem value="pt-BR">pt-BR</MenuItem>
      </Select>
    </FormControl>
  );
}

export default ToggleLang;
