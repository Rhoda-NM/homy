import DashboardHeaderOne from "@/layouts/headers/dashboard/DashboardHeaderOne";
import AccountSettingBody from "./AccountSettingBody";

const DashboardAccountSetting = () => {
   const userDetails = {
      FirstName: "Jane",
      LastName: "Doe",
      Email: "janedoe@example.com",
      PhoneNumber: "+1234567890",
      Password: "jane@123", // Ideally, you wouldn't pass a password like this in a real app
   };

   return (
      <>
         <DashboardHeaderOne />
         <AccountSettingBody 
            FirstName={userDetails.FirstName}
            LastName={userDetails.LastName}
            Email={userDetails.Email}
            PhoneNumber={userDetails.PhoneNumber}
            Password={userDetails.Password}
         />
      </>
   );
};

export default DashboardAccountSetting;

