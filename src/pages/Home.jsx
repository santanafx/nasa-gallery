import { MarsRoverGallery } from "../components/MarsRoverGallery";
import { PicOfTheDay } from "../components/PicOfTheDay";
import { YoutubeBg } from "../components/YoutubeBg";

function Home() {
  return (
    <main>
      <YoutubeBg />
      <PicOfTheDay />
      <MarsRoverGallery />
    </main>
  );
}

export default Home;
