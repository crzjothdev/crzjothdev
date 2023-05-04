import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import ProjectCard from '../ProjectCard'

export default function Projects() {
    return (
        <Box id="projects">
            <Typography 
                variant="h4"
                mb={4}
            >
                Projects
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
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ProjectCard
                            title="Professional Profile"
                            subtitle="Built with NextJS 13"
                            thumbnail="/images/logo.webp"
                            gitHubUrl="https://github.com/crzjothdev"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}