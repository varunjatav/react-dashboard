import React, { useContext } from "react";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
// import InputBase from "@mui/material/InputBase";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const ColorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ml: 2, flex:1}} placeholder="Seach"/>
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
     <Box display="flex">
     <IconButton onClick={ColorMode.toggleColorMode}>
      {
        theme.palette.mode === "dark" ? (
       <DarkModeOutlinedIcon/>
        ):(
            <LightModeOutlinedIcon/>
        )
      }
        
      </IconButton>
      <IconButton>
        <NotificationOutlinedIcon/>
      </IconButton>
      <IconButton>
        <SettingsOutlinedIcon/>
      </IconButton>
      <IconButton>
        <PersonOutlinedIcon/>
      </IconButton>
     
     </Box>
    </Box>
  );
};

export default Topbar;
