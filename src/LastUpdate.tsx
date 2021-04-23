import { useEffect, useState } from "react";

interface Props{
    update: Date
}



export const LastUpdate = (props: Props) => {
    const locale = 'en';

    const time = props.update.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric'});
  
    return  (
        <div>
            <p>Last Updated: </p>
   <p>{time}</p>
    
    </div>
    )
  };