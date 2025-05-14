import { useState } from "react";
import Header from "../Components/Header/Header";

import Footer from "../Components/Footer/Footer";

const AdminPage = () => {

  // Variables ===================================================================
  
  const [FormDataObj, setFormDataObj] = useState({HeaderText: "Company Details", ButtonText: "Save Changes"});

  const [DataArray, setDataArray] = useState([

    { name: "Company Name", value: "Hello" },
    
  ]);

  // ===================================================================
  // ===================================================================
  // ===================================================================

  // onChange ==========================================================

  const onChange = (name, value) => {

    try
    {
      const newArray = [...DataArray];

      const obj = newArray.find((item) => item.name == name)
      obj.value = value;
      setDataArray(newArray);

      console.log(DataArray);

    }
    catch(err)
    {
      console.log("myErr onChange :=== " + err);
    }
    finally
    {
    }
  }

  // ==========================================================
  // ==========================================================
  // ==========================================================


  return (
    <>
      <Header />

      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[var(--c1)] via-[var(--c5)]/60 to-[var(--c1)]">
        <div className="w-8/10 md:w-7/10 lg:w-1/2 flex items-center justify-center">

        {/* <Form FormDataObj={FormDataObj} DataArray={DataArray} onChange={onChange}/> */}
          
        </div>

      </div>

      <Footer/>

    </>
  );
};

export default AdminPage;
