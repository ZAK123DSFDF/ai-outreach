"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/reusable/Container";
import { Button } from "@/components/ui/button";
import {
  FaChartLine,
  FaCheck,
  FaPlug,
  FaRocket,
  FaTimes,
} from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <div className="flex flex-col pb-4">
        {/* Header Section */}
        <Container className="flex items-center justify-between mb-2 mt-2 w-full">
          {/* Logo on the Left */}
          <div className="flex items-center">
            <Image src="/outly.svg" alt="Outly Logo" width={200} height={200} />
          </div>

          {/* Pricing and FAQ Links in the Middle */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-blue-500 text-lg">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 text-lg">
              FAQ
            </a>
          </div>

          {/* Sign Up and Sign In Buttons on the Right */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="lg">
              Sign In
            </Button>
            <Button size="lg" variant="brand">
              Sign Up
            </Button>
          </div>
        </Container>
        <Separator className="w-full" />

        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white">
          <Container className="flex flex-col items-center text-center pt-24 pb-24">
            {/* Nested Container with Horizontal Padding */}
            <div className="w-full max-w-4xl px-6">
              {/* Hero Title */}
              <h2 className="text-5xl font-bold">
                Automate Your <span className="text-[#202bb4]">Outreach</span>{" "}
                Monitor Reply Rates and Personalize Every Message
              </h2>

              {/* Hero Description */}
              <p className="text-gray-600 text-lg mt-4">
                Streamline your outreach with AI automation, track reply rates
                in real-time, and deliver hyper-personalized messages that drive
                results—all in one platform.
              </p>

              {/* Get Started Button */}
              <Button className="mt-6" size="lg" variant="brand">
                Get Started
              </Button>
            </div>
          </Container>
        </div>

        {/* How It Works Section */}
        <div className="bg-gradient-to-b from-white to-blue-50">
          <Container className="flex flex-col items-center pt-24 pb-24">
            {/* How It Works Heading */}
            <h2 className="text-5xl font-bold mb-8 text-center">
              How It <span className="text-blue-500">Works</span>
            </h2>

            {/* Boxes Container */}
            <div className="flex gap-8 w-full max-w-6xl">
              {/* Box 1: Connect & Set Up */}
              <div className="flex-1 p-8 bg-blue-100 rounded-lg shadow-lg text-center">
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <FaPlug className="text-white text-2xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  1. Connect & Set Up
                </h3>
                <p className="text-gray-600 text-lg">
                  Integrate your outreach tools (e.g., email, LinkedIn) in
                  minutes. Set up your campaigns and define your target audience
                  effortlessly.
                </p>
              </div>

              {/* Box 2: Monitor & Analyze */}
              <div className="flex-1 p-8 bg-blue-100 rounded-lg shadow-lg text-center">
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <FaChartLine className="text-white text-2xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  2. Monitor & Analyze
                </h3>
                <p className="text-gray-600 text-lg">
                  Track reply rates, engagement metrics, and campaign
                  performance in real-time. Get AI-powered insights to identify
                  what’s working and what’s not.
                </p>
              </div>

              {/* Box 3: Optimize & Succeed */}
              <div className="flex-1 p-8 bg-blue-100 rounded-lg shadow-lg text-center">
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <FaRocket className="text-white text-2xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  3. Optimize & Succeed
                </h3>
                <p className="text-gray-600 text-lg">
                  Use actionable recommendations to refine your outreach.
                  Personalize messages, improve response rates, and achieve your
                  goals faster.
                </p>
              </div>
            </div>
          </Container>
        </div>
        {/* Key Features Section */}
        <div className="bg-white">
          <Container className="flex flex-col items-center pt-24 pb-24">
            {/* Key Features Heading */}
            <h2 className="text-5xl font-bold mb-8">
              Key <span className="text-[#202bb4]">Features</span>
            </h2>

            {/* Boxes Container */}
            <div className="flex gap-8 w-full max-w-6xl">
              {/* What They Miss Box */}
              <div className="flex-1 p-8 bg-red-100 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold mb-4 text-red-600">
                  Without AI Outreach Monitoring, You’re Losing Out On:
                </h3>
                <ul className="space-y-3 text-red-600 text-lg">
                  <li className="flex items-center justify-center gap-2">
                    <FaTimes className="text-red-600" /> Real-Time Insights
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaTimes className="text-red-600" /> Personalization at
                    Scale
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaTimes className="text-red-600" /> Efficiency
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaTimes className="text-red-600" /> Competitive Edge
                  </li>
                </ul>
              </div>

              {/* What They Get Box */}
              <div className="flex-1 p-8 bg-green-100 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold mb-4 text-green-600">
                  With AI Outreach Monitoring, You’ll Gain:
                </h3>
                <ul className="space-y-3 text-green-600 text-lg">
                  <li className="flex items-center justify-center gap-2">
                    <FaCheck className="text-green-600" /> Real-Time Tracking
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaCheck className="text-green-600" /> Hyper-Personalization
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaCheck className="text-green-600" /> Time Savings
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaCheck className="text-green-600" /> Actionable Insights
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaCheck className="text-green-600" /> Competitive Advantage
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        {/* Pricing Section */}
        <div className="bg-white">
          <Container className="flex flex-col items-center pt-24 pb-24">
            {/* Pricing Heading */}
            <h2 className="text-5xl font-bold mb-8 text-center">
              Pricing <span className="text-[#202bb4]">Plans</span>
            </h2>

            {/* Pricing Boxes */}
            <div className="flex gap-8 w-full max-w-6xl items-end">
              {/* Basic Plan */}
              <div className="flex-1 p-8 bg-blue-100 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">Basic</h3>
                <p className="text-gray-600 text-lg mb-4">
                  Perfect for small teams and startups.
                </p>
                <p className="text-4xl font-bold mb-4">
                  $29<span className="text-lg text-gray-600">/mo</span>
                </p>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li>Up to 1,000 Emails/Mo</li>
                  <li>Basic Analytics</li>
                  <li>Email Support</li>
                </ul>
                <Button className="mt-6 w-full" size="lg" variant="brand">
                  Get Started
                </Button>
              </div>

              {/* Pro Plan (Highlighted) */}
              <div className="flex-1 p-8 bg-gray-800 rounded-lg shadow-lg text-center transform scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-white">Pro</h3>
                <p className="text-gray-300 text-lg mb-4">
                  For growing teams and businesses.
                </p>
                <p className="text-4xl font-bold mb-4 text-white">
                  $99<span className="text-lg text-gray-300">/mo</span>
                </p>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li>Up to 10,000 Emails/Mo</li>
                  <li>Advanced Analytics</li>
                  <li>Priority Support</li>
                </ul>
                <Button className="mt-6 w-full" size="lg" variant="secondary">
                  Get Started
                </Button>
              </div>

              {/* Enterprise Plan */}
              <div className="flex-1 p-8 bg-blue-100 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                <p className="text-gray-600 text-lg mb-4">
                  Custom solutions for large teams.
                </p>
                <p className="text-4xl font-bold mb-4">Custom</p>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li>Unlimited Emails</li>
                  <li>Dedicated Account Manager</li>
                  <li>24/7 Support</li>
                </ul>
                <Button className="mt-6 w-full" size="lg" variant="brand">
                  Contact Us
                </Button>
              </div>
            </div>
          </Container>
        </div>

        {/* Gradient Variation Above FAQ Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white">
          <div className="h-24"></div> {/* Spacer for gradient effect */}
        </div>

        {/* FAQ Section */}
        <div className="bg-white">
          <Container className="flex flex-col items-center pt-24 pb-24">
            {/* FAQ Heading */}
            <h2 className="text-5xl font-bold mb-8 text-center">
              Frequently Asked <span className="text-[#202bb4]">Questions</span>
            </h2>

            {/* Accordion for FAQs */}
            <div className="w-full max-w-4xl">
              <Accordion type="single" collapsible className="w-full">
                {/* FAQ 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    What is AI Outreach Monitoring?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    AI Outreach Monitoring is a platform that helps you automate
                    your outreach campaigns, track reply rates in real-time, and
                    deliver personalized messages to maximize engagement and
                    results.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    How does the pricing work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We offer flexible pricing plans based on your needs. You can
                    choose between Basic, Pro, and Enterprise plans. Each plan
                    comes with different features and email limits.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    Can I cancel my subscription anytime?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, you can cancel your subscription at any time. There are
                    no long-term commitments, and you’ll retain access until the
                    end of your billing cycle.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-semibold">
                    What integrations do you support?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We support integrations with popular tools like Gmail,
                    Outlook, LinkedIn, and more. You can also connect via APIs
                    for custom integrations.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ 5 */}
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-semibold">
                    Is my data secure?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Absolutely! We use industry-standard encryption and follow
                    strict security protocols to ensure your data is safe and
                    secure.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </Container>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-50 mt-24 py-12">
          <Container className="flex flex-col items-center text-center">
            <Image src="/outly.svg" alt="Outly Logo" width={100} height={100} />
            <p className="text-gray-600 mb-4">
              Revolutionizing outreach with AI-powered tools.
            </p>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Contact Us
              </a>
            </div>
            <p className="text-gray-600">© 2025 Outly. All rights reserved.</p>
          </Container>
        </footer>
      </div>
    </>
  );
}
