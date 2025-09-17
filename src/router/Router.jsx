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

    ]
  },
]);