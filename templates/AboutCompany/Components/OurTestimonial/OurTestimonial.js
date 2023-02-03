import React, { useState } from "react";
import { Grid, Box, SubHeading } from "atoms";
import { TestimonialCards } from "molecules/Cards";
import { TestimonialModal } from "molecules/Modals";

const cardData = [
  {
    id: 1,
    title: "STRATEGY ADVISORS",
    description:
      "Managing Director at American Express GBT,Ex Country Head at  Dnata (Emirates Group). Ashish has been working in the travel service industry He holds an M.B.A in Tourism .Ashish has completed  Senior Executive Leadership Program from the Harvard Business School.",
    src: "/images/testimonial/01-Ashish-Kishore.webp",
    alt: "01-Ashish-Kishore",
    author: "Ashish Kishore",
  },
  {
    id: 2,
    title: "STRATEGY ADVISORS",
    description:
      "Harvard Alumni,Chief Operating Officer at ASHIDA  Electronics Pvt. Ltd. Part of Board of Director. Interest  include Electric Automations Systems and Protection  Systems. Holds two patent in the area of SAS and  distribution automation.",
    src: "/images/testimonial/02-Sujay-Kulkarni.webp",
    alt: "auther-1",
    author: "Sujay Kulkarni",
  },
  {
    id: 3,
    title: "STRATEGY ADVISORS",
    description:
      "CEO at Adda 52 Rummy, Harvard Alumni, A general management professional having experience across consumer businesses, corporate strategy and investment banking. Shiva’s expertise lies in  bringing consumer centricity & enhancing consumer experience and growing businesses both organically & In organically.",
    src: "/images/testimonial/03-Shivanandan-Pare.webp",
    alt: "auther-1",
    author: "Shivanandan Pare",
  },
  {
    id: 4,
    title: "PRODUCT TECHNOLOGY ADVISOR",
    description:
      "MS in Computer Science from Syracuse University , Vijay, an Entrepreneur focused on delivering value with business solutions. Vijay is running Software Services Company  ,which deploys technological ammunition to deliver the devised solution. Vijay is helping in building future-ready solutions cantered around the end user and their environmental conditions.",
    src: "/images/testimonial/04-Vijay-Agarwal.webp",
    alt: "auther-1",
    author: "Vijay Agarwal",
  },

  {
    id: 5,
    title: "TECHNICAL ADVISORS",
    description:
      "A technology and sustainability evangelist with more than 30 years of experience in manufacturing and consulting environment with specialization in Digital Transformation, Large Scale IT project implementation, Cyber security, Community Development Projects, Talent Development and Employee Engagement.",
    src: "/images/testimonial/05-Vijay-Sethi.webp",
    alt: "auther-1",
    author: "Vijay Sethi",
  },

  {
    id: 6,
    title: "TECHNICAL ADVISORS",
    description:
      "Highly accomplished and seasoned professional with over 29 years of global experience in IT strategy, innovation, creating business models and enterprise architecture blueprint from emerging technologies, business transformation and strategic outsourcing, global solutions consulting, and global business development.",
    src: "/images/testimonial/06-Rajeev-Batra.webp",
    alt: "auther-1",
    author: "Vijay Sethi",
  },

  {
    id: 7,
    title: "TECHNICAL ADVISORS",
    description:
      "Working with Motilal Oswal Financial Services Ltd as EVP & Head IT, Leading the Technology team; a senior IT professional with more than 19 years of consistently demonstrated career success, Seasoned IT leader who has led large IT teams in various vertical in the financial space.",
    src: "/images/testimonial/07-Pankaj-Purohit.webp",
    alt: "auther-1",
    author: "Pankaj Purohit",
  },
];

export const OurTestimonial = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();

  return (
    <>
      <Box
        bg="secondary.200"
        py="8rem"
        maxWidth={{ lg: "100%", xl: "144rem" }}
        mx={{ xl: "auto" }}
      >
        <SubHeading
          textAlign="center"
          mb="4rem"
          SubHeading="Satisfied Customers Share Their Experience"
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
          {cardData.map((item, index) => {
            return (
              <Box
                key={item?.id}
                onClick={() => {
                  setOpen(true);
                  setUser(index);
                }}
                cursor="pointer"
              >
                <TestimonialCards
                  title={item?.title}
                  description={item?.description}
                  src={item?.src}
                  alt={item?.alt}
                  author={item?.author}
                  index={item?.id}
                />
              </Box>
            );
          })}
        </Grid>
      </Box>

      {open && (
        <TestimonialModal
          data={cardData[user]}
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
          }}
        />
      )}
    </>
  );
};
