import SignIn from "@/app/components/SignIn/SignIn";
import SignInHeader from "@/app/components/SignIn/SignInHeader";
import SignFooter from "@/app/components/SignIn/SignFooter";


const SignInMain = () => {
  return (
    <div>
     <SignInHeader/>
      <SignIn />
      <SignFooter/>
    
    
    </div>
  );
};

export default SignInMain;