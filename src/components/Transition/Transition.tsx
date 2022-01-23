import React, { useEffect, useState } from 'react'
import "./Transition.css"
import { TransContext } from '../../functions/context';
interface TransitionProps {
    primaryCol?: string,
    secondaryCol?: string,
    duration?: number,
    delay?: number
}
interface Settings {
    primary: string,
        secondary: string
        duration: number,
        delay: number
}
const Transition = (props: TransitionProps) => {
    const [statefulTransitionContext, setStatefulTransitionContext] = useState({
        active: false,
        nextPage: "/",
        navigate: null,
        update: (newValues: object) => {
            setStatefulTransitionContext({...statefulTransitionContext, ...newValues})
        }
    })
    const settings: Settings = {
        primary: props.primaryCol || "#00B2FF",
        secondary: props.secondaryCol || "#ccc",
        duration: props.duration || 1000,
        delay: props.delay || 0
    }
    useEffect(() => {
        if (statefulTransitionContext.active) {
            document.getElementById("Transition").classList.add("TransitionTransition")
            setTimeout(() => {
                statefulTransitionContext.navigate(statefulTransitionContext.nextPage)
            },settings.duration / 2)
        }
        // setTimeout(() => {
        //     console.log("Adding out trans")
        //     document.getElementById("Transition").classList.remove("TransitionTransition")
        //     document.getElementById("Transition").classList.add("TransitionTransitionOut")
        // }, settings.duration)
            
    }, [statefulTransitionContext])
    if (statefulTransitionContext.active) {
        return (
            <TransContext.Provider value={statefulTransitionContext}>
                <div className="Transition" id="Transition" style={{transitionDuration: (settings.duration / 2).toString() + "ms", animationDuration: settings.duration.toString() + "ms"}}>
                    <div className="primaryTransBox" style={{backgroundColor: settings.primary}}>
    
                    </div>
                    <div className="secondaryTransBox" style={{backgroundColor: settings.secondary}}>
    
                    </div>
                </div>
            </TransContext.Provider>
        )
    } else {
        return (
            null
        )
    }
}

export default Transition
