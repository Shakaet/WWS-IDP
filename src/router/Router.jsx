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

import Collaborates from "../component/Collaborates";



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
        element: <FastEfficientDetails />
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

        path:"ielts-preparation",
        element:<IeltsPrep></IeltsPrep>
      },
      {
        path:"contact",
        element:<Collaborates></Collaborates>
      }


    ]
  },
]);