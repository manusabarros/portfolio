"use client";

import { FC, useRef } from "react";
import Header from "@/components/Header";
import Image from "@/components/Image";
import Experience from "@/components/Experience";
import Technology from "@/components/Technology";
import Footer from "@/components/Footer";
import {
  Box,
  Divider,
  HStack,
  Heading,
  IconButton,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
  VisuallyHidden,
  chakra,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home: FC<{ version: string }> = ({ version }) => {
  const { colorMode } = useColorMode();
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const participationsRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const swiperPrevBtnRef = useRef<HTMLButtonElement>(null);
  const swiperNextBtnRef = useRef<HTMLButtonElement>(null);

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
          height: 185px;
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
          <Image
            src="/assets/cover.jpg"
            alt="cover"
            // @ts-ignore
            fill
            objectFit="cover"
            objectPosition="bottom"
          />
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
            {/* @ts-ignore */}
            <Image src="/assets/profile-picture.jpg" alt="manusabarros" fill borderRadius="full" />
          </Box>
          <Heading size="lg" fontSize="2xl">
            Manu Sabarrós
          </Heading>
          <Heading size="md">Frontend Engineer</Heading>
          <Link href="mailto:hello@manusabarros.com" _hover={{ color: "gray.500" }}>
            hello@manusabarros.com
          </Link>
          <HStack>
            <Link href="https://www.linkedin.com/in/manuel-sabarros" target="_blank">
              <Box w="30px" h="30px" pos="relative">
                {/* @ts-ignore */}
                <Image src="/assets/linkedin.png" alt="linkedin" fill />
              </Box>
            </Link>
            <Link href="https://github.com/manusabarros" target="_blank">
              <Box w="30px" h="30px" pos="relative">
                {colorMode === "dark" ? (
                  <Image
                    src="/assets/github.png"
                    alt="linkedin"
                    filter="invert(1)"
                    // @ts-ignore
                    fill
                  />
                ) : (
                  <Image
                    src="/assets/github.png"
                    alt="linkedin"
                    // @ts-ignore
                    fill
                  />
                )}
              </Box>
            </Link>
          </HStack>
        </VStack>
        <Box maxW={800} p={5} pb={0} m="auto">
          <VStack align="start" pos="relative">
            <Heading size="md">About Me</Heading>
            <Text align="justify">
              Hi! Nice to meet you! My name is Manuel Sabarrós and I&apos;m a software developer
              living in Portugal.
            </Text>
            <Text align="justify">
              I have experience in fullstack development, but my main expertise is the frontend
              world. I love developing beautiful websites and mobile apps and creating platforms
              with great design.
            </Text>
            <Text align="justify">
              Technology is my passion! I&apos;m always learning new things to add to my skill set,
              especially modern ones, so that I can help by adding value to projects and delivering
              a high quality product.
            </Text>
            <Text align="justify">
              And last but not least, I have ease for business analysis due to the degree I studied,
              so I can collaborate with solutions for many areas of an organization.
            </Text>
            <VisuallyHidden mt="0 !important" pos="absolute" top="-4.5rem" ref={aboutMeRef} />
          </VStack>
          <Divider my={4} borderColor={colorMode === "dark" ? "gray.600" : "gray.300"} />
          <VStack align="start" pos="relative">
            <Heading size="md" mb={2}>
              Experience
            </Heading>
            <Swiper
              slidesPerView="auto"
              spaceBetween={20}
              role="group"
              modules={[Navigation, Pagination]}
              navigation={{
                enabled: true,
                prevEl: swiperPrevBtnRef.current,
                nextEl: swiperNextBtnRef.current,
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
                  <Text align="justify">
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
                  <Text align="justify">
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
                    <Text align="justify">
                      On 2 occasions, I taught the basics of web development in a programme
                      implemented by BOMBIERI and the regional faculty to promote the local industry
                      and give the opportunity to people who wanted to take their first steps in the
                      IT world.
                    </Text>
                    <UnorderedList listStylePos="inside">
                      <ListItem>Course Duration: 90hs (10 weeks).</ListItem>
                      <ListItem>
                        Curriculum: HTML, CSS, BootStrap, JavaScript, jQuery, GIT & GitHub.
                      </ListItem>
                    </UnorderedList>
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
                    <Text align="justify">
                      My first job as a software developer was for a software factory where I worked
                      for a client in the insurance industry. I started as a frontend developer and
                      after a few months, I moved to an agile team in which my first works were
                      related to the backend, but then I focused on the client side of the
                      applications we developed.
                    </Text>
                    <Text>What I did:</Text>
                    <UnorderedList listStylePos="inside">
                      <ListItem>Responsive web and mobile development (Angular & Ionic).</ListItem>
                      <ListItem>
                        APIs and web services consumption and development (Java & Spring).
                      </ListItem>
                      <ListItem>Agile Methodologies (SCRUM).</ListItem>
                    </UnorderedList>
                  </VStack>
                </Experience>
              </SwiperSlide>
              <IconButton
                ref={swiperPrevBtnRef}
                icon={<ChevronLeftIcon />}
                aria-label="Prev Experience"
                display="none"
                w={5}
                h={10}
                minW={5}
                fontSize={40}
                pos="absolute"
                zIndex={1}
                left={2}
                bg="none"
                opacity={0.7}
                _groupHover={{ display: "inline-flex" }}
                _hover={{ bg: "none", opacity: 1, _disabled: { opacity: 0.4 } }}
              />
              <IconButton
                ref={swiperNextBtnRef}
                icon={<ChevronRightIcon />}
                aria-label="Next Experience"
                display="none"
                w={5}
                h={10}
                minW={5}
                fontSize={40}
                pos="absolute"
                zIndex={1}
                right={2}
                bg="none"
                opacity={0.7}
                _groupHover={{ display: "inline-flex" }}
                _hover={{ bg: "none", opacity: 1, _disabled: { opacity: 0.4 } }}
              />
            </Swiper>
            <VisuallyHidden mt="0 !important" pos="absolute" top="-4.5rem" ref={experienceRef} />
          </VStack>
          <Divider my={4} borderColor={colorMode === "dark" ? "gray.600" : "gray.300"} />
          <VStack align="start" pos="relative">
            <Heading size="md">Education</Heading>
            <Heading size="sm" fontSize="lg">
              Bachelor&apos;s in Industrial Management
            </Heading>
            <Text align="justify">
              In 2015, I started studying the bachelor&apos;s degree in industrial management in the
              National Technological University (UTN). I finished 4° year.
            </Text>
            <Text align="justify">
              This career helped me a lot to understand business, its processes, interactions, and
              above all, the relationship with technology and the help that software development
              provides to companies.
            </Text>
            <Text align="justify">My favourite fields? Marketing and Operational Research.</Text>
            <VisuallyHidden mt="0 !important" pos="absolute" top="-4.5rem" ref={educationRef} />
          </VStack>
          <Divider my={4} borderColor={colorMode === "dark" ? "gray.600" : "gray.300"} />
          <VStack align="start" pos="relative">
            <Heading size="md">Participations</Heading>
            <Heading size="sm" fontSize="lg">
              Digital Transformation Talk
            </Heading>
            <Text align="justify">
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
          <Divider my={4} borderColor={colorMode === "dark" ? "gray.600" : "gray.300"} />
          <VStack align="start" pos="relative">
            <Heading size="md" mb={2}>
              Technologies
            </Heading>
            <Stack
              direction={["column", "row"]}
              spacing={4}
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
