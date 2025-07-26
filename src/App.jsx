import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import RingPage from "./Pages/RingPage";
import EarringPage from "./Pages/EarringPage";
import CartBookNow from "./Pages/CartBookNow";
import DirectBookNow from "./Pages/DirectBookNow";

import RingOne from "./Pages/RingOne";
import RingTwo from "./Pages/RingTwo";
import RingThree from "./Pages/RingThree";
import RingFour from "./Pages/RingFour";
import RingFive from "./Pages/RingFive";
import RingSix from "./Pages/RingSix";
import RingSeven from "./Pages/RingSeven";
import RingEight from "./Pages/RingEight";
import RingNine from "./Pages/RingNine";
import RingTen from "./Pages/RingTen";
import RingEleven from "./Pages/RingEleven";
import RingTwelve from "./Pages/RingTwelve";
import RingThirteen from "./Pages/RingThirteen";
import RingFourteen from "./Pages/RingFourteen";
import RingFifteen from "./Pages/RingFifteen";
import RingSixteen from "./Pages/RingSixteen";
import RingSeventeen from "./Pages/RingSeventeen";
import RingEighteen from "./Pages/RingEighteen";
import RingNineteen from "./Pages/RingNineteen";
import RingTwenty from "./Pages/RingTwenty";
import RingTwentyone from "./Pages/RingTwentyone";
import RingTwentytwo from "./Pages/RingTwentytwo";
import RingTwentythree from "./Pages/RingTwentythree";
import RingTwentyfour from "./Pages/RingTwentyfour";
import RingTwentyfive from "./Pages/RingTwentyfive";
import RingTwentysix from "./Pages/RingTwentysix";

import EarringOne from "./Pages/EarringOne";
import EarringTwo from "./Pages/EarringTwo";
import EarringThree from "./Pages/EarringThree";
import EarringFour from "./Pages/EarringFour";
import EarringFive from "./Pages/EarringFive";
import EarringSix from "./Pages/EarringSix";
import EarringSeven from "./Pages/EarringSeven";
import EarringEight from "./Pages/EarringEight";
import EarringNine from "./Pages/EarringNine";
import EarringTen from "./Pages/EarringTen";
import EarringEleven from "./Pages/EarringEleven";
import EarringTwelve from "./Pages/EarringTwelve";
import EarringThirteen from "./Pages/EarringThirteen";
import EarringFourteen from "./Pages/EarringFourteen";
import EarringFifteen from "./Pages/EarringFifteen";
import EarringSixteen from "./Pages/EarringSixteen";
import EarringSeventeen from "./Pages/EarringSeventeen";
import EarringEighteen from "./Pages/EarringEighteen";
import EarringNineteen from "./Pages/EarringNineteen";


import Refunds from "./Pages/Refunds";
import Warranty from "./Pages/Warranty";
import Privacy from "./Pages/Privacy";
import TOS from "./Pages/TOS";

import { CartProvider } from './contexts/CartContext';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter basename="/AvaJewels">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/rings" element={<RingPage />} />
          <Route path="/earrings" element={<EarringPage />} />
          <Route path="/cartbooknow" element={<CartBookNow />} />
          <Route path="/directbooknow" element={<DirectBookNow />} />

          <Route path="/ChanelMinimalismDiamondRing" element={<RingOne />} />
          <Route path="/SoloWeddingDiamondRing" element={<RingTwo />} />
          <Route path="/CrownHiddenHaloDiamondRing" element={<RingThree />} />
          <Route path="/BocaRadiantDiamondRing" element={<RingFour />} />
          <Route path="/VenusArtdecoOvalDiamondRing" element={<RingFive />} />
          <Route path="/EternityMinimalismDiamondRing" element={<RingSix />} />
          <Route path="/ComfortPillowPearDiamondRing" element={<RingSeven />} />
          <Route path="/EternityClawOvalDiamondRing" element={<RingEight />} />
          <Route path="/YinAndYangDiamondRing" element={<RingNine />} />
          <Route path="/ArtemisArtdecoEmeraldDiamondRing" element={<RingTen />} />
          <Route path="/GatsbyDiamondRing" element={<RingEleven />} />
          <Route path="/RoyalSideHaloRoundDiamondRing" element={<RingTwelve />} />
          <Route path="/RefinedSharpRadiantDiamondRing" element={<RingThirteen />} />
          <Route path="/RefinedHiddenHaloPearDiamondRing" element={<RingFourteen />} />
          <Route path="/MountainDiamondRing" element={<RingFifteen />} />
          <Route path="/RefinedWeddingDiamondRing" element={<RingSixteen />} />
          <Route path="/GentleWeddingDiamondRing" element={<RingSeventeen />} />
          <Route path="/EdgeWeddingDiamondRing" element={<RingEighteen />} />
          <Route path="/FrenchWeddingDiamondRing" element={<RingNineteen />} />
          <Route path="/KnifeClawPearDiamondRing" element={<RingTwenty />} />
          <Route path="/GraceDiamondRing" element={<RingTwentyone />} />
          <Route path="/RoyalClawEmeraldDiamondRing" element={<RingTwentytwo />} />
          <Route path="/GentlePillowDiamondRing" element={<RingTwentythree />} />
          <Route path="/GentleDoubleHaloDiamondRing" element={<RingTwentyfour />} />
          <Route path="/RoyalClawPrincessDiamondRing" element={<RingTwentyfive />} />
          <Route path="/DuetDoubleHaloOvalDiamondRing" element={<RingTwentysix />} />

          <Route path="/LeafHoopsDiamondEarrings" element={<EarringOne />} />
          <Route path="/SpiderHoopsDiamondEarrings" element={<EarringTwo />} />
          <Route path="/KongoHoopsDiamondEarrings" element={<EarringThree />} />
          <Route path="/SideHaloRoundDiamondStuds" element={<EarringFour />} />
          <Route path="/HaloRoundDiamondStuds" element={<EarringFive />} />
          <Route path="/FlowerRoundDiamondStuds" element={<EarringSix />} />
          <Route path="/DoubleHaloRoundDiamondStuds" element={<EarringSeven />} />
          <Route path="/SharpRadiantDiamondStuds" element={<EarringEight />} />
          <Route path="/SideHaloRadiantDiamondStuds" element={<EarringNine />} />
          <Route path="/HiddenHaloPrincessDiamondStuds" element={<EarringTen />} />
          <Route path="/DoubleClawPrincessDiamondStuds" element={<EarringEleven />} />
          <Route path="/HiddenHaloPearDiamondStuds" element={<EarringTwelve />} />
          <Route path="/ClawPearDiamondStuds" element={<EarringThirteen />} />
          <Route path="/SharpOvalDiamondStuds" element={<EarringFourteen />} />
          <Route path="/PillowOvalDiamondStuds" element={<EarringFifteen />} />
          <Route path="/DoubleClawEmeraldDiamondStuds" element={<EarringSixteen />} />
          <Route path="/DoubleHaloEmeraldDiamondStuds" element={<EarringSeventeen />} />
          <Route path="/GraceRoundDiamondStuds" element={<EarringEighteen />} />
          <Route path="/MinimalismRoundDiamondStuds" element={<EarringNineteen />} />

          <Route path="/refunds" element={<Refunds />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/privacy" element={<Privacy />} /> 
          <Route path="/tos" element={<TOS />} />
        </Routes>
        </BrowserRouter>
    </CartProvider>
  );
};

export default App;