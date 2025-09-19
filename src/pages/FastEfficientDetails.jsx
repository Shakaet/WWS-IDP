import React from "react";
// import IELTSBanner from "../components/IELTSBanner";
import bannerImg from "../assets/bn.jpg"
import IELTSBanner from "../component/IELTSBanner";

const FastEfficientDetails = () => {
    const bannerProps = {
        title: "Creative Solutions",
        description:
            "Unlock the power of imagination with our creative solutions that merge artistic vision with strategic impact. Stand out, be remembered, and connect with your audience like never before.",
        bannerImage: bannerImg,
        paragraphText:
            "At WWS, we believe creativity is more than aesthetics — it's a powerful tool for solving problems, telling stories, and driving engagement. Our creative solutions are carefully designed to capture attention, spark emotions, and deliver results. Whether you're launching a new brand, revamping your digital presence, or seeking out-of-the-box marketing ideas, we bring together design, technology, and storytelling to help you achieve your goals. Every project we undertake is driven by curiosity, shaped by collaboration, and refined through detail, ensuring that what we deliver isn't just beautiful — it's impactful, strategic, and memorable.",
        buttonText: "Explore Ideas",
        buttonAction: () => console.log("User clicked Explore Ideas"),
        reasons: [
            {
                title: "1. Design that Inspires",
                description:
                    "We don’t just design — we create experiences. Our visual concepts are crafted to not only catch the eye but to emotionally resonate with your audience, encouraging deeper brand connections and lasting impressions."
            },
            {
                title: "2. Custom-Tailored Concepts",
                description:
                    "Your brand is unique, and your solutions should be too. We take the time to understand your vision, goals, and audience, ensuring every element we create reflects your identity and communicates your message with clarity."
            },
            {
                title: "3. Collaboration at Every Step",
                description:
                    "We value partnership and open communication. From the initial brainstorming session to final delivery, we involve you in every phase of the process to ensure the outcome truly represents your vision — elevated by our expertise."
            },
            {
                title: "4. Innovation-Driven Process",
                description:
                    "In a rapidly evolving digital landscape, staying ahead requires constant innovation. We explore emerging trends, cutting-edge tools, and unconventional ideas to bring you fresh, bold solutions that push boundaries."
            },
            {
                title: "5. Precision and Attention to Detail",
                description:
                    "Great design lies in the details. We obsess over every pixel — from typography, color palettes, and spacing to user interaction and accessibility — to ensure your final product is flawless, functional, and visually compelling."
            },
            {
                title: "6. Results that Matter",
                description:
                    "Our work doesn’t stop at design — it drives performance. We create with intention, ensuring each project achieves your business objectives, whether it’s growing brand awareness, increasing engagement, or boosting conversions."
            }
        ]
    };


    return <IELTSBanner {...bannerProps} />;
};

export default FastEfficientDetails;
