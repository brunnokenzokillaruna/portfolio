import React from 'react';
import { useTranslation } from 'react-i18next';
import './PhraseSection.css';

function PhraseSection() {
  const { t } = useTranslation();

  return (
    <section className="PhraseSection d-flex justify-content-center align-items-center text-center">
      <div className="container">
        <p>
          {t('Picture a place where tech and creativity come together, making your online presence better. I turn new ideas into great digital projects, focusing on cool designs and strong tech to push your brand into the top of the digital world.')}
        </p>
      </div>
    </section>
  );
}

export default PhraseSection;
