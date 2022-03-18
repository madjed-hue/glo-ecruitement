import React, { Fragment, useState } from "react";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import MapIcon from "@mui/icons-material/Map";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Backdrop, SpeedDial, SpeedDialAction } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const UserOptions = () => {
  const [open, setOpen] = useState(false);

  const options = [
    { icon: <AttachEmailIcon />, name: "Attach CV" },
    { icon: <MapIcon />, name: "Location" },
    { icon: <AlternateEmailIcon />, name: "Other Email" },
    { icon: <LocalPhoneIcon />, name: "Phone" },
  ];

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        // direction="up"
        className="speedDial"
        style={{ zIndex: "11" }}
        icon={<PersonOutlineIcon />}
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth < 768 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
