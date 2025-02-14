import React from 'react';
import IconBoxStyle2 from '../../IconBox/IconBoxStyle2';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import {departmentData} from '../../../Constants/constants';


export default function DepartmentSectionStyle4({
  sectionTitle,
  sectionTitleUp,
}) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
      <Spacing md="72" lg="50" />
      <div className="row">
        {departmentData?.map((item, index) => (
          <div className="col-xl-4 col-md-6" key={index}>
            <IconBoxStyle2 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
