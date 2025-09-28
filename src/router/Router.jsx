import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import SearchResults from "../pages/SearchResults";
import WhyStudyAbroad from "../nav/studyAbroad/WhyStudyAbroad";
import StudyDestination from "../nav/studyAbroad/StudyDestination";
import ApplicationGuide from "../nav/studyAbroad/ApplicationGuide";
import ThriveAbroad from "../nav/studyAbroad/ThriveAbroad";
import NextStep from "../nav/studyAbroad/NextStep";
import BeforeYouFly from "../nav/studyAbroad/BeforeYouFly";
import StudyInAustralia from "../nav/studyAbroad/StudyInAustralia";
import StudyInCanada from "../nav/studyAbroad/StudyInCanada";
import StudyInIreland from "../nav/studyAbroad/StudyInIreland";
import StudyInNewZeland from "../nav/studyAbroad/StudyInNewZeland";
import StudyInUK from "../nav/studyAbroad/StudyInUK";
import StudyInUSA from "../nav/studyAbroad/StudyInUSA";
import WhatsIltes from "../nav/studyAbroad/WhatsIltes";
import WhyIelts from "../nav/studyAbroad/WhyIelts";
import IeltsPrep from "../nav/studyAbroad/IeltsPrep";

import FastEfficientDetails from "../pages/FastEfficientDetails";
import ClientFocusedDetails from "../pages/ClientFocusedDetails";
import IELTSTestPrepDetails from "../pages/IELTSTestPrepDetails";
import GlobalReachDetails from "../pages/GlobalReachDetails";
import CreativeSolutionsDetails from "../pages/CreativeSolutionsDetails";

import Collaborates from "../component/Collaborates";

import GlobalEventsDetails from "../pages/GlobalEventsDetails";
import FastLaneDetails from "../pages/FastLaneDetails";
import VisaApplicationDetails from "../pages/VisaApplicationDetails";
import TenReasonsUKDetails from "../pages/TenReasonsUKDetails";
import MastersUKWithPlacementDetails from "../pages/MastersUKWithPlacementDetails";
import TopFiveEnglishTestsDetails from "../pages/TopFiveEnglishTestsDetails";
import TenReasonsUSAStudyDetails from "../pages/TenReasonsUSAStudyDetails";
import BestBusinessSchoolsUSA from "../pages/BestBusinessSchoolsUSA";
import AffordableUniversitiesUSA from "../pages/AffordableUniversitiesUSA";

