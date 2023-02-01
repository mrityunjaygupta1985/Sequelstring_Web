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
    src: "/images/didyouknow/facts-01.png",
    title: "IDP - Intelligent Data Processor",
    pointer: [
      {
        id: 1,
        listText:
          "Intelligent Data Processor (IDP) is a software or tool that uses artificial intelligence (AI) and natural language processing (NLP) to process and analyze large amounts of data in real-time.",
      },
      {
        id: 2,
        listText:
          "IDP can be used to extract, transform, and load (ETL) data from various sources, such as databases, text documents, and social media, and then clean, enrich, and structure it for further analysis.",
      },
      {
        id: 3,
        listText:
          "IDP can also be used to identify patterns and anomalies in the data, as well as to make predictions and generate insights.",
      },
      {
        id: 4,
        listText:
          "IDP can be used in various industries such as healthcare, finance, and e-commerce to extract valuable insights from large amounts of data.",
      },
      {
        id: 5,
        listText:
          "IDP can be integrated with other systems, such as data visualization and storage systems, to provide a complete solution for data processing and analysis.",
      },
      {
        id: 6,
        listText:
          "The accuracy and performance of IDP can be improved with the use of machine learning algorithms, which enable the software to learn from previously processed data and improve its performance over time.",
      },
      {
        id: 7,
        listText:
          "IDP can also be used in real-time data stream processing, and it can be used to monitor and analyze data from IoT devices in real-time.",
      },
      {
        id: 8,
        listText:
          "However, there are also concerns about the potential for errors and bias in the processed data, and the need for proper monitoring and validation of the processed data.",
      },
    ],
  },
  {
    id: 2,
    src: "/images/didyouknow/facts-02.png",
    title: "IDE - Intelligent Data Extractor",
    pointer: [
      {
        id: 1,
        listText:
          "An intelligent data extractor is a type of software or tool that uses artificial intelligence (AI) and natural language processing (NLP) to extract relevant information from unstructured data sources such as text documents, emails, social media, and websites.",
      },
      {
        id: 2,
        listText:
          "Intelligent data extractors can be used to extract various types of information such as names, addresses, phone numbers, dates, and prices.",
      },
      {
        id: 3,
        listText:
          "These tools can be trained to identify specific patterns in the data and extract information accordingly, making it more efficient than manual data extraction.",
      },
      {
        id: 4,
        listText:
          "They can also handle large amounts of data in a short amount of time and can be integrated with other systems, such as data analytics and storage systems.",
      },
      {
        id: 5,
        listText:
          "The accuracy of an intelligent data extractor can be improved with the use of machine learning algorithms, which enable the software to learn from previously extracted data and improve its performance over time.",
      },
      {
        id: 6,
        listText:
          "Intelligent data extractors can be used in various industries such as healthcare, finance, and e-commerce to extract valuable insights from large amounts of data.",
      },
      {
        id: 7,
        listText:
          "However, there are also concerns about the potential for errors and bias in the extracted data, and the need for proper monitoring and validation of the extracted data.",
      },
    ],
  },

  {
    id: 3,
    src: "/images/didyouknow/facts-03.png",
    title: "IDE - Intelligent Data Extractor",
    pointer: [
      {
        id: 1,
        listText:
          "According to Gartner, by 2025, intelligent data extraction (IDE) will be a standard feature in 80% of all data integration tools, and by 2023, IDE will be the standard for 90% of all data extraction projects.",
      },
      {
        id: 1,
        listText:
          "Gartner also predicts that by 2025, the use of IDE will enable organizations to automate 50% of data extraction tasks, reducing human error and increasing efficiency. Additionally, Gartner predicts that by 2022, the use of IDE will improve data quality by 30%.",
      },
    ],
  },
  {
    id: 4,
    src: "/images/didyouknow/facts-04.png",
    title: "AI - Artificial Intelligence",
    pointer: [
      {
        id: 1,
        listText:
          "AI, or artificial intelligence, refers to the simulation of human intelligence in machines that are programmed to think and learn.",
      },
      {
        id: 2,
        listText:
          "AI can be divided into two main categories: narrow or weak AI, which is designed to perform specific tasks, and general or strong AI, which has the ability to perform any intellectual task that a human can.",
      },
      {
        id: 3,
        listText:
          "Machine learning, a subset of AI, is a method of teaching computers to learn from data without being explicitly programmed.",
      },
      {
        id: 4,
        listText:
          "Deep learning, a subfield of machine learning, uses neural networks with multiple layers to analyze and make decisions based on data.",
      },
      {
        id: 5,
        listText:
          "AI is being used in a wide range of industries, including healthcare, finance, transportation, and e-commerce.",
      },
      {
        id: 6,
        listText:
          "Some potential benefits of AI include increased efficiency and accuracy, improved decision-making, and the ability to automate repetitive tasks.",
      },
      {
        id: 7,
        listText:
          "Some potential concerns with AI include job displacement, bias in decision-making, and the potential misuse of the technology.",
      },
    ],
  },
  {
    id: 5,
    src: "/images/didyouknow/facts-05.png",
    title: "HyperAutomation",
    pointer: [
      {
        id: 1,
        listText:
          "Hyper automation refers to the use of advanced technologies, such as artificial intelligence (AI), machine learning (ML), and robotic process automation (RPA), to automate repetitive and manual tasks across an organization.",
      },
      {
        id: 2,
        listText:
          "Hyper automation aims to automate not just individual tasks, but entire business processes, resulting in significant cost savings, improved efficiency, and increased productivity.",
      },
      {
        id: 3,
        listText:
          "Hyper automation can be used to automate tasks across various industries, including finance, healthcare, and manufacturing.",
      },
      {
        id: 4,
        listText:
          "Some of the benefits of hyper automation include improved accuracy, faster processing times, and the ability to analyze large amounts of data in real-time.",
      },
      {
        id: 5,
        listText:
          "Hyper automation can also lead to increased job opportunities, as it frees up employees from repetitive tasks, allowing them to focus on higher-value activities.",
      },
      {
        id: 6,
        listText:
          "Hyper automation can also be used to improve decision-making by providing real-time insights into business processes, enabling organizations to identify and address inefficiencies.",
      },
      {
        id: 7,
        listText:
          "However, there is also a concern about the potential for job displacement and the need for proper monitoring and validation of the automated processes.",
      },
      {
        id: 8,
        listText:
          "Hyper automation can be considered as the next step of Automation, where it covers a wider scope of automation and more sophisticated use of technologies.",
      },
    ],
  },
  {
    id: 6,
    src: "/images/didyouknow/facts-06.png",
    title: "HyperAutomation",
    pointer: [
      {
        id: 1,
        listText:
          "According to Gartner, Hyperautomation is the advanced automation of processes, decisions, and activities across an organization. Hyperautomation goes beyond the scope of traditional automation, by including technologies such as Robotic Process Automation (RPA), AI and Machine Learning (ML).",
      },
      {
        id: 2,
        listText:
          "Gartner predicts that by 2020, 20% of businesses will use Hyperautomation to automate processes, and by 2021, 40% of all digital process automation (DPA) efforts will be supported by Hyperautomation technologies. Gartner also states that by 2022, Hyperautomation will be in the top 10 strategic technology trends.",
      },
      {
        id: 3,
        listText:
          "Gartner also notes that Hyperautomation can improve the speed, quality, and accuracy of business processes, and enable organizations to make better decisions. Hyperautomation can also help organizations to improve customer experience, reduce costs, and increase revenue.",
      },
      {
        id: 4,
        listText:
          "Gartner advises organizations to implement Hyperautomation in a controlled and incremental manner, and to consider the potential impact on the workforce.",
      },
      {
        id: 5,
        listText:
          "Gartner predicts that Hyperautomation will become a significant trend in the near future, and that it can bring significant benefits to organizations by improving the speed, quality, and accuracy of business processes. However, organizations should also be aware of the potential risks and implement Hyperautomation in a controlled and incremental manner.",
      },
    ],
  },
];

