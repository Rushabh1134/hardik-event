import Footer from "@/components/Footer";
import HeroComponent from "@/components/Hero";


export default function Home() {
  return (
    <>
      <HeroComponent tagline="Turning Moments into Memories." />
      {/* <CalendarHeatMap/> */}
      <div className=" h-screen"></div>
    
      <Footer/>

    </>
  );
}
