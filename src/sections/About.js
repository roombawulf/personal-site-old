import AnimatePage from "../AnimatePage";
import { Linky } from "../Navbar";

let paragraph = 
`
Well... my name is Haris and I have a BEng in Mechanical Engineering + 
MSc in Mechatronics. Whilst I love robotics, in my free time I like to 
learn about front-end developement. Especially with a focus
towards WebGL and graphics. Check out my projects to see
what I have made!
`

export default function About(){
    return (
        <AnimatePage>
            <section className='about'>
                <p>{paragraph}</p>
                <Linky titleName='Contact ME' to='/contact' className='navlink' />
            </section>
        </AnimatePage>
    )
}