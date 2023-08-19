import React from "react";
import DarkBg from "../Components/DarkBg";

function Faculty() {

  const facultyText = "Entrepreneurship Cell is a student body based in VIT, Vellore which aims at fostering entrepreneurial spirit amongst young aspirants by providing them with a platform and required resources for actuating their ideas into successful business ventures. E-Cell strives at attaining an ideal entrepreneurial environment in the campus and we believe in taking strides towards establishing an ever-growing, an ever-improving Start-Up environment. Our sole approach is to magnify the reach and to set up a diverse pool of investors, evaluators and mentors.";


  return (
    <div id="Faculty">
      <DarkBg head="Faculty" faculty={facultyText}/>
    </div>
  );
}

export default Faculty;
