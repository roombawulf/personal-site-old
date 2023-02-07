import { motion } from 'framer-motion'

const animations = {
    initial: {opacity: 0, y:10},
    animate: {opacity: 1, y: 0},
    exit: {opacity:0, y: 10},
}

const styles = {
    display: 'flex',
    padding: '0 1.5rem 1.5rem 1.5rem'
}

export default function AnimatePage({children}){
    return (
        <motion.div variants={animations} 
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{duration: 0.2}}
        style={styles}
        >
        {children}
        </motion.div>
    )
}