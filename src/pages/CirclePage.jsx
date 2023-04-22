import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";


import blueCircleImage from "../assets/spidi.png"
import redCircleImage from "../assets/spidi.png"
import greenCircleImage from "../assets/spidi.png"
import yellowCircleImage from "../assets/spidi.png"
import orangeCircleImage from "../assets/spidi.png"
import pinkCircleImage from "../assets/spidi.png"

const CirclePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Circle = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  position: absolute;
  ${props =>
    props.position &&
    Object.entries(props.position)
      .map(([key, value]) => `${key}: ${value};`)
      .join("\n")}
`

const ColoredCircle = styled(Circle)`
  background-color: ${props => props.color};
`

const ImageCircle = styled(Circle)`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
`

const CirclePage = () => {
  const centerCircleSize = "200px"
  const smallerCircleSize = "100px"
  const largerCircleSize = "250px"
  const centerCirclePosition = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
  const smallerCircleColors = ["red", "green", "yellow", "orange", "purple"]
  const smallerCircleRadius = 250
  const largerCirclePosition = {
    bottom: "50%",
    left: "50%",
    transform: "translate(-50%, 50%)"
  }

  const [rotationAngle, setRotationAngle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationAngle(prevAngle => prevAngle + 0.5) // Rotate by 6 degrees every 50 milliseconds
    }, 50)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const getCirclePosition = (radius, angle) => {
    const centerX = 0
    const centerY = 0
    const xPos = centerX + radius * Math.cos((angle * Math.PI) / 180)
    const yPos = centerY + radius * Math.sin((angle * Math.PI) / 180)
    return {
      top: `${yPos}px`,
      left: `${xPos}px`,
      transform: "translate(-50%, -50%)"
    }
  }

  const smallerCirclePositions = smallerCircleColors.map((_, index) =>
    getCirclePosition(smallerCircleRadius, rotationAngle + index * 72)
  )

  const handleCircleClick = () => {
    console.log("123");
  }

  return (
    <CirclePageContainer>
      <ColoredCircle
        size={centerCircleSize}
        color="#B7C8FF"
        position={centerCirclePosition}  
        onClick = {()=> handleCircleClick()}
        >
            
        </ColoredCircle>
        
        
    
      <div
        style={{
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`,
          backgroundColor: "red"
        }}
      >
        {smallerCircleColors.map((color, index) => (
          <ImageCircle
            key={index}
            size={smallerCircleSize}
            imageUrl={
              index === 0
                ? blueCircleImage
                : [
                    redCircleImage,
                    greenCircleImage,
                    yellowCircleImage,
                    orangeCircleImage,
                    pinkCircleImage
                  ][index - 1]
            }
            position={smallerCirclePositions[index]}
          />
        ))}
      </div>
      <ColoredCircle
        size={largerCircleSize}
        color="#FFC9B2"
        position={largerCirclePosition}
      />
    </CirclePageContainer>
  )
}



export default CirclePage
