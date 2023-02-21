import React, { useEffect, useState } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const appName = "BT3";

  const locales = {
    en: "English",
    fr: "Français",
    es: "Español"
  };

  const handleLangChange = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
  };

  useEffect(() => {
    fetch(`https://localhost:7103/api/Translations?lang=${lang}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          i18n.changeLanguage(lang);
        }
      })
      .catch(error => console.error(error));
  }, [i18n, lang]);

  return (
    <div className="App">
      <nav className="navbar">
        <div>
          <select value={lang} onChange={handleLangChange} className="form-select m-5">
            {Object.keys(locales).map((key) => {
              return (
                <option value={key} key={key}>{locales[key]}</option>
              );
            })}
          </select>
        </div>
      </nav>
      <div className="form">
        <p>{t("t:welcome_msg", { app: appName })}</p>
        <div>
          <h4>{t("t:login_title")}</h4>
          <div>
            <form>
              <div>
                <label><p>{t("t:login_username")}</p></label>
                <input type="text" name="uname" required />
              </div>
              <div>
                <p>{t("t:login_password")}</p>
                <input type="password" name="pass" required />
              </div>
              <br />
              <button><p>{t("t:login_button")}</p></button>
              <p>{t("t:create_account")}</p>
              <small>{t("t:login_subtext")}</small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
