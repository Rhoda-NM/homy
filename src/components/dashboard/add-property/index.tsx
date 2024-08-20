import DashboardHeaderOne from "@/layouts/headers/dashboard/DashboardHeaderOne"
import AddPropertyBody from "./AddPropertyBody"

const DashboardAddProperty = () => {
   const title = "Add New Property";
   const fileAttachment = {
      name: "example.jpg", // Example file name, you can set this dynamically
   };

   return (
      <>
         <DashboardHeaderOne />
         <AddPropertyBody
            title={title}
            fileAttachment={fileAttachment}
          />
      </>
   )
}

export default DashboardAddProperty
