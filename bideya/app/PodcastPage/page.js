import MiddleContainer from "@/app/components/Podcast/MiddleContainer"; 
import Library from "@/app/components/Podcast/Library"; 
import PodcastDetails from "@/app/components/Podcast/PodcastDetails"; 
import PodcastFooter from "@/app/components/Podcast/PodcastFooter"; 
import PodcastHeader from "@/app/components/Podcast/PodcastHeader";
import PodcastRecherche from "@/app/components/Podcast/PodcastRecherche";
const LoginMain = () => {

  return (
    <div>
      <Library />
      <PodcastHeader/>
      <PodcastRecherche/>
      <PodcastDetails/>
      <MiddleContainer/>
      <PodcastFooter/>
      


      
    </div>
  );
};

export default LoginMain;
