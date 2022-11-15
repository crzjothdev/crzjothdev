import React from 'react'
import InputBase from '@mui/material/InputBase'
import Button from '@mui/material/Button'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    button: {
        marginLeft: theme.spacing(5),
        padding: theme.spacing(2, 2),
        borderRadius: theme.spacing(1.8),
        color: '#fff'
    },
    input: {
        '& .MuiInputBase-input': {
            padding: theme.spacing(1.6, 1.8),
            color: '#fff',
            fontSize: '1.2rem'
        },
        border: '2px solid #efefef',
        borderRadius: theme.spacing(1.8),
        minWidth: theme.spacing(60)
    }
}))

export default function Contact() {
    const classes = useStyles()

    const [mail, setMail] = React.useState('')

    const handleChange = (e) => {
        const value = e.target.value

        setMail(value)
    }

    return (
        <div className={classes.root}>
            <InputBase
                value={mail}
                onChange={handleChange}
                className={classes.input}
            />
            <Button
                variant="contained"
                className={classes.button}
                disabled={!mail}
            >
                Contact Me
            </Button>
        </div>
    )
}
