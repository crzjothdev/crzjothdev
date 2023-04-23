import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const List = (props) => {
    const { children, ...other } = props
    return (
        <Box
            component="ul"
            sx={{
                listStyleImage: 'url("/icons/chevron.svg")',
                '& li::marker': {
                    fontSize: '40px',
                    verticalAlign: 'middle',
                    lineHeight: '20px'
                }
            }}
            {...other}
        >
            {children}
        </Box>
    )
}

export default function Experience() {
    return (
        <Box id="experience">
            <Typography
                variant="h4"
                component="h3"
                mb={4}
            >
                Experience
            </Typography>
            <Box sx={(theme) => ({
                padding: 4,
                borderRadius: theme.spacing(3),
                border: `1px solid #20909a`,
                [theme.breakpoints.up('md')]: {
                    padding: 6,
                    borderRadius: 10,
                }
            })}>
                <Box pb={3}>
                    <Box mb={1}>
                        <Typography variant="h6" component="h4">
                            <span>External Consultant at </span>
                            <Link 
                                href="https://jetstereo.com" 
                                style={{ textDecoration: 'none' }}
                            >
                                @JETSTEREO S.A.
                            </Link>
                        </Typography>
                        <Typography variant="subtitle2" component="h5">
                            Aug 2023
                        </Typography>
                    </Box>
                    <Typography variant="p" sx={{ textAlign: 'justify' }}>
                        I cooperated to enhance customer focused services
                        as a way to provide soft navigation specially in 
                        checkout module of the web store. I also started to 
                        apply DevOps principles as to automating the deployment 
                        process.
                    </Typography>
                    <List>
                        <li>Build highly qualified software to offer better customer service</li>
                        <li>Pick up technical software specifications based on business rentability</li>
                        <li>Navigation data analytics as feedback to build a better user experience</li>
                    </List>
                </Box>
                <Box pb={3}>
                    <Box mb={1}>
                        <Typography variant="h6" component="h4">
                            Software Develper at <strong>JETSTEREO S.A.</strong>
                        </Typography>
                        <Typography variant="subtitle2" component="h5">
                            Oct 2019 - Jan 2022
                        </Typography>
                    </Box>
                    <Typography variant="p" sx={{ textAlign: 'justify' }}>
                        I cooperate as to enhance customer focused services as a 
                        way to provide soft navigation, especially the checkout 
                        module of their web shopping platform. I also started to 
                        apply DevOps principles as to automating the deployment 
                        process. When it was necessary to rebuild the online store, 
                        I took the role to propuse and started applying modern tools 
                        to improve the performance
                    </Typography>
                    <List>
                        <li>Responsibly building new payment methods in the online store</li>
                        <li>Worked with designers and marketing areas to provide a better customer experience</li>
                        <li>
                            I had the responsibility to upgrade the entire web store to decrease the response time 
                            of the service and increase rentability
                        </li>
                    </List>
                </Box>
                <Box pb={2}>
                    <Box mb={1}>
                        <Typography variant="h6" component="h4">
                            <span>Software Develper at </span>
                            <Link 
                                href="https://banhcafe.hn" 
                                style={{ textDecoration: 'none' }}
                            >
                                @BANHCAFE
                            </Link>
                        </Typography>
                        <Typography variant="subtitle2" component="h5">
                            Sep 2022 - Nov 2022
                        </Typography>
                    </Box>
                    <Typography variant="p" sx={{ textAlign: 'justify' }}>
                        Responsable to build better system interfaces to communicate securely 
                        and faster systems both home hosted and externally privided. I built 
                        an important tool for the bank, It was popular to carry a physical 
                        online banking access token but there are many disadventages, so I 
                        decided to move it to a mobile app using React Native with special 
                        Java function that generates token
                    </Typography>
                    <List>
                        <li>
                            Maintain an API interface that connects to international money 
                            ransfer services (SWIFT)
                        </li>
                        <li>Propose upgrades of obsolete automated processes (RPG to C#)</li>
                        <li>
                            Support the accounting section with the closing process building 
                            graphical insights
                        </li>
                    </List>
                </Box>
            </Box>
        </Box>
    )
}