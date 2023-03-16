import React from 'react';
import {useRef} from 'react';
import styles from './index.module.css';

export const Showcase = () => {

    const track = useRef();
    const trackImages = useRef([]);


    
    const images = [
        "https://images.unsplash.com/photo-1522094883455-3364b09e4237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
        "https://images.unsplash.com/photo-1604928141064-207cea6f571f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80",
        "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80",
        "https://images.unsplash.com/photo-1652707228067-25672fa0b082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1532649097480-b67d52743b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
        "https://images.unsplash.com/photo-1594973782943-3314fe063f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
        "https://images.unsplash.com/photo-1511371496040-1fb40794e675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
    ]
    // const links = [
    //     "project-1",
    //     "project-2",
    //     "project-3",
    //     "project-4",
    //     "project-5",
    //     "project-6",
    //     "project-7",
    // ]

    function handleMouseDown (e) {
        track.current.dataset.mouseDownAt = e.clientX;
        console.log(track.current.style)
    }

    function handleMouseUp (e) {
        track.current.dataset.mouseDownAt = '0';
        track.current.dataset.prevPercentage = track.current.dataset.percentage;
    }

    function handleMouseMove (e) {
        // if not clicked yet, ignore.
        if (track.current.dataset.mouseDownAt === '0') return;

        const mouseDelta = parseFloat(track.current.dataset.mouseDownAt) - e.clientX;
        const maxDelta = window.innerWidth / 2;
        const percentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained = parseFloat(track.current.dataset.prevPercentage) + percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
        console.log(nextPercentage);

        track.current.dataset.percentage = nextPercentage;
        track.current.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, {duration: 1200, fill: "forwards" });
        trackImages.current.forEach((image) => {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards"});
        })
    }

    return (
        // <div className={styles.body}>
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} className={styles.body}>
            <div className={styles.wrapper}> 

                <div className={styles.imgTrack} data-mouse-down-at="0" data-prev-percentage="0" ref={track}>
                    {images.map((image, index) => {
                        return (
                            <img 
                                ref={el => trackImages.current[index] = el}
                                src={image} draggable='false' alt=""/>
                        )
                    })}
                </div>
            </div>
        </div>
        
    )
    
}