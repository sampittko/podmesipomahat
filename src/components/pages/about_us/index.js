import { ROUTES, SECTION_IDS } from '../../../config/routes';
import React, { useEffect } from 'react';

import General from './general/General';
import Lead from './lead/Lead';
import Section from '../common/section/Section';
import Team from './Team';
import backgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';
import { setDocumentTitleFromRoute } from '../../../utils/routesUtils';

const AboutUs = () => {
  useEffect(() => {
    setDocumentTitleFromRoute(ROUTES.O_NAS);
  }, []);

  const GeneralSection = (
    <Section
      id={SECTION_IDS.O_NAS}
      backgroundPath={backgroundPath}
      title="O nás"
      fullscreen
    >
      <General />
    </Section>
  );

  const TeamSection = (
    <Section
      id={SECTION_IDS.TEAM}
      backgroundPath={backgroundPath}
      customLayout
      noBottom
      backgroundPositionClass="bg-bottom"
    >
      <Team />
    </Section>
  );

  const LeadSection = (
    <Section
      id={SECTION_IDS.PODME_SA_ROZPRAVAT}
      backgroundPath={backgroundPath}
      customLayout
      backgroundPositionClass="bg-top"
    >
      <Lead />
    </Section>
  );

  return (
    <React.Fragment>
      {GeneralSection}
      {TeamSection}
      {LeadSection}
    </React.Fragment>
  );
};

export default AboutUs;