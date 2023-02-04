import React from "react";
import { Grid, Box, Flex, Heading, Description } from "atoms";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InterestingFacts } from "molecules/Cards";

const FactsData = [
  {
    id: 1,
    src: "/images/didyouknow/facts-03.webp",
    title: "IDP - (Intelligent Data Processor)",
    pointer: [
      {
        id: 1,
        listText:
          "Our IDP (Intelligent Data Processor) software uses AI and NLP to process and analyze large amounts of data in real-time.",
      },
      {
        id: 2,
        listText:
          "It can extract, transform, load data, clean, enrich structure it, identify patterns and anomalies and generate insights using machine learning algorithms.",
      },
      {
        id: 3,
        listText:
          "It can be used in various industries and can be integrated with other systems, but there are concerns about errors and bias in the processed data.",
      },
    ],
  },

  {
    id: 2,
    src: "/images/didyouknow/facts-05.webp",
    title: "IDE - (Intelligent Data Extractors)",
    pointer: [
      {
        id: 1,
        listText:
          "Intelligent Data Extractors use AI and NLP to extract information from unstructured data sources.",
      },
      {
        id: 2,
        listText:
          "These tools can be trained to identify patterns, handle large amounts of data, and improve accuracy through machine learning.",
      },
      {
        id: 3,
        listText:
          "The use of IDE is expected to increase in popularity, become a standard in data integration, automate extraction tasks, and improve data quality.",
      },
    ],
  },

  {
    id: 3,
    src: "/images/didyouknow/facts-04.webp",
    title: "Facts about AI",
    pointer: [
      {
        id: 1,
        listText:
          "AI refers to the simulation of human intelligence in machines that can think and learn.",
      },
      {
        id: 2,
        listText:
          "AI can be divided into two categories: narrow AI for specific tasks and general AI for any intellectual task that a human can perform.",
      },
      {
        id: 3,
        listText:
          "Machine learning, a subset of AI, uses data to teach computers to learn, while deep learning uses neural networks with multiple layers to analyze and make decisions based on data.",
      },
    ],
  },

  {
    id: 4,
    src: "/images/didyouknow/facts-06.webp",
    title: "Facts about Hyper Automation",
    pointer: [
      {
        id: 1,
        listText:
          "Hyper automation refers to the use of advanced technologies such as AI, ML, and RPA to automate business processes and tasks, resulting in cost savings, increased efficiency and productivity.",
      },
      {
        id: 2,
        listText:
          "Gartner predicts that hyper automation will be a significant trend in the near future, with 20% of businesses using it to automate processes by 2020 and 40% of DPA efforts supported by it by 2021.",
      },
      {
        id: 3,
        listText:
          "Gartner advises organizations to implement hyper automation in a controlled manner and to consider the potential impact on the workforce, as there is a concern about job displacement and the need for proper monitoring and validation of the automated processes.",
      },
    ],
  },

  // {
  //   id: 1,
  //   src: "/images/didyouknow/facts-01.png",
  //   title: "IDP - Intelligent Data Processor",
  //   pointer: [
  //     {
  //       id: 1,
  //       listText:
  //         "Intelligent Data Processor (IDP) is a software or tool that uses artificial intelligence (AI) and natural language processing (NLP) to process and analyze large amounts of data in real-time.",
  //     },
  //     {
  //       id: 2,
  //       listText:
  //         "IDP can be used to extract, transform, and load (ETL) data from various sources, such as databases, text documents, and social media, and then clean, enrich, and structure it for further analysis.",
  //     },
  //     {
  //       id: 3,
  //       listText:
  //         "IDP can also be used to identify patterns and anomalies in the data, as well as to make predictions and generate insights.",
  //     },
  //     {
  //       id: 4,
  //       listText:
  //         "IDP can be used in various industries such as healthcare, finance, and e-commerce to extract valuable insights from large amounts of data.",
  //     },
  //     {
  //       id: 5,
  //       listText:
  //         "IDP can be integrated with other systems, such as data visualization and storage systems, to provide a complete solution for data processing and analysis.",
  //     },
  //     {
  //       id: 6,
  //       listText:
  //         "The accuracy and performance of IDP can be improved with the use of machine learning algorithms, which enable the software to learn from previously processed data and improve its performance over time.",
  //     },
  //     {
  //       id: 7,
  //       listText:
  //         "IDP can also be used in real-time data stream processing, and it can be used to monitor and analyze data from IoT devices in real-time.",
  //     },
  //     {
  //       id: 8,
  //       listText:
  //         "However, there are also concerns about the potential for errors and bias in the processed data, and the need for proper monitoring and validation of the processed data.",
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   src: "/images/didyouknow/facts-02.png",
  //   title: "IDE - Intelligent Data Extractor",
  //   pointer: [
  //     {
  //       id: 1,
  //       listText:
  //         "An intelligent data extractor is a type of software or tool that uses artificial intelligence (AI) and natural language processing (NLP) to extract relevant information from unstructured data sources such as text documents, emails, social media, and websites.",
  //     },
  //     {
  //       id: 2,
  //       listText:
  //         "Intelligent data extractors can be used to extract various types of information such as names, addresses, phone numbers, dates, and prices.",
  //     },
  //     {
  //       id: 3,
  //       listText:
  //         "These tools can be trained to identify specific patterns in the data and extract information accordingly, making it more efficient than manual data extraction.",
  //     },
  //     {
  //       id: 4,
  //       listText:
  //         "They can also handle large amounts of data in a short amount of time and can be integrated with other systems, such as data analytics and storage systems.",
  //     },
  //     {
  //       id: 5,
  //       listText:
  //         "The accuracy of an intelligent data extractor can be improved with the use of machine learning algorithms, which enable the software to learn from previously extracted data and improve its performance over time.",
  //     },
  //     {
  //       id: 6,
  //       listText:
  //         "Intelligent data extractors can be used in various industries such as healthcare, finance, and e-commerce to extract valuable insights from large amounts of data.",
  //     },
  //     {
  //       id: 7,
  //       listText:
  //         "However, there are also concerns about the potential for errors and bias in the extracted data, and the need for proper monitoring and validation of the extracted data.",
  //     },
  //   ],
  // },

  // {
  //   id: 3,
  //   src: "/images/didyouknow/facts-03.png",
  //   title: "IDE - Intelligent Data Extractor",
  //   pointer: [
  //     {
  //       id: 1,
  //       listText:
  //         "According to Gartner, by 2025, intelligent data extraction (IDE) will be a standard feature in 80% of all data integration tools, and by 2023, IDE will be the standard for 90% of all data extraction projects.",
  //     },
  //     {
  //       id: 1,
  //       listText:
  //         "Gartner also predicts that by 2025, the use of IDE will enable organizations to automate 50% of data extraction tasks, reducing human error and increasing efficiency. Additionally, Gartner predicts that by 2022, the use of IDE will improve data quality by 30%.",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   src: "/images/didyouknow/facts-04.png",
  //   title: "AI - Artificial Intelligence",
  //   pointer: [
  //     {
  //       id: 1,
  //       listText:
  //         "AI, or artificial intelligence, refers to the simulation of human intelligence in machines that are programmed to think and learn.",
  //     },
  //     {
  //       id: 2,
  //       listText:
  //         "AI can be divided into two main categories: narrow or weak AI, which is designed to perform specific tasks, and general or strong AI, which has the ability to perform any intellectual task that a human can.",
  //     },
  //     {
  //       id: 3,
  //       listText:
  //         "Machine learning, a subset of AI, is a method of teaching computers to learn from data without being explicitly programmed.",
  //     },
  //     {
  //       id: 4,
  //       listText:
  //         "Deep learning, a subfield of machine learning, uses neural networks with multiple layers to analyze and make decisions based on data.",
  //     },
  //     {
  //       id: 5,
  //       listText:
  //         "AI is being used in a wide range of industries, including healthcare, finance, transportation, and e-commerce.",
  //     },
  //     {
  //       id: 6,
  //       listText:
  //         "Some potential benefits of AI include increased efficiency and accuracy, improved decision-making, and the ability to automate repetitive tasks.",
  //     },
  //     {
  //       id: 7,
  //       listText:
  //         "Some potential concerns with AI include job displacement, bias in decision-making, and the potential misuse of the technology.",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   src: "/images/didyouknow/facts-05.png",
  //   title: "HyperAutomation",
  //   pointer: [
  //     {
  //       id: 1,
  //       listText:
  //         "Hyper automation refers to the use of advanced technologies, such as artificial intelligence (AI), machine learning (ML), and robotic process automation (RPA), to automate repetitive and manual tasks across an organization.",
  //     },
  //     {
  //       id: 2,
  //       listText:
  //         "Hyper automation aims to automate not just individual tasks, but entire business processes, resulting in significant cost savings, improved efficiency, and increased productivity.",
  //     },
  //     {
  //       id: 3,
  //       listText:
  //         "Hyper automation can be used to automate tasks across various industries, including finance, healthcare, and manufacturing.",
  //     },
  //     {
  //       id: 4,
  //       listText:
  //         "Some of the benefits of hyper automation include improved accuracy, faster processing times, and the ability to analyze large amounts of data in real-time.",
  //     },
  //     {
  //       id: 5,
  //       listText:
  //         "Hyper automation can also lead to increased job opportunities, as it frees up employees from repetitive tasks, allowing them to focus on higher-value activities.",
  //     },
  //     {
  //       id: 6,
  //       listText:
  //         "Hyper automation can also be used to improve decision-making by providing real-time insights into business processes, enabling organizations to identify and address inefficiencies.",
  //     },
  //     {
  //       id: 7,
  //       listText:
  //         "However, there is also a concern about the potential for job displacement and the need for proper monitoring and validation of the automated processes.",
  //     },
  //     {
  //       id: 8,
  //       listText:
  //         "Hyper automation can be considered as the next step of Automation, where it covers a wider scope of automation and more sophisticated use of technologies.",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   src: "/images/didyouknow/facts-06.png",
  //   title: "HyperAutomation",
  //   pointer: [
  //     {
  //       id: 1,
  //       listText:
  //         "According to Gartner, Hyperautomation is the advanced automation of processes, decisions, and activities across an organization. Hyperautomation goes beyond the scope of traditional automation, by including technologies such as Robotic Process Automation (RPA), AI and Machine Learning (ML).",
  //     },
  //     {
  //       id: 2,
  //       listText:
  //         "Gartner predicts that by 2020, 20% of businesses will use Hyperautomation to automate processes, and by 2021, 40% of all digital process automation (DPA) efforts will be supported by Hyperautomation technologies. Gartner also states that by 2022, Hyperautomation will be in the top 10 strategic technology trends.",
  //     },
  //     {
  //       id: 3,
  //       listText:
  //         "Gartner also notes that Hyperautomation can improve the speed, quality, and accuracy of business processes, and enable organizations to make better decisions. Hyperautomation can also help organizations to improve customer experience, reduce costs, and increase revenue.",
  //     },
  //     {
  //       id: 4,
  //       listText:
  //         "Gartner advises organizations to implement Hyperautomation in a controlled and incremental manner, and to consider the potential impact on the workforce.",
  //     },
  //     {
  //       id: 5,
  //       listText:
  //         "Gartner predicts that Hyperautomation will become a significant trend in the near future, and that it can bring significant benefits to organizations by improving the speed, quality, and accuracy of business processes. However, organizations should also be aware of the potential risks and implement Hyperautomation in a controlled and incremental manner.",
  //     },
  //   ],
  // },
];

