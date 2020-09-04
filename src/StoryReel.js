import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="./bg1.jpg"
                profileSrc="./dp.jpg"
                title="@chand"
            />

             <Story 
                image="./bg2.jpg"
                profileSrc="./tiger.jpg"
                title="@king"
            />
             <Story 
                image="./bg3.jpg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2iPJnrnEkgrpJAMI1xr3LvoK-688AjZxISw&usqp=CAU"
                title="@messi"
            />
              <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2iPJnrnEkgrpJAMI1xr3LvoK-688AjZxISw&usqp=CAU"
                profileSrc="./leopard.jpg"
                title="@Dhoni"
            />
              <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaG_TP_GViZS19haq8HeqBZvujMevS4bQnvw&usqp=CAU"
                profileSrc="./leopard.jpg"
                title="@Mahi"
            />
            
        </div>
    )
}

export default StoryReel
