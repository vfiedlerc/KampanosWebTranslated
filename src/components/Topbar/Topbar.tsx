import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { DrawerMenu } from "../Drawer/DrawerMenu";
import menuLogo from "../../assets/KampanosBrand.svg";

export default function Topbar() {
  const menuItems = [{     
    label: "label1",     
    target: "",     
    href: "",     
    size: 11,     
    title: "menu1",     
    color: "#000000",   
   }, 
    {
    label: "label2",     
    target: "",     
    href: "",     
    size: 11,     
    title: "menu2",     
    color: "#000000",  
    } 
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        color: "#0D3475",
        boxShadow: "none",
        paddingLeft: '5%',
        paddingRight: '5%',
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src={menuLogo} alt="KampanosLogo" title="KampanosLogo" />
        </Box>
        <DrawerMenu menuItems={menuItems} />
      </Toolbar>
    </AppBar>
  );
}
