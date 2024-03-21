import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";

import thumbSchedule from "../public/images/works/schedulewhiz.png";
import thumbMicroservices from "../public/images/works/microservices.png";
import thumbChihuahua from "../public/images/works/chihuahua.png";
import thumbCanSat from "../public/images/works/cansat.png";
import thumbSasWebsite from "../public/images/works/saswebsite.png";
import thumbDodgeIt from "../public/images/works/dodgeit.png";
import thumbMiniPac from "../public/images/works/minipac.png";
import thumbMiniPulsesGenerator from "../public/images/works/minipulses.png";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" variant="section-title" mb={4}>
        Main projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="schedule-whiz"
            title="Schedule Whiz"
            thumbnail={thumbSchedule}
            href="https://github.com/uma-dev/schedule-whiz"
            website="https://github.com/uma-dev/schedule-whiz"
            features="Monolitich, security, SQL database"
            stack="React / Spring / Tailwind"
          >
            Optimization tool for the perfect Team Schedule in the world of
            remote work.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="microservices-api"
            title="Microservices Api"
            thumbnail={thumbMicroservices}
            href="https://github.com/uma-dev/micro-services"
            website="https://github.com/uma-dev/micro-services"
            features="Microservices, security, SQL database, tracing (Zipkin)"
            stack="Spring boot / PostgreSQL"
          >
            REST API with spring boot with spring cloud.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.1}>
        <Divider my={6} />
        <Heading as="h3" variant="section-title" mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="cansat"
            thumbnail={thumbCanSat}
            title="CanSat"
            href="https://github.com/uma-dev/CanSat"
            website="https://aldacl.github.io/CanSat"
            features="Data display, realtime, telemetry"
            stack="Python / pygame / MatplotLib "
          >
            Ground Station System, CanSat On board Telemetry with GY-80, Arduino
            and Xbee
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="sas-website"
            thumbnail={thumbSasWebsite}
            title="SaaS Website template"
            href="https://github.com/uma-dev/saas-website"
            website="https://ramee-iot.github.io/saas-website/"
            features="Fast, responsive"
            stack=" HTML / CSS"
          >
            Landing page styled with bare CSS and AI generated images.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" variant="section-title" mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem
            id="chihuahua"
            thumbnail={thumbChihuahua}
            title="Chihuahua"
            href="https://github.com/uma-dev/chihuahua-game"
            website="https://github.com/uma-dev/chihuahua-game"
            features="2D game, scalable, OOP"
            stack="Python/ Pygame"
          >
            My chihuahua dogs video game.
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="dodge-it"
            thumbnail={thumbDodgeIt}
            title="Dodge It!"
            href="https://github.com/uma-dev/car-game"
            website="https://github.com/uma-dev/car-game"
            features="2D game, funny, procedural "
            stack="Python/ Pygame"
          >
            Dodge the fixed and mobile boxes.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="mini-pac"
            thumbnail={thumbMiniPac}
            title="Mini PAC"
            href="https://github.com/uma-dev/mini-PAC"
            website="https://github.com/uma-dev/mini-PAC"
            features="Interruptions, register config, timer"
            stack="C++"
          >
            Simple AC phase control with zero crossing circuit using ATtiny13u.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="minipulses-generator"
            thumbnail={thumbMiniPulsesGenerator}
            title="2 Minipulses Generator"
            href="https://github.com/uma-dev/2-minipulses-generator"
            website="https://github.com/uma-dev/2-minipulses-generator"
            features="Interruptions, register config, timer, SPI display"
            stack="C++"
          >
            Signal generator of two width and delay variable pulses.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Box align="center" my={4}>
          <NextLink href="/contact">
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="telegram"
              size="sm"
            >
              Contact info
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Works;
// export { getServerSideProps } from "../components/chakra";
