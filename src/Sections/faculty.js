import React from "react";
import DarkBg from "../Components/DarkBg";

function Faculty() {

  const facultyText = "We are honoured to introduce Dr. Vidhya S, the faculty coordinator of the Entrepreneurship Cell and also the Head of the Department of Electronics and Communication with specialization in Biomedical Engineering. Her multifaceted expertise and unwavering dedication make her a true pillar of strength within our community. Dr. Vidhya S's rich academic background, combined with her visionary leadership, has been instrumental in shaping E-Cell's trajectory. Her unwavering commitment to nurturing young minds and providing them with the tools they need to succeed sets her apart as a true mentor and guide. Under her mentorship, the Entrepreneurship Cell has flourished into a vibrant ecosystem where innovation thrives, ideas take shape, and dreams come to fruition."

  return (
    <div id="Faculty">
      <DarkBg head="Faculty" faculty={facultyText}/>
    </div>
  );
}

export default Faculty;
