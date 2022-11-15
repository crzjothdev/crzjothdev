import React from 'react'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import makeStyles from '@mui/styles/makeStyles'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'

const useStyles = makeStyles((theme) => ({
    root: {

    },
    appBar: {
        backgroundColor: 'rgba(255,255,255,0.9)'
    },
    list: {
        minWidth: theme.spacing(30)
    }
}))

export default function AppBar(props) {
    const { pages, ...other } = props

    const classes = useStyles()

    const [open, setOpen] = React.useState(false)

    const handleToggle = (ev) => {
        setOpen(!open)
    }

    const handleClose = (ev) => {
        setOpen(false)
    }

    return (
        <>
            <MuiAppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Box sx={{
                        display: { xs: 'flex', md: 'none' },
                        justifyContent: 'center'
                    }}>
                        <IconButton
                            onClick={handleToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center'
                    }}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </MuiAppBar>
            <Drawer
                open={open}
                onClose={handleClose}
            >
                <MenuList
                    className={classes.list}
                >
                    {pages.map((page, index) => (
                        <MenuItem key={index}>{page}</MenuItem>
                    ))}
                </MenuList>
            </Drawer>
        </>
    )
}