import CourseDetailsPages from "../pages/CourseDetailsPages";
import UniversityDetailsPages from "../pages/UniversityDetailsPages";
import EventsDetailsPages from "../pages/EventsDetailsPages";
import ScholarshipDetailsPages from "../pages/ScholarshipDetailsPages";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import About from "../pages/About";
import Leadership from "../pages/Leadership";
import Careers from "../pages/Careers";
import StaffDirectory from "../pages/StaffDirectory";
import Events from "../pages/Events";
import HelpCenter from "../pages/HelpCenter";
import LoginProblems from "../pages/LoginProblems";
import RegistrationIssues from "../pages/RegistrationIssues";
import WebsiteFeedback from "../pages/WebsiteFeedback";
import ReportAProblem from "../pages/ReportAProblem";
import Accessibility from "../pages/Accessibility";
import Pennsylvania4H from "../pages/Pennsylvania4H";
import BetterKidCare from "../pages/BetterKidCare";
import MasterGardeners from "../pages/MasterGardeners";
import FoodSafety from "../pages/FoodSafety";
import WaterResources from "../pages/WaterResources";
import NutritionLinks from "../pages/NutritionLinks";
import Agriculture from "../pages/Agriculture";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "signin",
        element: <Login></Login>

      },
      {
        path: "signup",
        element: <SignUp></SignUp>

      },
      {
        path: "search-results",
        element: <SearchResults></SearchResults>

      },
      {
        path: "WhyStudyAbroad",
        element: <WhyStudyAbroad></WhyStudyAbroad>

      },
      {
        path: "studyDestination",
        element: <StudyDestination></StudyDestination>

      },
      {
        path: "applicationGuide",
        element: <ApplicationGuide></ApplicationGuide>
      },
      {
        path: "thriveAbroad",
        element: <ThriveAbroad></ThriveAbroad>
      },
      {
        path: "next-step",
        element: <NextStep />
      },
      {
        path: "before-you-fly",
        element: <BeforeYouFly />
      },
      {
        path: "study-in-australia",
        element: <StudyInAustralia />
      },
      {
        path: "study-in-canada",
        element: <StudyInCanada />
      },
      {
        path: "study-in-ireland",
        element: <StudyInIreland />
      },
      {
        path: "study-in-NewZeland",
        element: <StudyInNewZeland></StudyInNewZeland>
      },
      {
        path: "study-in-Uk",
        element: <StudyInUK />
      },
      {
        path: "study-in-Usa",
        element: <StudyInUSA></StudyInUSA>
      },
      {
        path: "what-is-ielts",
        element: <WhatsIltes></WhatsIltes>
      },
      {
        path: "why-ielts",
        element: <WhyIelts></WhyIelts>
      },
      {

        path: "ielts-preparation",
        element: <IeltsPrep></IeltsPrep>
      },
      {
        path: "fast-efficient-details",
        element: <FastEfficientDetails />
      },
      {
        path: "creative-solutions",
        element: <CreativeSolutionsDetails />
      },
      {
        path: "client-focused",
        element: <ClientFocusedDetails />
      },
      {
        path: "ielts-and-test",
        element: <IELTSTestPrepDetails />
      },
      {
        path: "global-reach",
        element: <GlobalReachDetails />
      },
      {
        path: "ielts-preparation",
        element: <IeltsPrep></IeltsPrep>
      },
      {
        path: "contact",
        element: <Collaborates></Collaborates>
      },
      {

        path: "global-events",
        element: <GlobalEventsDetails />
      },
      {
        path: "live-life-in-the-fast-line",
        element: <FastLaneDetails />
      },
      {
        path: "visa-application-assistance",
        element: <VisaApplicationDetails />
      },
      {
        path: "ten-reasons-why-you-should-study-in-the-uk",
        element: <TenReasonsUKDetails />
      },
      {
        path: "masters-in-the-uk-with-placement",
        element: <MastersUKWithPlacementDetails />
      },
      {
        path: "top-five-english-language-tests-accepted-by-universities-worldwide",
        element: <TopFiveEnglishTestsDetails />
      },
      {
        path: "ten-reasons-to-study-in-the-usa",
        element: <TenReasonsUSAStudyDetails />
      },
      {
        path: "best-business-schools-in-the-usa",
        element: <BestBusinessSchoolsUSA />
      },
      {
        path: "guide-to-affordable-universities",
        element: <AffordableUniversitiesUSA />
      },
      {
        path: "/search-results/courses-details/:id",
        element: <CourseDetailsPages></CourseDetailsPages>
      },
      {
        path: "/search-results/university-details/:id",
        element: <UniversityDetailsPages></UniversityDetailsPages>
      },
      {
        path: "/search-results/event-details/:id",
        element: <EventsDetailsPages></EventsDetailsPages>
      },
      {
        path: "/search-results/scholarship-details/:id",
        element: <ScholarshipDetailsPages></ScholarshipDetailsPages>
      },
      {
        path: "/private-policy",
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: "/about-us",
        element: <About />
      },
      {
        path: "/leader-ship",
        element: <Leadership />
      },
      {
        path: "/career",
        element: <Careers />
      },
      {
        path: "/staff-directory",
        element: <StaffDirectory />
      },
      {
        path: "/our-events",
        element: <Events />
      },
      {
        path: "/help-centers",
        element: <HelpCenter />
      },
      {
        path: "/login-problems",
        element: <LoginProblems />
      },
      {
        path: "/register-issue",
        element: <RegistrationIssues />
      },
      {
        path: "/website-feedback",
        element: <WebsiteFeedback />
      },
      {
        path: "/report-a-problem",
        element: <ReportAProblem />
      },
      {
        path: "/accessability",
        element: <Accessibility />
      },
      {
        path: "/pennslvania-4-h",
        element: <Pennsylvania4H />
      },
      {
        path: "/better-kid-care",
        element: <BetterKidCare />
      },
      {
        path: "/master-gardeners",
        element: <MasterGardeners />
      },
      {
        path: "/food-safety",
        element: <FoodSafety />
      },
      {
        path: "/water-resources",
        element: <WaterResources />
      },
      {
        path: "/nutrition-links",
        element: <NutritionLinks />
      },
      {
        path: "/agricultures",
        element: <Agriculture />
      },
    ]
  },
]); 