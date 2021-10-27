import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { DrawerMenu } from "../Drawer/DrawerMenu";
import menuLogo from "../../assets/KampanosBrand.svg";
import { Link } from "@mui/material";

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
        paddingTop: '2%',
        paddingLeft: '5%',
        paddingRight: '5%',
        width: '100%'
      }}
    >
      <Toolbar sx={{ width: '100%'}}>
        <Box sx={{ flexGrow: 1 }}>          
          <Link href="http://www.kampanos.pt/">{<img src={menuLogo} alt="KampanosLogo" title="KampanosLogo" />}</Link>
        </Box>
        <DrawerMenu menuItems={menuItems}/>
      </Toolbar>
    </AppBar>
  );
}
