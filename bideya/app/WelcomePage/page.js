"use client";
import WelcomeFooter from "@/app/components/Welcome/WelcomeFooter";
import WelcomeHeader from "@/app/components/Welcome/WelcomeHeader";
import Welcome from "@/app/components/Welcome/Welcome";
const WelcomeMain = () => {
  return (
    <div>
      <WelcomeHeader />
      <Welcome />
      <WelcomeFooter />
    </div>
  );
};

export default WelcomeMain;