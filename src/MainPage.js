import React from "react"
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg"
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg"


//<Pricing />
export default function MainPage(){
    return (
    <AnimationRevealPage>
        <Hero 
        heading="SmartDetect"
        description="SmartDetect is an artificial intelligence powered platfrom that helps the goverment to detetct fake news in trending posts on social media"
        primaryButtonText="Learn more"
        primaryButtonUrl="#features"
        
        />
        <Features id ="features"
        heading="Advanced analysis"
        description="Detetct Fake news before it spreads more and more"
        />
        
        <MainFeature 
          subheading="Real Time"
          heading="Our platform analyse real time data from social media to detect fake news early"
          imageSrc={serverRedundancyIllustrationImageSrc}
          buttonRounded={false}
        />
        <MainFeature 
          subheading="Machine Learning"
          heading="State of the Art Machine Learning Algorithms"
          imageSrc={serverSecureIllustrationImageSrc}
          buttonRounded={false}
          textOnLeft={false}
        />
        
      </AnimationRevealPage>
      )
}