import WorkshopHeader from "@/app/components/workshop/WorkshopHeader"; 
import WorkshopMain from "@/app/components/workshop/WorkshopMain"; 
import WorkshopActivity from "@/app/components/workshop/WorkshopActivity"; 
import WorkshopFooter from "@/app/components/workshop/WorkshopFooter";

const Workshop = () => {
  return (
    <div>

      <WorkshopHeader />
      <WorkshopMain />
      <WorkshopActivity />
      <WorkshopFooter />
    </div>
  );
};

export default Workshop;
