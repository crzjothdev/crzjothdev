export default function Experience(): React.ReactNode {
    return (
        <div id="experience">
            <h3 className="text-2xl p-5" role="h3">
                <span>Experience</span>
            </h3>
            <div className="text-body px-5">
                <div className="pb-5">
                    <div className="pb-2">
                        <h3>External Consultant at <a href="#">JETSTEREO S.A.</a></h3>
                        <span>Aug 2023</span>
                    </div>
                    <p>
                        I cooperated to enhance customer focused services as a way 
                        to provide soft navigation specially in checkout module of 
                        the web store. I also started to apply DevOps principles as 
                        to automating the deployment process.
                    </p>
                    <ul className="pt-2">
                        <li>Build highly qualified software to offer better customer service</li>
                        <li>Pick up technical software specifications based on business rentability</li>
                        <li>Navigation data analytics as feedback to build a better user experience</li>
                    </ul>
                </div>
                <div className="pb-5">
                    <div className="pb-2">
                        <h3>Software Develper at <a href="#">JETSTEREO S.A.</a></h3>
                        <span>Oct 2019 - Jan 2022</span>
                    </div>
                    <p>
                        I cooperate as to enhance customer focused services as a 
                        way to provide soft navigation, especially the checkout 
                        module of their web shopping platform. I also started to 
                        apply DevOps principles as to automating the deployment 
                        process. When it was necessary to rebuild the online store, 
                        I took the role to propuse- and started applying modern tools 
                        to improve the performance
                    </p>
                    <ul className="pt-2">
                        <li>Responsibly building new payment methods in the online store</li>
                        <li>Worked with designers and marketing areas to provide a better customer experience</li>
                        <li>
                            I had the responsibility to upgrade the entire web store to decrease the response time 
                            of the service and increase rentability
                        </li>
                    </ul>
                </div>
                <div className="pb-5">
                    <div className="pb-2">
                        <h3>Software Develper at <a href="#">@BANHCAFE</a></h3>
                        <span>Sep 2020 - Nov 2022</span>
                    </div>
                    <p>
                        Responsable to build better system interfaces to communicate securely 
                        and faster systems both home hosted and externally privided. I built 
                        an important tool for the bank, It was popular to carry a physical 
                        online banking access token but there are many disadventages, so I 
                        decided to move it to a mobile app using React Native with special 
                        Java function that generates token
                    </p>
                    <ul className="pt-2">
                        <li>
                            Maintain an API interface that connects to international money 
                            ransfer services (SWIFT)
                        </li>
                        <li>Propose upgrades of obsolete automated processes (RPG to C#)</li>
                        <li>
                            Support the accounting section with the closing process building 
                            graphical insights
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}