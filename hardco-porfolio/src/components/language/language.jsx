import { Menu, MenuItem, ListItemIcon, Avatar } from '@material-ui/core'
import { Language } from '@material-ui/icons'
import i18next from 'i18next'
import React, { useState } from 'react'
import './language.scss'
const languages = [
    {
      code:"zh",
      name:"中文",
      country_code:'zh-TW',
      icon: `./assets/language/ch.png`
    },
    {
      code:"en",
      name:"English",
      country_code:'en',
      icon: `./assets/language/en.jpeg`
    }
  ]
const  LanguageOption = ()=> {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
     setAnchorEl(null);
    };
    const switchLan = (code:string)=>{
        i18next.changeLanguage(code)
        setAnchorEl(null);
    }
    return (
        <>
            <Language onClick={handleClick} className="button"/>

            {/* <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            // startIcon={<Language/>}
            className="button"
            >
          </Button> */}
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            { languages.map((l)=>(
             <MenuItem onClick={()=>switchLan(l.code)}>
             <ListItemIcon>
             <Avatar src={l.icon} />
           </ListItemIcon>
            {l.name}
         </MenuItem> 
            ))}
            
          </Menu>
        </>
    )
}

export default LanguageOption;