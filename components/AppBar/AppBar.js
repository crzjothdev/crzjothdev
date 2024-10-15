import React from 'react'
import Image from 'next/image'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'

const StyledMuiAppBar = styled(MuiAppBar)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
}))

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        minHeight: '80px'
    }
}))

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        backgroundColor: '#05262b',
        color: theme.palette.grey[50],
    }
}))

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'center',
}))

export default function AppBar(props) {
    const { pages, onNavigateClick, ...other } = props

    const [open, setOpen] = React.useState(false)

    const handleToggle = (ev) => {
        setOpen(!open)
    }

    const handleClose = (ev) => {
        setOpen(false)
    }

    return (
        <>
            <StyledMuiAppBar position="static">
                <StyledToolBar>
                    <Box sx={{
                        display: { xs: 'flex', md: 'none' },
                        justifyContent: 'space-between',
                        width: '100%',
                    }}>
                        <IconButton
                            onClick={handleToggle}
                            color="primary"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Button
                            href="/documents/resume.pdf"
                            variant="outlined"
                            component="a"
                            target="_blank"
                        >
                            Resume
                        </Button>
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        position: 'relative'
                    }}>
                        <Box
                            sx={(theme) => {
                            return ({
                                position: 'absolute',
                                left: theme.spacing(1),
                                top: '50%',
                                transform: 'translateY(-50%)'
                            })
                        }}>
                            <Avatar
                                src="/images/logo.webp"
                                alt="angelos-logo"
                                size="large"
                                variant="square"
                            />
                        </Box>
                        <Box>
                            {pages.map((page, index) => (
                                <Button
                                    key={index}
                                    onClick={() => onNavigateClick(page)}
                                >
                                    {page.label}
                                </Button>
                            ))}
                        </Box>
                        <Button
                            variant="outlined"
                            component="a"
                            target="_blank"
                            href="/documents/cv-angelo-cruz.pdf"
                            sx={{
                                position: 'absolute',
                                right: (theme) => theme.spacing(1),
                                top: '50%',
                                transform: 'translateY(-50%)'
                            }}
                        >
                            Resume
                        </Button>
                    </Box>
                </StyledToolBar>
            </StyledMuiAppBar>
            <StyledDrawer
                open={open}
                onClose={handleClose}
            >
                <DrawerHeader>
                    <Image
                        src="/images/logo.webp"
                        alt="angelos-logo"
                        width={50}
                        height={50}
                    />
                </DrawerHeader>
                <Divider sx={{ borderColor: '#4f4f4f' }} />
                <MenuList
                    onClick={handleClose}
                    sx={(theme) => ({
                        minWidth: theme.spacing(25)
                    })}
                >
                    {pages.map((page, index) => (
                        <MenuItem
                            key={index}
                            onClick={() => onNavigateClick(page)}
                        >
                            {page.label}
                        </MenuItem>
                    ))}
                </MenuList>
            </StyledDrawer>
        </>
    )
}