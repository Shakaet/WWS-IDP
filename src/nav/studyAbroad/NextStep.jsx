import React from "react";
import WhyStudyAbroadHeader from "../../component/WhyStudyAbroadHeader";
import WhyStudyAbroadParagraph from "../../component/WhyStudyAbroadParagraph";
import WhyStudyAbroadBookNow from "../../component/WhyStudyAbroadBookNow";
import WhyStudyAbroadDetails from "../../component/WhyStudyAbroadDetails";
import WhyStudyAbroadMoredetails from "../../component/WhyStudyAbroadMoredetails";
import StudyAbroadQA from "../../component/StudyAbroadQA";

import abroadImg from "../../assets/abroad.jpg";
import stepImg from "../../assets/graduation.jpg";
import guideImg from "../../assets/students.webp";
import counsellorImg from "../../assets/graduation.jpg";

const NextStep = () => {
    /** ---------- Header ---------- **/
    const headerProps = {
        breadcrumbItems: ["WWS Bangladesh", "Next Step"],
        title: "Take the Next Step in Your Study Abroad Journey",
        description:
            "From research to application – plan every stage of your international education with confidence.",
        buttonText: "Start Planning",
        buttonAction: () => console.log("Planning started"),
        image: abroadImg,
    };

    /** ---------- Paragraph ---------- **/
    const paragraphProps = {
        mainText:
            "Ready to move forward? Understanding each stage of the application process will make your journey smoother. From shortlisting universities to preparing documents, we guide you through it all.",
        image1: guideImg,
        image2: stepImg,
        image1Alt: "Students preparing",
        image2Alt: "Application steps",
        galleryTitle: "Your roadmap to success",
        gallerySubtitle: "Step-by-step guidance",
        cardTitle: "Create an account to track your progress",
        cardDescription:
            "Stay organised with deadlines, resources, and personalised recommendations tailored to your goals.",
        buttonText: "Create Account",
        buttonAction: () => console.log("Account creation"),
    };

    /** ---------- Book Now ---------- **/
    const bookNowProps = {
        title: "Talk to a mentor",
        description:
            "Discuss your study options, scholarship chances, and visa guidance with our experienced mentors.",
        buttonText: "Book Free Session",
        buttonAction: () => console.log("Session booked"),
        image: counsellorImg,
        imageAlt: "Counsellor helping student",
    };

    /** ---------- Details ---------- **/
    const detailsProps = {
        introText1:
            "Planning ahead ensures you never miss deadlines or paperwork. Get a clear view of your application timeline.",
        introText2:
            "We'll help you gather transcripts, test scores, and recommendation letters, so you're ready before deadlines.",
        mainHeading: "How to Prepare",
        mainDescription:
            "Follow these preparation tips to make your application stand out:",
        sectionHeading: "Organise Documents",
        sectionText1:
            "Start early: collect academic records, passport copies, and financial proofs.",
        sectionText2:
            "Practise language tests, write a strong Statement of Purpose, and gather reference letters.",
        buttonText: "Get Preparation Guide",
        buttonAction: () => console.log("Guide clicked"),
    };

    /** ---------- More Details ---------- **/
    const moreDetailsProps = {
        mainHeading: "Master Each Step",
        globalPerspectiveText:
            "Learning how to manage paperwork and deadlines gives you confidence for bigger challenges abroad.",
        careerHeading: "Stay Career-Focused",
        careerParagraphs: [
            "Pick courses aligning with your dream career.",
            "Get internship info early so you can combine work & study.",
        ],
        migrationHeading: "Visa & Immigration",
        migrationParagraphs: [
            "Understand visa policies before applying.",
            "Prepare financial documents & proof of admission on time.",
        ],
        personalHeading: "Boost Personal Growth",
        personalParagraphs: [
            "Managing multiple tasks helps you grow organised and resilient.",
        ],
        otherHeading: "Other Tips",
        otherIntroText: "Additional ways to get ahead:",
        subSections: [
            {
                heading: "Attend Webinars",
                paragraphs: [
                    "Join info sessions to clarify questions about applications.",
                ],
            },
            {
                heading: "Network with Alumni",
                paragraphs: [
                    "Talk with past students about their experience – they often share insider tips.",
                ],
            },
        ],
        finalHeading: "Ready to begin?",
        finalText:
            "Whether you’re still deciding or have chosen a university, planning now makes everything easier.",
        buttonText: "Start Now",
        buttonAction: () => console.log("Start now clicked"),
    };

    /** ---------- QA ---------- **/
    const qaProps = {
        title: "Next Step FAQs",
        qaData: [
            {
                id: 1,
                question: "When should I start applications?",
                answer:
                    "Ideally 8–12 months before your intake, so you have time for exams, visas, and paperwork.",
            },
            {
                id: 2,
                question: "Do I need an agent?",
                answer:
                    "Not necessarily – but a counsellor can make the process faster and error-free.",
            },
            {
                id: 3,
                question: "How do I track deadlines?",
                answer:
                    "Use a planner or our student dashboard to mark important dates like application close and visa submission.",
            },
        ],
    };

    return (
        <div>
            <WhyStudyAbroadHeader {...headerProps} />
            <WhyStudyAbroadParagraph {...paragraphProps} />
            <WhyStudyAbroadBookNow {...bookNowProps} />
            <WhyStudyAbroadDetails {...detailsProps} />
            <WhyStudyAbroadMoredetails {...moreDetailsProps} />
            <StudyAbroadQA {...qaProps} />
        </div>
    );
};

export default NextStep;
