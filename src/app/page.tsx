"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import ContactText from "@/components/sections/contact/ContactText";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Zap, Sparkles, Users, Code, Star, MapPin, TrendingDown, Lightbulb, CheckCircle, Rocket, Play, TrendingUp, Linkedin, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="QuasarNova"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Services", id: "services" },
            { name: "Process", id: "process" },
            { name: "Founders", id: "founders" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Schedule Your Orbital Audit",            href: "https://calendly.com/quasarnova"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="We craft AI automations that captivate leads and drive meaningful revenue for ambitious businesses worldwide."
          description="Autonomous AI voice receptionists that answer every call. Custom backend automations that eliminate manual work. Built for high-ticket service businesses that refuse to leave revenue on the table."
          background={{ variant: "sparkles-gradient" }}
          kpis={[
            { value: "99.2%", label: "Call Capture Rate" },
            { value: "24/7", label: "Autonomous Booking" },
            { value: "10x", label: "Faster Qualification" }
          ]}
          enableKpiAnimation={true}
          tag="AI-Powered Automation"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Schedule Your Orbital Audit",              href: "https://calendly.com/quasarnova"
            }
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASWsvHXewt6s2gJbyu1sTGroNA/a-futuristic-ai-automation-dashboard-int-1772595822858-293a29b7.png"
          imageAlt="QuasarNova AI Automation Dashboard"
          mediaAnimation="slide-up"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About QuasarNova"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          title="We're a Silicon Valley-caliber AI automation agency obsessed with turning lost revenue into booked deals and autonomous workflows."
          buttons={[
            {
              text: "Schedule Your Orbital Audit",              href: "https://calendly.com/quasarnova"
            }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNineteen
          title="Our Services"
          description="Two core AI automation solutions that eliminate manual work and capture every lead."
          tag="Core Offerings"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              tag: "Voice AI",              title: "Autonomous AI Voice Receptionists",              subtitle: "Answer every call 24/7",              description: "Never miss a lead again. Our AI voice receptionists answer calls instantly, qualify prospects with intelligent questioning, and book appointments directly into your calendar. You wake up to booked revenue—no missed opportunities, no manual callbacks.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASWsvHXewt6s2gJbyu1sTGroNA/a-modern-ai-voice-receptionist-system-in-1772595821027-6577756c.png",              imageAlt: "AI Voice Receptionist Interface",              buttons: [
                { text: "Learn More", href: "#services" }
              ]
            },
            {
              id: 2,
              tag: "Automation",              title: "Custom Backend Automations",              subtitle: "Eliminate manual data drudgery",              description: "We map your bottlenecks and build seamless workflows that connect your entire software stack. Data flows automatically from CRM to calendar to payment systems. Save hundreds of hours monthly. Prevent revenue leaks from dropped leads or missed follow-ups.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASWsvHXewt6s2gJbyu1sTGroNA/a-detailed-backend-workflow-automation-d-1772595821547-40a04e7b.png",              imageAlt: "Backend Workflow Automation System",              buttons: [
                { text: "Learn More", href: "#services" }
              ]
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardTen
          title="Our Process"
          description="From discovery to deployment—we build your AI automation system with precision and speed."
          tag="Three-Phase Framework"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          features={[
            {
              id: "1",              title: "Discovery & Strategy",              description: "We start with an Orbital Audit—a deep dive into your business pains, software stack, and lost revenue opportunities. We map your current workflow, identify bottlenecks, and quantify the cost of missed leads. This clarity becomes your roadmap.",              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASWsvHXewt6s2gJbyu1sTGroNA/a-strategic-consultation-meeting-visuali-1772595821136-487db45e.png"
              },
              items: [
                { icon: MapPin, text: "Identify operational pain points" },
                { icon: TrendingDown, text: "Calculate lost revenue impact" },
                { icon: Zap, text: "Define automation strategy" }
              ],
              reverse: false
            },
            {
              id: "2",              title: "Design & Prototyping",              description: "Our CTO architects a custom AI solution tailored to your exact needs. We design the voice receptionist behavior, automation workflows, integrations, and user experience. You review, iterate, and approve before any code is written.",              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASWsvHXewt6s2gJbyu1sTGroNA/ai-system-architecture-design-visualizat-1772595820737-fb50cef9.png"
              },
              items: [
                { icon: Lightbulb, text: "Design custom AI behavior" },
                { icon: Code, text: "Plan system architecture" },
                { icon: CheckCircle, text: "Client approval gate" }
              ],
              reverse: true
            },
            {
              id: "3",              title: "Build & Launch",              description: "We develop, test, and deploy your automation for immediate impact. Your system goes live, starts capturing leads, automating tasks, and buying back your time on day one. We monitor, optimize, and scale with you.",              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASWsvHXewt6s2gJbyu1sTGroNA/a-live-deployment-scene-showing-ai-autom-1772595821482-4b9e2191.png"
              },
              items: [
                { icon: Rocket, text: "Rapid development & testing" },
                { icon: Play, text: "Live deployment" },
                { icon: TrendingUp, text: "Ongoing optimization" }
              ],
              reverse: false
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="founders" data-section="founders">
        <MetricCardOne
          title="Meet the Founders"
          description="Two visionary builders obsessed with freeing ambitious business owners from operational drudgery through AI-powered autonomy."
          tag="Leadership"
          tagIcon={Users}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "daniel",              value: "Daniel",              title: "Emojevbe",              description: "Co-Founder & CEO. Visionary leader passionate about transforming businesses through innovative AI. Expert in sales, marketing, and conducting Orbital Audits to identify operational pain. Based in Lodi, California—brings Silicon Valley-caliber strategic insight and premium positioning.",              icon: Zap
            },
            {
              id: "elijah",              value: "Elijah",              title: "Chrim",              description: "Co-Founder & CTO. 20 years old, Arizona State University student. Relentless ambition and hardworking ethic building cutting-edge AI automations. Passionate about freeing business owners from drudgery. Inspired by nature's efficiency—designs robust architectures delivering autonomous revenue.",              icon: Code
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Service Business Owners Say"
          description="Hear from HVAC, plumbing, and other high-ticket service businesses that stopped missing leads and started capturing revenue."
          tag="Real Results"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Marcus Johnson, Owner of Johnson Heating & Cooling",              date: "Date: 15 November 2024",              title: "We stopped losing leads after hours",              quote: "We were missing 40% of our calls during work hours and almost everything after 5 PM. QuasarNova's AI receptionist answers instantly, qualifies the lead, and books the appointment. We've captured over $150k in new revenue in the first month alone. It's not even close.",              tag: "HVAC Service",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASWsvHXewt6s2gJbyu1sTGroNA/professional-headshot-of-a-satisfied-hva-1772595820065-209bbef1.png",              avatarAlt: "Marcus Johnson",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASWsvHXewt6s2gJbyu1sTGroNA/professional-headshot-of-a-satisfied-hva-1772595820065-209bbef1.png"
            },
            {
              id: "2",              name: "Sarah Mitchell, Owner of Mitchell Plumbing Solutions",              date: "Date: 10 November 2024",              title: "Automation freed us to focus on service delivery",              quote: "Our team spent 15+ hours per week scheduling appointments and following up. That time is now back on service trucks generating revenue. The AI handles everything perfectly. Our booking accuracy improved and customer satisfaction went up. This is the real deal.",              tag: "Plumbing Service",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASWsvHXewt6s2gJbyu1sTGroNA/professional-headshot-of-a-satisfied-plu-1772595820907-cdb7bd3f.png",              avatarAlt: "Sarah Mitchell",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASWsvHXewt6s2gJbyu1sTGroNA/professional-headshot-of-a-satisfied-plu-1772595820907-cdb7bd3f.png"
            },
            {
              id: "3",              name: "Robert Chen, Owner of Chen Electrical Services",              date: "Date: 5 November 2024",              title: "Premium positioning meets premium technology",              quote: "I wanted to scale without hiring more office staff. QuasarNova's backend automation connected our CRM, calendar, and invoicing system. Leads flow seamlessly through our system. Our close rate improved 35% because nothing falls through the cracks anymore. Worth every penny.",              tag: "Electrical Service",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASWsvHXewt6s2gJbyu1sTGroNA/professional-headshot-of-an-electrical-c-1772595820572-d5f8b63c.png",              avatarAlt: "Robert Chen",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASWsvHXewt6s2gJbyu1sTGroNA/professional-headshot-of-an-electrical-c-1772595820572-d5f8b63c.png"
            },
            {
              id: "4",              name: "Jennifer Torres, Owner of Torres Roofing Contractors",              date: "Date: 28 October 2024",              title: "Scaled from 3 to 6 service teams without adding office overhead",              quote: "Their Orbital Audit showed us we were leaving massive revenue on the table. The AI voice system and workflow automation let us handle 3x the service requests without hiring more dispatchers. This level of technology at our price point is unheard of. Game-changer for our business.",              tag: "Roofing Service",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASWsvHXewt6s2gJbyu1sTGroNA/professional-headshot-of-a-roofing-compa-1772595820213-e6adf1e2.png",              avatarAlt: "Jennifer Torres",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ASWsvHXewt6s2gJbyu1sTGroNA/professional-headshot-of-a-roofing-compa-1772595820213-e6adf1e2.png"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to stop losing revenue to missed calls and manual work? Schedule your Orbital Audit. We'll audit your business, quantify your opportunity, and show you exactly how much revenue is waiting to be captured."
          animationType="entrance-slide"
          buttons={[
            {
              text: "Schedule Your Orbital Audit",              href: "https://calendly.com/quasarnova"
            }
          ]}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="QuasarNova"
          copyrightText="© 2025 QuasarNova AI Automation. All rights reserved."
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/quasarnova",              ariaLabel: "LinkedIn"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/quasarnova",              ariaLabel: "Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
