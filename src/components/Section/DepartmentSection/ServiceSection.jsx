import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxStyle4 from '../../IconBox/IconBoxStyle4';
import {servicesData} from '../../../Constants/constants';


export default function ServiceSection({
  sectionTitle,
  sectionTitleUp,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xl-4">
          <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
          <Spacing md="72" lg="50" />
        </div>
        {servicesData?.map((item, index) => (
          <div className="col-md-6 col-xl-4" key={index}>
            <IconBoxStyle4 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
