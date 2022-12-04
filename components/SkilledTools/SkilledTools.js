import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const tools = [
    { name: 'Javascript', icon: 'javascript.svg' },
    { name: 'NextJS', icon: 'nextjs.svg'},
    { name: 'PHP', icon: 'php.svg' },
    { name: 'Java', icon: 'java.svg' },
    { name: 'C#', icon: 'csharp.svg' },
    { name: 'Rust', icon: 'rust.svg' },
    { name: 'python', icon: 'python.svg' },
    { name: 'C++', icon: 'cplusplus.svg' }
]

const ToolBox = (props) => (
    <Box
        sx={(theme) => ({
            height: theme.spacing(10),
            width: theme.spacing(10),
            margin: '0 auto',
            position: 'relative',
            padding: theme.spacing(2),
            border: '1px solid #efefef',
            boxShadow: 1,
            borderRadius: '50%' 
        })}
    >
        <Image {...props} />
    </Box>
)

export default function SkilledTools() {
    return (
        <Box id="tools">
            <Typography 
                variant="h4"
                mb={4}
            >
                Skilled Tools
            </Typography>
            <Box sx={(theme) => ({
                padding: 4,
                borderRadius: theme.spacing(3),
                border: '1px solid #efefef',
                [theme.breakpoints.up('md')]: {
                    padding: 6,
                    borderRadius: 10,
                }
            })}>
                <Grid container spacing={4}>
                    {tools.map((tool, index) => (
                        <Grid key={index} item xs={6} sm={3} md={2} lg={1}>
                            <ToolBox
                                alt={tool.name}
                                src={`/icons/${tool.icon}`}
                                fill
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}