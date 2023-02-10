import { useRef } from "react";
import {
  Box,
  chakra,
  Divider,
  Heading,
  HStack,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useColorMode,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import Image from "@/components/Image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Technology from "@/components/Technology";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const HomePage = () => {
  const { colorMode } = useColorMode();
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
      <Head>
        <title>Manu Sabarrós</title>
        <link rel="canonical" href="https://manusabarros.com/" />
        <meta
          name="description"
          content="Manuel Sabarrós' Portfolio. Software Developer based in Portugal"
        />
        <meta
          name="keywords"
          content="Manuel Sabarrós, Manu Sabarrós, software, developer, frontend, front end, front-end, backend, back end, back-end, fullstack, full stack, full-stack, web developer, mobile developer, react developer, react, next js, next.js, react native, node js"
        />

        <meta name="twitter:title" content="Manu Sabarrós" />
        <meta
          name="twitter:description"
          content="Manuel Sabarrós' Portfolio. Software Developer based in Portugal"
        />
        <meta name="twitter:url" content="https://manusabarros.com/" />

        <meta property="og:title" content="Manu Sabarrós" />
        <meta
          property="og:description"
          content="Manuel Sabarrós' Portfolio. Software Developer based in Portugal"
        />
        <meta property="og:url" content="https://manusabarros.com/" />
      </Head>
      <style jsx global>{`
        .swiper {
          width: 100%;
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
              And last but not least, I have ease for business analysis due to the degree I&apos;m
              currently studying, so I can collaborate with solutions for many areas of an
              organization.
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
              modules={[Pagination]}
              pagination={{ enabled: false }}
              spaceBetween={20}
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
                    Manual is a company focused on improving men&apos;s health, and in my current
                    role, I am dedicated to developing new features on the website that help
                    men&apos;s experience when it comes to taking care of their health.
                    Technologies: React & Next.js.
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
                    After learning a lot from my last experiences, I felt it was time to take a leap
                    into an international experience. So I arrived at this fantastic fintech where I
                    was dedicated to developing the new web application that would improve the user
                    experience with the platform. Technologies: React & Next.js.
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
                      I started as a frontend developer, but after a few month I moved to an agile
                      team for a client in the insurance industry, and in there, my first works were
                      related to the backend. Then I focused on the client side of the applications
                      we developed.
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
              Since 2015, I&apos;m studying the bachelor&apos;s degree in industrial management in
              the National Technological University (UTN). I finished 4° year.
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
      <Footer />
    </>
  );
};

export default HomePage;
