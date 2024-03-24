
import Carousel from "./components/carousel";
import Navbar from "./components/Navbar";
import VideoLx from "./components/video";
import Footer from "./components/Footer";
import Card from "./components/Card";
import PageBlock from "./components/PageBlock";
import OurProduct from "./components/OurProduct";
import TestiClient from "./components/TestiClient";
import TestiClient2 from "./components/TestiClient2";
import TestiKaryawan from "./components/TestiKaryawan";
import TestiKaryawan2 from "./components/TestiKaryawan2";


export default function Home() {
  return (
    <main>
      <div className='container overflow-x-hidden'>
      <Navbar />
      </div>
      <div>
      <Carousel />
      <Card />
      <PageBlock />
      <VideoLx/>
      <OurProduct />
      <TestiClient />
      <TestiClient2 />
      <TestiKaryawan />
      <TestiKaryawan2 />
      <Footer />
      </div>
    </main>

  );
}
