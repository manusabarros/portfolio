"use client";

import { FC, useRef } from "react";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Technology from "@/components/Technology";
import Footer from "@/components/Footer";
import {
  Box,
  HStack,
  Heading,
  IconButton,
  Image,
  Link,
  ListItem,
  ListRoot,
  Separator,
  Stack,
  Text,
  VStack,
  VisuallyHidden,
  chakra,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home: FC<{ version: string }> = ({ version }) => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const participationsRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);

  const elementsRefs = {
    "about-me": aboutMeRef,
    experience: experienceRef,
    education: educationRef,
    participations: participationsRef,
    technologies: technologiesRef,
  };

  const goToElement = (
    link: "about-me" | "experience" | "education" | "participations" | "technologies"
  ) => elementsRefs[link].current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style jsx global>{`
        .swiper {
          width: 100%;
          display: flex;
          align-items: center;
        }
        .swiper-slide {
          width: 300px;
          height: unset;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
      <Header onClick={goToElement} />
      <chakra.main pt={14} pb={20}>
        <Box h={300} pos="relative">
          <Image objectFit="cover" objectPosition="bottom" asChild>
            <NextImage src="/assets/cover.jpg" alt="cover" fill />
          </Image>
        </Box>
        <VStack mt={-50}>
          <Box
            w={200}
            h={200}
            pos="relative"
            border="3px solid white"
            borderRadius="full"
            boxShadow="xl"
            mb={2}
          >
            <Image borderRadius="full" asChild>
              <NextImage src="/assets/profile-picture.jpg" alt="manusabarros" fill />
            </Image>
          </Box>
          <Heading size="2xl">Manu Sabarros</Heading>
          <Heading size="xl">Frontend Engineer</Heading>
          <Link
            href="mailto:hello@manusabarros.com"
            _hover={{ color: "gray.500" }}
            _focus={{ outline: "none" }}
          >
            hello@manusabarros.com
          </Link>
          <HStack>
            <Link
              href="https://www.linkedin.com/in/manuel-sabarros"
              target="_blank"
              w="30px"
              h="30px"
              pos="relative"
              _focus={{ outline: "none" }}
            >
              <Image asChild>
                <NextImage src="/assets/linkedin.png" alt="linkedin" fill />
              </Image>
            </Link>
            <Link
              href="https://github.com/manusabarros"
              target="_blank"
              w="30px"
              h="30px"
              pos="relative"
              _focus={{ outline: "none" }}
            >
              <Image _dark={{ filter: "invert(1)" }} asChild>
                <NextImage src="/assets/github.png" alt="github" fill />
              </Image>
            </Link>
          </HStack>
        </VStack>
        <Box maxW={800} p={5} pb={0} m="auto">
          <VStack align="start" pos="relative">
            <Heading size="xl">About Me</Heading>
            <Text textAlign="justify">
              Hi! Nice to meet you! My name is Manuel Sabarros and I&apos;m a software developer
              living in Portugal.
            </Text>
            <Text textAlign="justify">
              I have experience in fullstack development, but my main expertise is the frontend
              world. I love developing beautiful websites and mobile apps and creating platforms
              with great design.
            </Text>
            <Text textAlign="justify">
              Technology is my passion! I&apos;m always learning new things to add to my skill set,
              especially modern ones, so that I can help by adding value to projects and delivering
              a high quality product.
            </Text>
            <Text textAlign="justify">
              And last but not least, I have ease for business analysis due to the degree I studied,
              so I can collaborate with solutions for many areas of an organization.
            </Text>
            <VisuallyHidden mt="0 !important" pos="absolute" top="-4.5rem" ref={aboutMeRef} />
          </VStack>
          <Separator my={4} borderColor={{ _dark: "gray.600", _light: "gray.300" }} />
          <VStack align="start" pos="relative">
            <Heading size="xl">Experience</Heading>
            <Swiper
              slidesPerView="auto"
              spaceBetween={20}
              className="group"
              modules={[Navigation, Pagination]}
              navigation={{
                enabled: true,
                prevEl: "#prev-button",
                nextEl: "#next-button",
              }}
              pagination={{ enabled: false }}
            >
              <SwiperSlide>
                <Experience
                  imageSrc="/assets/manual.jpeg"
                  imageAlt="profile-picture"
                  role="Frontend Engineer"
                  companyName="MANUAL"
                  companyUrl="https://manual.co"
                  dates={["Oct 2022 - Present"]}
                >
                  <Text textAlign="justify">
                    Manual is a UK company focused on men&apos;s health, and in my current job, I
                    work as a Frontend Engineer dedicated to developing new features on the web
                    application in order to improve the user experience when it comes to taking care
                    of their health. Technologies: TypeScript, React & Next.js.
                  </Text>
                </Experience>
              </SwiperSlide>
              <SwiperSlide>
                <Experience
                  imageSrc="/assets/ortex.png"
                  imageAlt="profile-picture"
                  role="Frontend Engineer"
                  companyName="ORTEX"
                  companyUrl="https://ortex.com"
                  dates={["Mar 2021 - Sep 2022"]}
                >
                  <Text textAlign="justify">
                    ORTEX is a financial analytics company based in the UK in which I worked as a
                    Frontend Engineer developing from scratch the new web application that would
                    improve the user experience with the platform. Technologies: TypeScript, React &
                    Next.js.
                  </Text>
                </Experience>
              </SwiperSlide>
              <SwiperSlide>
                <Experience
                  imageSrc="/assets/bombieri.png"
                  imageAlt="profile-picture"
                  role="Programming Teacher"
                  companyName="BOMBIERI"
                  companyUrl="https://cdeluruguay.gob.ar/concepcion-de-programadores/"
                  dates={["Sep 2020 - Nov 2020", "May 2021 - Jul 2021"]}
                >
                  <VStack align="start">
                    <Text textAlign="justify">
                      On 2 occasions, I taught the basics of web development in a programme
                      implemented by BOMBIERI and the regional faculty to promote the local industry
                      and give the opportunity to people who wanted to take their first steps in the
                      IT world.
                    </Text>
                    <ListRoot listStylePos="inside">
                      <ListItem>Course Duration: 90hs (10 weeks).</ListItem>
                      <ListItem>
                        Curriculum: HTML, CSS, BootStrap, JavaScript, jQuery, GIT & GitHub.
                      </ListItem>
                    </ListRoot>
                  </VStack>
                </Experience>
              </SwiperSlide>
              <SwiperSlide>
                <Experience
                  imageSrc="/assets/bombieri.png"
                  imageAlt="profile-picture"
                  role="Frontend Developer"
                  companyName="BOMBIERI"
                  companyUrl="https://bombieri.us"
                  dates={["Sep 2019 - Feb 2021"]}
                >
                  <VStack align="start">
                    <Text textAlign="justify">
                      My first job as a software developer was for a software factory where I worked
                      for a client in the insurance industry. I started as a frontend developer and
                      after a few months, I moved to an agile team in which my first works were
                      related to the backend, but then I focused on the client side of the
                      applications we developed.
                    </Text>
                    <Text>What I did:</Text>
                    <ListRoot listStylePos="inside">
                      <ListItem>Responsive web and mobile development (Angular & Ionic).</ListItem>
                      <ListItem>
                        APIs and web services consumption and development (Java & Spring).
                      </ListItem>
                      <ListItem>Agile Methodologies (SCRUM).</ListItem>
                    </ListRoot>
                  </VStack>
                </Experience>
              </SwiperSlide>
              <IconButton
                id="prev-button"
                aria-label="Prev Experience"
                variant="ghost"
                size="lg"
                display="none"
                pos="absolute"
                zIndex={1}
                left={2}
                opacity={0.7}
                _disabled={{ opacity: 0.4 }}
                _hover={{ bg: "none", opacity: 1 }}
                _groupHover={{ display: "inline-flex" }}
                css={{
                  "& > svg": {
                    width: 10,
                    height: 10,
                  },
                }}
              >
                <FaChevronLeft />
              </IconButton>
              <IconButton
                id="next-button"
                aria-label="Next Experience"
                variant="ghost"
                size="lg"
                display="none"
                pos="absolute"
                zIndex={1}
                right={2}
                opacity={0.7}
                _disabled={{ opacity: 0.4 }}
                _hover={{ bg: "none", opacity: 1 }}
                _groupHover={{ display: "inline-flex" }}
                css={{
                  "& > svg": {
                    width: 10,
                    height: 10,
                  },
                }}
              >
                <FaChevronRight />
              </IconButton>
            </Swiper>
            <VisuallyHidden mt="0 !important" pos="absolute" top="-4.5rem" ref={experienceRef} />
          </VStack>
          <Separator my={4} borderColor={{ _dark: "gray.600", _light: "gray.300" }} />
          <VStack align="start" pos="relative">
            <Heading size="xl">Education</Heading>
            <Heading size="lg">Bachelor&apos;s in Industrial Management</Heading>
            <Text textAlign="justify">
              In 2015, I started studying the bachelor&apos;s degree in industrial management in the
              National Technological University (UTN). I finished 4° year.
            </Text>
            <Text textAlign="justify">
              This career helped me a lot to understand business, its processes, interactions, and
              above all, the relationship with technology and the help that software development
              provides to companies.
            </Text>
            <Text textAlign="justify">
              My favourite fields? Marketing and Operational Research.
            </Text>
            <VisuallyHidden mt="0 !important" pos="absolute" top="-4.5rem" ref={educationRef} />
          </VStack>
          <Separator my={4} borderColor={{ _dark: "gray.600", _light: "gray.300" }} />
          <VStack align="start" pos="relative">
            <Heading size="xl">Participations</Heading>
            <Heading size="lg">Digital Transformation Talk</Heading>
            <Text textAlign="justify">
              In October 2020, I gave a live virtual talk for university students about the process
              of digital transformation in companies, and how digital transformation helps growth
              even in times of crisis.{" "}
              <Link
                fontWeight={700}
                color="teal.400"
                _hover={{ color: "teal.600" }}
                href="https://www.youtube.com/watch?v=7fnpmdUoJb0"
                target="_blank"
              >
                Take a look at it!
              </Link>
            </Text>
            <VisuallyHidden
              mt="0 !important"
              pos="absolute"
              top="-4.5rem"
              ref={participationsRef}
            />
          </VStack>
          <Separator my={4} borderColor={{ _dark: "gray.600", _light: "gray.300" }} />
          <VStack align="start" pos="relative">
            <Heading size="xl">Technologies</Heading>
            <Stack
              direction={["column", "row"]}
              gap={4}
              w="100%"
              overflow="auto"
              className="hide-scrollbar"
            >
              <Technology
                title="Frontend"
                imageSrc="/assets/computer.svg"
                imageAlt="computer"
                technologies={[
                  "HTML - CSS - SASS",
                  "JavaScript - TypeScript",
                  "React - Angular",
                  "React Native - Ionic",
                  "Next.js",
                ]}
              />
              <Technology
                title="Backend"
                imageSrc="/assets/server.svg"
                imageAlt="server"
                technologies={[
                  "Node.js",
                  "REST APIs (Express.js)",
                  "GraphQL (Apollo)",
                  "SQL (PostgreSQL)",
                  "NoSQL (MondoDB)",
                ]}
              />
              <Technology
                title="Others"
                imageSrc="/assets/cloud.svg"
                imageAlt="cloud"
                technologies={[
                  "GIT",
                  "GNU/Linux",
                  "Docker",
                  "AWS (EC2, S3, RDS)",
                  "Agile Methodologies",
                ]}
              />
            </Stack>
            <VisuallyHidden mt="0 !important" pos="absolute" top="-4.5rem" ref={technologiesRef} />
          </VStack>
        </Box>
      </chakra.main>
      <Footer version={version} />
    </>
  );
};

export default Home;
