import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbSchedule from "../public/images/works/schedulewhiz.png";
import thumbMicroservices from "../public/images/works/microservices.png";
import thumbTeamHub from "../public/images/works/teamhub.png";
import thumbChihuahua from "../public/images/works/chihuahua.png";
import thumbCanSat from "../public/images/works/cansat.png";
import thumbSasWebsite from "../public/images/works/saswebsite.png";
import thumbDodgeIt from "../public/images/works/dodgeit.png";
import thumbMiniPac from "../public/images/works/minipac.png";
import thumbMiniPulsesGenerator from "../public/images/works/minipulses.png";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="schedule-whiz"
            title="Schedule Whiz"
            thumbnail={thumbSchedule}
          >
            Optimization app to Crafting the perfect Team Schedule in the world
            of remote work.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="microservices-api"
            title="Microservices Api"
            thumbnail={thumbMicroservices}
          >
            REST API with spring boot with spring cloud.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="teamhub" title="TeamHub" thumbnail={thumbTeamHub}>
            App for workforce, keep your team agenda, with and employee
            management interface.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="chihuahua"
            thumbnail={thumbChihuahua}
            title="Chihuahua"
          >
            Chihuahua dogs 2D video game with Python and Pygame.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="cansat" thumbnail={thumbCanSat} title="CanSat">
            Ground Station System, CanSat On board Telemetry with GY-80, Arduino
            and Xbee
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="sas-website"
            thumbnail={thumbSasWebsite}
            title="SAS Website"
          >
            Landing page styled with bare CSS and AI generated images.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="dodge-it"
            thumbnail={thumbDodgeIt}
            title="Dodge It!"
          >
            Dodge the fixed and mobile boxes with this funny 2D game.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="mini-pac" thumbnail={thumbMiniPac} title="Mini PAC">
            Simple AC phase control with zero crossing circuit using ATtiny13u.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="minipulses-generator"
            thumbnail={thumbMiniPulsesGenerator}
            title="2 Minipulses Generator"
          >
            Easy to use signal generator in Nucleo board with STM32F446RE chip,
            produces two width and delay variable pulses. Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
// export { getServerSideProps } from "../components/chakra";
