import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorEl }) => {
  return (
    <Menu anchorEl={anchorEl} open={false}>
      <div
        style={{
          width: "10rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        provident dolore excepturi molestiae esse error ex placeat repellendus
        reprehenderit itaque?
      </div>
    </Menu>
  );
};

export default FileMenu;
