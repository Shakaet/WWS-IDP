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
import DashboardLayout from "../layout/DashboardLayout";
import MyApplication from "../component/MyApplication";
import DashboardHome from "../component/DashboardHome";
import PrivateRoute from "./PrivateRoutes";
import ManageApplication from "../component/ManageApplication";
import AddNewScholarship from "../pages/AddNewScholarship";
import AddNewUni from "../pages/AddNewUni";
import ManageUni from "../pages/ManageUni";
import ManageScholarship from "../pages/ManageScholarship";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";




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
        path:"/search-results/courses-details/:id",
        element:<CourseDetailsPages></CourseDetailsPages>
      },
      {
        path:"/search-results/university-details/:id",
        element:<UniversityDetailsPages></UniversityDetailsPages>
      },
      {
        path:"/search-results/event-details/:id",
        element:<EventsDetailsPages></EventsDetailsPages>
      },
      {
        path:"/search-results/scholarship-details/:id",
        element:<ScholarshipDetailsPages></ScholarshipDetailsPages>
      },
      {
        path:"/private-policy",
        element:<PrivacyPolicy></PrivacyPolicy>
      }




    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [


      { 
        path:"/dashboard/dashboard-home",
        element:<DashboardHome></DashboardHome>

      },
      
      {
        path:"/dashboard/my-application",
        element:<UserRoutes><MyApplication></MyApplication></UserRoutes>
      },
      {
        path:"/dashboard/manage-application",
        element:<AdminRoutes><ManageApplication></ManageApplication></AdminRoutes>
      },
      {
        path:"/dashboard/add-new-scholarship",
        element:<AdminRoutes><AddNewScholarship></AddNewScholarship></AdminRoutes>
      },
      {
        path:"/dashboard/add-new-university",
        element:<AdminRoutes><AddNewUni></AddNewUni></AdminRoutes>
      },
      {
        path:"/dashboard/manage-universities",
        element:<AdminRoutes><ManageUni></ManageUni></AdminRoutes>
      },
      {
        path:"/dashboard/manage-scholarships",
        element:<AdminRoutes><ManageScholarship></ManageScholarship></AdminRoutes>
      }
    ]
  }
]);