import React, { FC } from "react";
import usePrefix from "utils/usePrefix";

const DashHome: FC = () => {
  const t = usePrefix("dashboard");
  return (
    <div>
      <div>home</div>
    </div>
  );
};
export default DashHome;
