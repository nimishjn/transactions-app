import * as React from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { Card, CardReceive, CardSend } from "iconsax-react";

export default function GiveGotButtons() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const clickYouGave = () => {
    handleClose();
  };

  const clickYouGot = () => {
    handleClose();
  };

  const actions = [
    {
      icon: <CardReceive size="20" color="var(--give-color)" />,
      name: "YOU GOT",
      click: clickYouGave,
      color: "var(--give-color)",
    },
    {
      icon: <CardSend size="20" color="var(--get-color)" />,
      name: "YOU GAVE",
      click: clickYouGot,
      color: "var(--get-color)",
    },
  ];

  return (
    <Box sx={{ position: "absolute", bottom: 0, width: "100%", flexGrow: 1 }}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="Give Get"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<Card size="26" color="white" />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.click}
            sx={{color: action.color}}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
