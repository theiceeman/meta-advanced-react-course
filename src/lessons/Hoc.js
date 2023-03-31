import { useEffect, useState } from 'react'
import '../App.css'

// the withM... naming convention is advised by react, because HOC's provide a component with something.
const withMousePosition = (WrappedComponent) => {
    return (props) => {
        const [mousePosition, setMousePosition] = useState({
            x: 0,
            y: 0
        })

        useEffect(() => {
            const handleMousePositionChange = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY
                })
            }
            window.addEventListener("mousemove", handleMousePositionChange)
            return () => {
                window.removeEventListener("mouseover", handleMousePositionChange)
            }
        }, [])

        return <WrappedComponent {...props} mousePosition={mousePosition} />

    }
}

const PanelMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) {
        return null;
    }

    return (
        <div className="BasicTracker">
            <p>Mouse position:</p>
            <div className="Row">
                <span>x:{mousePosition.x}</span>
                <span>y:{mousePosition.y}</span>
            </div>
        </div>
    )

}

const PointMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) {
        return null;
    }
    return (
        <p>
            ({mousePosition.x}, {mousePosition.y})
        </p>
    )

}

const PanelMouseTracker = withMousePosition(PanelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)



const Hoc = () => {
    return (
        <div className="App">
            <header className='Header'>Little lemon restaurant</header>
            <PanelMouseTracker />
            <PointMouseTracker />
        </div>

    );
}

export default Hoc;