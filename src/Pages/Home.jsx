import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import Section from '../components/Section';
import AboutSectionStyle3 from '../components/Section/AboutSection/AboutSectionStyle3';
import OurBusiness from '../components/Section/AboutSection/OurBusiness';
import HowWeHelp from '../components/Section/AboutSection/HowWeHelp';
import OurExpertise from '../components/Section/FeaturesSection/OurExpertise';
import ServiceSection from '../components/Section/DepartmentSection/ServiceSection';
import OurDepartment from '../components/Section/DepartmentSection/OurDepartment';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import { pageTitle } from '../helpers/PageTitle';


export default function Home() {
  pageTitle('Home');
  return (
    <>

      {/* Hero Section  */}
      <Section id="home">
        <HeroSection
          title="Empower Your Practice with Tailored Medical Billing Services"
          subTitle="Discover Custom Solutions to Redefine Your Practice's Financial Health"
          videoBtnText="See how we work"
          videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
          btnText="Pro Health"
          btnUrl="/"
          funfactList={[
            { number: '80%', title: 'Accuracy Rate' },
            { number: '95%', title: 'Collection Rate' },
            { number: '89%', title: 'Satisfied Clients ' },
            { number: '90%', title: 'Claim Approval' },
          ]}
        />
      </Section>

      {/* About Section  */}
      <Section id="about" bottomMd={190} bottomLg={145} bottomXl={105}>
        <AboutSectionStyle3
          titleUp="ABOUT US"
          title="We’ll take care of your payments"
          subTitle="With a focus on client empowerment, timely payments, and transparent updates, we ensure your financial well-being. Our expert team provides personalized support, efficient collections, and direct access to billing managers. We take care of your complete statement xcycle, from generating patient statements to answering any questions your patients have regarding them."
        />
      </Section>

      {/* Our Department Section  */}
      <Section
        id="our-departments"
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={140}
        bottomLg={100}
        bottomXl={60}
      >
        <OurDepartment />
      </Section>

      {/* Our Business Section  */}
      <Section id="our-business" topMd={135} topLg={100} topXl={100}>
        <OurBusiness
          title="Our Business"
          subTitle="We're Xphyre Billing Services - Your Guides to Medical Billing. We're here to educate, support, and ensure timely payments. At Nexel, we specialize in simplifying healthcare administration for physicians, allowing them to focus on patient care. Our streamlined billing processes ensure swift payments, optimizing cash flow. Expert denial management and dedicated account managers guarantee efficient issue resolution, minimizing revenue leakage. We're more than service providers; we're committed partners, dedicated to the success and financial well-being of healthcare practices. Choose a billing experience that's personal and efficient."
        />
      </Section>

      {/* Service Section  */}
      <Section id="our-services" topMd={200} topLg={150} topXl={110}>
        <ServiceSection
          sectionTitle="Why you need our services"
          sectionTitleUp="Our Services"
        />
      </Section>

      {/* Expertise Section */}
      <Section
        id="our-expertise"
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={100}
        className="cs_gray_bg_1"
      >
        <OurExpertise
          sectionTitle="Our Expertise"
        />
      </Section>

      {/* Banner Section  */}
      <Section>
        <BannerSectionStyle2
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our
          experienced medical professionals today!"
        />
      </Section>


      {/* How We Help Section */}
      <Section id="how-we-help" topMd={135} topLg={100} topXl={100}>
        <HowWeHelp
          title="How We Help"
          subTitle="We're not just a service; we're your partners. Facing the challenges of medical billing and coding can be overwhelming. We step in as your advocates, decoding complexities, ensuring compliance, and securing optimal reimbursement. Our human-centric approach recognizes the stories behind each code and receivable, adding a personal touch to the technical. We tailor solutions to your unique needs, providing responsive and accessible communication. Think of us as an extension of your team, dedicated to relieving your pain points and allowing you to focus on exceptional patient care. Together, we turn challenges into opportunities for your practice's success."
        />
      </Section>
    </>
  );
}