const didData = [
  { id: 1, url: "/images/did-imge/Dolomites_5.png", alt: "Dolomites_5" },
  { id: 2, url: "/images/did-imge/Dolomites_6.png", alt: "Dolomites_5" },
  { id: 3, url: "/images/did-imge/Dolomites_7.png", alt: "Dolomites_5" },
  { id: 4, url: "/images/did-imge/Dolomites_8.png", alt: "Dolomites_5" },
  { id: 5, url: "/images/did-imge/Dolomites_9.png", alt: "Dolomites_5" },
  { id: 6, url: "/images/did-imge/Dolomites_18.png", alt: "Dolomites_5" },
  { id: 7, url: "/images/did-imge/Dolomites_19.png", alt: "Dolomites_5" },
  { id: 8, url: "/images/did-imge/Dolomites_21.png", alt: "Dolomites_5" },
  { id: 9, url: "/images/did-imge/Dolomites_22.png", alt: "Dolomites_5" },
  { id: 10, url: "/images/did-imge/Dolomites_23.png", alt: "Dolomites_5" },
  { id: 11, url: "/images/did-imge/Dolomites_24.png", alt: "Dolomites_5" },
  { id: 12, url: "/images/did-imge/Dolomites_25.png", alt: "Dolomites_5" },
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

  return (
    <>
      {/* <Box
        as="section"
        p={{
          xs: "4rem 2.4rem",
          md: "5rem 4rem",
          xm: "5rem 6rem",
          lg: "6rem 12rem",
        }}
        mt="8rem"
        bg="primary.2400"
        maxWidth={{ lg: "100%", xl: "144rem" }}
      >
        <Heading textAlign="center" Heading="Did You Know?" />

        <Grid
          mt="5rem"
          gridTemplateColumns={{ xm: "1fr 1fr" }}
          gridColumnGap="6rem"
          gridRowGap="3rem"
          alignItems="center"
        >
          <Box>
            <Description Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </Box>
          <Flex justifyContent={{ xs: "center", xm: "end" }}>
            <Box
              width={{ xs: "30rem", xm: "50rem" }}
              height={{ xs: "25.6rem", xm: "42.6rem" }}
              className="image-30"
            >
              <Image
                src="/images/home-2.webp"
                alt="home-1"
                quality={100}
                width={500}
                height={426}
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Grid>
      </Box> */}

      <Box
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
      >
        <Heading
          mb={{ xs: "2rem", md: "4rem" }}
          textAlign="center"
          Heading="Did You Know?"
        />
        <Grid
          //   gridTemplateColumns="repeat(3, 49.3rem)"
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
                width={{ xs: "16rem", xm: "20rem" }}
                height={{ xs: "40rem", xm: "50rem" }}
              >
                <Image
                  src={items?.url}
                  alt={items?.alt}
                  quality={100}
                  width={200}
                  height={500}
                  objectFit="contain"
                />
              </Box>
            );
          })}
        </Grid>
      </Box>

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