const didData = [
  { id: 1, url: "/images/did-imge/Dolomites_5.webp", alt: "Dolomites_5" },
  { id: 2, url: "/images/did-imge/Dolomites_6.webp", alt: "Dolomites_5" },
  { id: 3, url: "/images/did-imge/Dolomites_7.webp", alt: "Dolomites_5" },
  { id: 4, url: "/images/did-imge/Dolomites_8.webp", alt: "Dolomites_5" },
  { id: 5, url: "/images/did-imge/Dolomites_9.webp", alt: "Dolomites_5" },
  { id: 6, url: "/images/did-imge/Dolomites_18.webp", alt: "Dolomites_5" },
  { id: 7, url: "/images/did-imge/Dolomites_19.webp", alt: "Dolomites_5" },
  { id: 8, url: "/images/did-imge/Dolomites_21.webp", alt: "Dolomites_5" },
  { id: 9, url: "/images/did-imge/Dolomites_22.webp", alt: "Dolomites_5" },
  { id: 10, url: "/images/did-imge/Dolomites_23.webp", alt: "Dolomites_5" },
  { id: 11, url: "/images/did-imge/Dolomites_24.webp", alt: "Dolomites_5" },
  { id: 12, url: "/images/did-imge/Dolomites_25.webp", alt: "Dolomites_5" },
  { id: 13, url: "/images/did-imge/Dolomites_26.webp", alt: "Dolomites_5" },
  { id: 14, url: "/images/did-imge/Dolomites_27.webp", alt: "Dolomites_5" },
  { id: 14, url: "/images/did-imge/Dolomites_28.webp", alt: "Dolomites_5" },
  { id: 16, url: "/images/did-imge/Dolomites_29.webp", alt: "Dolomites_5" },
  { id: 17, url: "/images/did-imge/Dolomites_31.webp", alt: "Dolomites_5" },
  { id: 17, url: "/images/did-imge/Dolomites_34.webp", alt: "Dolomites_5" },
  { id: 19, url: "/images/did-imge/Dolomites_36.webp", alt: "Dolomites_5" },
  { id: 20, url: "/images/did-imge/Dolomites_37.webp", alt: "Dolomites_5" },
  { id: 21, url: "/images/did-imge/Dolomites_38.webp", alt: "Dolomites_5" },
  { id: 22, url: "/images/did-imge/Dolomites_39.webp", alt: "Dolomites_5" },
  { id: 23, url: "/images/did-imge/Dolomites_40.webp", alt: "Dolomites_5" },
  { id: 24, url: "/images/did-imge/Dolomites_41.webp", alt: "Dolomites_5" },
  { id: 25, url: "/images/did-imge/Dolomites_42.webp", alt: "Dolomites_5" },
  { id: 26, url: "/images/did-imge/Dolomites_43.webp", alt: "Dolomites_5" },
  { id: 27, url: "/images/did-imge/Dolomites_44.webp", alt: "Dolomites_5" },
  { id: 28, url: "/images/did-imge/Dolomites_45.webp", alt: "Dolomites_5" },
  { id: 29, url: "/images/did-imge/Dolomites_46.webp", alt: "Dolomites_5" },
  { id: 30, url: "/images/did-imge/Dolomites_47.webp", alt: "Dolomites_5" },
  { id: 31, url: "/images/did-imge/Dolomites_48.webp", alt: "Dolomites_5" },
  { id: 32, url: "/images/did-imge/Dolomites_50.webp", alt: "Dolomites_5" },
  { id: 33, url: "/images/did-imge/Dolomites_51.webp", alt: "Dolomites_5" },
  { id: 34, url: "/images/did-imge/Dolomites_52.webp", alt: "Dolomites_5" },
  { id: 35, url: "/images/did-imge/Dolomites_53.webp", alt: "Dolomites_5" },
  { id: 36, url: "/images/did-imge/Dolomites_55.webp", alt: "Dolomites_5" },
  { id: 37, url: "/images/did-imge/Dolomites_56.webp", alt: "Dolomites_5" },
  { id: 38, url: "/images/did-imge/Dolomites_58.webp", alt: "Dolomites_5" },
  { id: 39, url: "/images/did-imge/Dolomites_59.webp", alt: "Dolomites_5" },
  { id: 40, url: "/images/did-imge/Dolomites_60.webp", alt: "Dolomites_5" },
  { id: 41, url: "/images/did-imge/Dolomites_61.webp", alt: "Dolomites_5" },
  { id: 42, url: "/images/did-imge/Dolomites_62.webp", alt: "Dolomites_5" },
  { id: 43, url: "/images/did-imge/Dolomites_64.webp", alt: "Dolomites_5" },
  { id: 44, url: "/images/did-imge/Dolomites_65.webp", alt: "Dolomites_5" },
  { id: 45, url: "/images/did-imge/Dolomites_68.webp", alt: "Dolomites_5" },
  { id: 46, url: "/images/did-imge/Dolomites_71.webp", alt: "Dolomites_5" },
  { id: 47, url: "/images/did-imge/Dolomites_72.webp", alt: "Dolomites_5" },
  { id: 48, url: "/images/did-imge/Dolomites_73.webp", alt: "Dolomites_5" },
  { id: 49, url: "/images/did-imge/Dolomites_74.webp", alt: "Dolomites_5" },
  { id: 50, url: "/images/did-imge/Dolomites_75.webp", alt: "Dolomites_5" },
  { id: 51, url: "/images/did-imge/Dolomites_76.webp", alt: "Dolomites_5" },
];

