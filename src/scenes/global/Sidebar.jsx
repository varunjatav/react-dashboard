import React , {useState} from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import "react-pro-sidebar/dist/css/style.css";
import { Box, IconButton , Typography, ueTheme, useTheme } from "@mui/material";
import { tokens } from '../../theme';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Link } from 'react-router-dom';


const Item =({ title, to, icon, selected, setSelected }) =>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem 
    active={selected === title} 
    style={{color: colors.grey[100]}} 
    onClick={()=> setSelected(title)}
    icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to}/>
    </MenuItem>
  )
}

const SidebarComp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed ] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box 
     sx={{
      "& .pro-sidebar-inner" : {
      background: `${colors.primary[800]} !important`
     }, 
     "& .pro-icon-wrapper" : {
      backgroundColor: "transparent !important"
     },
     "& .pro-inner-item" :{
      padding: "5px 35px 5px 20px !important" 
     },
     "& .pro-inner-item:hover" :{
      color: "#868dfb !important" 
     },
     "& .pro-menu-item.active": {
      color: "#6870fa !important"
     },
   
    }}
    
    >
      <Sidebar collapsed={isCollapsed}>
      <Menu iconShape="square">
        <MenuItem 
         onClick={() => setIsCollapsed(!isCollapsed)}
         icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
         style={{
          margin: "10px 0 20px 0",
          color: colors.grey[100]
         }}
         >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
              >
              <Typography variant='h3' color={colors.grey[100]}>
                  ADMINS
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon/>
              </IconButton>
             </Box>
          )}
        
        </MenuItem>
       
        {/* USER */}
        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img 
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" 
              alt="profile-user" 
              width="100px"
              height="100px"
              style={{cursor: "pointer" ,borderRadius: "50%"}}
              />
            </Box>
            <Box textAlign="center">
              <Typography 
              variant='h2' 
              color={colors.grey[100]} 
              fontWeight="bold" 
              sx={{m: "10px 0 0 0"}}
              >
                Varun Jatav
              </Typography>
              <Typography 
              variant='h5' 
              color={colors.greenAccent[500]}
              >
                VP Fancy Admins
              </Typography>
            </Box>
          </Box>
        )}
        {/* MENU ITEMS */}
        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
          title="Dashboard"
          to="/"
          icon={<HomeOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          />
            <Item
          title="Dashboard"
          to="/"
          icon={<HomeOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          />
            <Item
          title="Dashboard"
          to="/"
          icon={<HomeOutlinedIcon/>}
          selected={selected}
          setSelected={setSelected}
          />
          
        </Box>
         </Menu>
      </Sidebar>
      
    </Box>
  )
}

export default SidebarComp;