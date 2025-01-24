import * as C from './styles';
import brazil from '../../../assets/icons/brazil.png';
import eua from '../../../assets/icons/eua.png';
import { useTranslation } from 'react-i18next';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <C.ContainerLangs>
      <C.IconLang src={brazil} onClick={() => changeLanguage('pt')} />
      <C.IconLang src={eua} onClick={() => changeLanguage('en')} />
    </C.ContainerLangs>
  );
};
