import React from 'react';
import IconBoxStyle13 from '../../IconBox/IconBoxStyle13';
import { featureListData } from '../../../Constants/constants';

export default function OurExpertise({ sectionTitle }) {
  return (
    <div className="cs_shape_wrap">
      <div className="cs_shape_1" />
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <h2 className="cs_section_title cs_main_heading_color cs_fs_72 m-0">{sectionTitle}</h2>
        </div>
        <div className="cs_height_72 cs_height_lg_50" />
        <div className="cs_random_features">
          {featureListData?.map((item, index) => (
            <div className="cs_random_features_col" key={index}>
              <IconBoxStyle13 {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
