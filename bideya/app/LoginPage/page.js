//LoginMain:
import Loginheader from "@/app/components/Login/Loginheader"; 
import LoginFooter from "@/app/components/Login/LoginFooter"; 
import Login from "@/app/components/Login/Login"; 

const LoginMain = () => {

  return (
    <div>
      <Loginheader />
      <Login />
      <LoginFooter/>
      
    </div>
  );
};

export default LoginMain;
