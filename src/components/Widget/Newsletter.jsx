import React from 'react';
import NewsletterForm from '../NewsletterForm';
import {whiteArrow} from '../../assets/allAssets';


export default function Newsletter({ title, subTitle }) {
  return (
    <div className="cs_newsletter cs_style_1 cs_white_color">
      <h2 className="cs_newsletter_title cs_white_color">{title}</h2>
      <div className="cs_newsletter_subTitle">{subTitle}</div>
      <NewsletterForm
        btnText="Submit"
        btnArrowUrl={whiteArrow}
      />
    </div>
  );
}
