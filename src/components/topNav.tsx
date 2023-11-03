import React from 'react'
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <AppBar position="static" style={{ marginBottom: "2rem" }}>
    <Toolbar>
      <Typography variant="h6" component={'div'} sx={{ flexGrow: 1 }}>
      <Link to={'/'}>
          Country Data App
      </Link>
      </Typography>
    </Toolbar>
  </AppBar>
  )
}
