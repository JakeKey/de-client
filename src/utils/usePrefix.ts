import { useTranslation } from 'react-i18next';

const usePrefix = (prefix: string) => {
  const { t } = useTranslation();

  return (postfix: string, variables?: object) =>
    !variables ? t(`${prefix}.${postfix}`) : t(`${prefix}.${postfix}`, variables);
};

export default usePrefix;
