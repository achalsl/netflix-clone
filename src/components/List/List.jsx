import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import ListItem from '../ListItem/ListItem'
import './List.scss'
const List = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false)

    const listRef = useRef()
    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 5)
            listRef.current.style.transform = `translateX(${1150 + distance}px)`
        }
        if(direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 5)
            listRef.current.style.transform = `translateX(${-1150 + distance}px)`
        }
    }
    return (
        <div className="list">
            <span className="listTitle">Continue To Watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined 
                    className="sliderArrow left" 
                    onClick={() => handleClick('left')}
                    style={{display: !isMoved && 'none'}}
                />
                <div className="container" ref={listRef}>
                    <ListItem index="0" />
                    <ListItem index="1" />
                    <ListItem index="2" />
                    <ListItem index="3" />
                    <ListItem index="4" />
                    <ListItem index="5" />
                    <ListItem index="6" />
                    <ListItem index="7" />
                    <ListItem index="8" />
                    <ListItem index="9" imgSrc="https://images.pexels.com/photos/4190056/pexels-photo-4190056.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick('right')}/>
            </div>
        </div>
    )
}

export default List
