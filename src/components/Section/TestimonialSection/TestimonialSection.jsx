import React from 'react';
import Spacing from '../../Spacing';
import SectionHeading from '../../SectionHeading';
import TestimonialCarousel from '../../Slider/TestimonialCarousel';
import {ServicesData} from '../../../Constants/constants';


export default function TestimonialSection({
  sectionTitle,
  sectionTitleUp,
}) {
  return (
    <div className="container">
      <div className="position-relative">
        <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
        <Spacing md="72" lg="50" />
        <TestimonialCarousel data={ServicesData} />
      </div>
    </div>
  );
}