export const DidYouKnow = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const settingsdid = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box
        as="section"
        p={{
          xs: "4rem 0rem",
          md: "5rem 4rem",
          xm: "5rem 6rem",
          lg: "6rem 12rem",
        }}
        mt="8rem"
        bg="primary.2400"
        maxWidth={{ lg: "100%", xl: "144rem" }}
        mx={{ xl: "auto" }}
      >
        <Heading textAlign="center" Heading="Did You Know?" />

        <Grid
          mt="5rem"
          gridTemplateColumns={{ xm: "2fr 1fr" }}
          gridColumnGap="3rem"
          gridRowGap="3rem"
          alignItems="center"
        >
          <Box
            width={{ xs: "100vw", md: "50vw" }}
            // pl={{ xs: "1.4rem", md: "unset" }}
          >
            <Slider {...settingsdid}>
              {didData.map((items, index) => {
                return (
                  <>
                    <Box
                      pl={{ xs: "1.2rem", md: ".5rem" }}
                      pr={{ xs: "1.2rem", md: ".5rem" }}
                    >
                      <Box
                        key={index}
                        width={{ xs: "17rem", xm: "23rem" }}
                        height={{ xs: "31.4rem", xm: "42.6rem" }}
                        border=".2rem solid"
                        borderColor="primary.1800"
                        borderRadius="1.5rem"
                        className="image-15"
                      >
                        <Image
                          src={items?.url}
                          alt={items?.alt}
                          quality={100}
                          width={230}
                          height={428}
                          objectFit="contain"
                        />
                      </Box>
                    </Box>
                  </>
                );
              })}
            </Slider>
          </Box>

          <Flex justifyContent={{ xs: "center", xm: "end" }}>
            <Box
              width={{ xs: "30rem", xm: "50rem" }}
              // width="100%"
              height={{ xs: "25.6rem", xm: "42.6rem" }}
              className="image-30"
            >
              <Image
                src="/images/home-2.webp"
                alt="home-1"
                quality={100}
                width={500}
                height={426}
                // layout="fill"
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Grid>
      </Box>

      {/* <Box
        as="section"
        py={{
          xs: "4rem",
          md: "5rem",
          xm: "6rem",
          lg: "8rem",
        }}
        mt="8rem"
        bg="primary.2400"
        maxWidth={{ lg: "100%", xl: "144rem" }}
        mx={{ xl: "auto" }}
      >
        <Heading
          mb={{ xs: "2rem", md: "4rem" }}
          textAlign="center"
          Heading="Did You Know?"
        />
        <Grid           
          gridColumnGap="2.2rem"
          overflowX="scroll"
          gridAutoFlow="column"
          justifyContent="flex-start"
          className="hide-scrollbar"
          px={{ xs: "2.4rem", md: "4rem", xm: "6rem", lg: "12rem" }}
        >
          {didData.map((items, index) => {
            return (
              <Box
                key={index}
                width={{ xs: "18rem", xm: "23rem" }}
                height={{ xs: "33.3rem", xm: "42.6rem" }}
                border=".2rem solid"
                borderColor="primary.1800"
                borderRadius="1.5rem"
                className="image-15"
              >
                <Image
                  src={items?.url}
                  alt={items?.alt}
                  quality={100}
                  width={230}
                  height={428}
                  objectFit="contain"
                />
              </Box>
            );
          })}
        </Grid>
      </Box> */}

      <Box
        as="section"
        px={{
          xs: "2.4rem",
          md: "4rem",
          xm: "6rem",
          lg: "12rem",
        }}
        pb={{
          xs: "4rem",
          md: "5rem",
          xm: "5rem",
          lg: "6rem",
        }}
        bg="primary.2400"
        maxWidth={{ lg: "100%", xl: "144rem" }}
        mx={{ xl: "auto" }}
      >
        <Heading textAlign="center" Heading="Interesting Facts" />
        <Slider {...settings}>
          {FactsData.map((items, index) => {
            return (
              <InterestingFacts
                key={index}
                src={items?.src}
                title={items?.title}
                pointer={items?.pointer}
              />
            );
          })}
        </Slider>
      </Box>
    </>
  );
};
