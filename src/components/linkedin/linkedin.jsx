import React, { useEffect } from "react";

function LinkedIn () {

  useEffect(() => {
    window.location.href = "https://www.linkedin.com/in/okwiri-oduor-ab2010219/";
  }, []);

  return (
    <div>
      <h2>Linkedin</h2>
    </div>
  );
}

export default LinkedIn;
