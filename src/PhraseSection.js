// React and translation dependencies
import React from 'react';
import { useTranslation } from 'react-i18next';
import './PhraseSection.css';

function PhraseSection() {
  // Initialize translations
  const { t } = useTranslation();

  return (
    // Hero section with centered content
    <section className="PhraseSection d-flex justify-content-center align-items-center text-center">
      <div className="container">
        {/* Tagline */}
        <p>
          {t('Picture a place where tech and creativity come together, making your online presence better. I turn new ideas into great digital projects, focusing on cool designs and strong tech to push your brand into the top of the digital world.')}
        </p>
      </div>
    </section>
  );
}

export default PhraseSection;
