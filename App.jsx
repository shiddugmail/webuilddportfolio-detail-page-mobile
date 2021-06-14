import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X04PortfolioDetailPageMobile from "./components/X04PortfolioDetailPageMobile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|04-portfolio-detail-page-mobile)">
          <X04PortfolioDetailPageMobile {...x04PortfolioDetailPageMobileData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-3@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame145Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const button22Data = {
    children: "VIEW MORE",
};

const group8622Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-18@2x.svg",
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-1@2x.svg",
};

const instagramData = {
    instagram: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-379@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-156@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-157@2x.svg",
};

const group87Data = {
    facebookAppSymbolProps: facebookAppSymbolData,
    facebookAppSymbolProps2: instagramData,
    twitterProps: twitterData,
};

const group32Data = {
    place: "Contact",
    overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-374@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-151@2x.svg",
    overlapGroup5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-9@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-153@2x.svg",
    text21: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text20: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
};

const frame140Data = {
    aboutUs: "About Us",
    projects: "Projects",
};

const frame1402Data = {
    aboutUs: "Gallery",
    projects: "Knowledge Transfer",
};

const frame1403Data = {
    aboutUs: "Blogs",
    projects: "FAQ’s",
};

const frame5Data = {
    quickLinks: "Quick Links",
    frame140Props: frame140Data,
    frame1402Props: frame1402Data,
    frame1403Props: frame1403Data,
};

const group212Data = {
    group862Props: group8622Data,
    group87Props: group87Data,
    group862Props2: group32Data,
    frame5Props: frame5Data,
};

const x04PortfolioDetailPageMobileData = {
    title: "Project Name",
    rectangle76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76@2x.png",
    text1: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable.",
    rectangle91: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-91@2x.png",
    rectangle92: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-92@2x.png",
    rectangle93: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-93@2x.png",
    rectangle94: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-94@2x.png",
    rectangle95: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-95@2x.png",
    rectangle96: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-96@2x.png",
    biGrid3X2Gap: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/bi-grid-3x2-gap-1@2x.png",
    previous: "Previous",
    projectName: "Project Name",
    next: "Next",
    projectName2: "Project Name",
    frame145Props: frame145Data,
    button22Props: button22Data,
    group212Props: group212Data,
};

