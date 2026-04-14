 "use client"
 import React, { createContext, useState } from 'react';

 export const TimelineContext = createContext();
 
 const TimelineContextProvider = ({children}) => {
    const [timeline, setTimeline] = useState([]);
    const value = {
        timeline,
        setTimeline
    }
    return <TimelineContext.Provider value={value}>{children}</TimelineContext.Provider>
 };
 
 export default TimelineContextProvider;