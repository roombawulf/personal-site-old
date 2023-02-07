import AnimatePage from "../AnimatePage";

import wavesImage from '../images/waves-shader.png'
import particlesImage from '../images/particles-shader.png'
import itemGuesserImage from '../images/item-guesser.png'
import React from "react";

export default function Projects(){
    return (
        <AnimatePage>
            <section className='projects'>
                <article>
                    <h2>MSc Research - Deep Learning with Materials</h2>
                    {/* <h4>Python // PyTorch // Machine Learning</h4> */}
                    <h4><StyleWords words={['Python', 'Pytorch', 'Machine Learning']}/></h4>
                    <p>
                    I developed an accurate vision based deep learning model, using convolutional neural networks, as a fast method
                    to characterise heterogeneous material structures directly from optical deformation data (strain-fields).
                    </p>
                </article>
                <article>
                    <h2>Gerstner Waves Shader</h2>
                    {/* <h4>JavaScript // GLSL // WebGL // THREE.JS</h4> */}
                    <h4><StyleWords words={['JavaScript', 'GLSL', 'WebGL', 'THREE.JS']}/></h4>
                    <p>
                    I created a simple wave shader that was written in GLSL and hosted in a THREE.JS environment.
                    This was one of the first shader projects I did and helped me gain a deeper understanding of WebGL lighting, 
                    dynamic normal calculations and creating realistic water animations through pure maths.
                    </p>
                    <img src={wavesImage} alt='waves shader screenshot' className='project-image' />
                </article>
                <article>
                    <h2>Interactive Particles Shader</h2>
                    {/* <h4>JavaScript // GLSL // WebGL // THREE.JS</h4> */}
                    <h4><StyleWords words={['JavaScript', 'GLSL', 'WebGL', 'THREE.JS']}/></h4>
                    <p>
                    Interactivity on the web is important especially with shaders! This particle shader uses mouse interactivity 
                    through the use of raycasting and vertex shader animations to create pretty cool exploding particle effect with curl noise.
                    </p>
                    <img src={particlesImage} alt='particles shader screenshot' className='project-image' />
                </article>
                <article>
                    <h2>Game Item Guessing Quiz</h2>
                    {/* <h4>React // JavaScript // Python</h4> */}
                    <h4><StyleWords words={['React', 'JavaScript', 'Python']}/></h4>
                    <p>
                    First JavaScript project I did using the React framework. I created an item guessing quiz
                    for one of my favourite games: The Binding of Isaac.
                    </p>
                    <img src={itemGuesserImage} alt='item guesser screenshot' className='project-image' />
                </article>
            </section>
        </AnimatePage>
    )
}

function StyleWords({words, ...props}){
    return(
        words.map((word, index, words) => {
            if(index !== words.length-1){
                return(
                    <React.Fragment key={index}>
                        <span className='highlight'>{word}</span><> {'//'} </>   
                    </React.Fragment>
                )
            }
            else{
                return <span key={index} className='highlight'>{word}</span>
            } 
        })
    )
}


