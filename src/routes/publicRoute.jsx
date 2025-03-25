import CitizenshipCertificate from "../pages/AuthPages/UserDashboard/CitizenshipCertificate/CitizenshipCertificate";
import HoldingTax from "../pages/AuthPages/UserDashboard/HoldingTax/HoldingTax";
import TradeLicense from "../pages/AuthPages/UserDashboard/TradeLicense/TradeLicense";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import LoginScreen from "../pages/LoginScreen/LoginScreen";
import ApplicationStatus from "../pages/public/ApplicationStatus/ApplicationStatus";
import CitizenRegistration from "../pages/public/CitizenRegistration/CitizenRegistration";
import EmployerRegistration from "../pages/public/EmployerRegistration/EmployerRegistration";
import FAQ from "../pages/public/FAQ/FAQ";
import Sitemap from "../pages/public/Sitemap/Sitemap";
import Terms from "../pages/public/Terms/Terms";
import VerifyCertificate from "../pages/public/VerifyCertificate/VerifyCertificate";
import WitnessAttestation from "../pages/public/WitnessAttestation/WitnessAttestation";
import Contact from './../pages/public/Contact/Contact';
import PrivacyPolicy from './../pages/public/PrivacyPolicy/PrivacyPolicy';

export const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/login", component: <LoginScreen /> },
    { path: "/contact", component: <Contact /> },
    { path: "/privacy-policy", component: <PrivacyPolicy /> },
    { path: "/terms", component: <Terms /> },
    { path: "/faq", component: <FAQ /> },
    { path: "/sitemap", component: <Sitemap /> },
    { path: "/register-employer", component: <EmployerRegistration /> },
    { path: "/register-citizen", component: <CitizenRegistration /> },
    { path: "/application-status", component: <ApplicationStatus /> },
    { path: "/verify-certificate", component: <VerifyCertificate /> },
    { path: "/witness-attestation", component: <WitnessAttestation /> },
    { path: "*", component: <Error /> }, // Add 404 route

    // That's are private routes, for testing purpose we use this on public route

    { path: "/holding-tax", component: <HoldingTax /> },
    { path: "/trade-license", component: <TradeLicense /> },
    { path: "/citizenship-certificate", component: <CitizenshipCertificate /> },
]


