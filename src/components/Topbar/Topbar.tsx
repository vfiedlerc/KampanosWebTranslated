import React, { useState, useEffect } from "react";
import { debounce } from "./debounce";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { DrawerMenu } from "../Drawer/DrawerMenu";
import menuLogo from "../../assets/KampanosBrand.svg";

export default function Topbar() {
  const menuItems = [
    {
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
    },
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    height: "60px",
    width: "100%",
    backgroundColor: "#fff",
    textAlign: "center",
    transition: "top 0.6s",   
  };

  return (
    // @ts-ignore
    <AppBar style={{ ...navbarStyles, top: visible ? "0" : "-60px", boxShadow: (prevScrollPos < 110) ? 'none' : "0px 7px 11px -6px rgba(0,0,0,0.10)" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src={menuLogo} alt="KampanosLogo" title="KampanosLogo" />
        </Box>
        <DrawerMenu menuItems={menuItems} />
      </Toolbar>
    </AppBar>
  );
}

