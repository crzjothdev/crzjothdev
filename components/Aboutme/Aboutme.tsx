export default function AboutMe(): React.ReactNode {
    return (
        <div id="about-me">
            <h3 className="text-2xl p-5" role="h3">
                <span>About Me</span>
            </h3>
            <div className="flex justify-center w-full px-5">
                <div className="">
                    <div>Hello my name is Angelo! Since I started my university life I have 
                    been interested in computer technologist, continuosly learning and 
                    applying modern software patterns and methods. I have been working 
                    on great projects in private companies and personal entrepreneurship. 
                    I have a special focus on frontend and mobile development but also 
                    on backend and multipropuse programming languages.
                    </div>
                    <h4 className="text-lg pt-3">Programming Languages</h4>
                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C#</li>
                        <li>Rust</li>
                    </ul>
                </div>
                <img
                    src="./images/profile.webp"
                    alt=""
                    className="h-48 w-96 object-scale-down"
                />
            </div>
        </div>
    )
}