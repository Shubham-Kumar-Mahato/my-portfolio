import React from 'react'
import "./Project.css";
import ProjectData from './ProjectData';
const Project = () => {
    return ProjectData.map((item) => (
<div key={item.id}>
<div className="collection-items-project">
    <img src={item.img} alt="#" className="image-project" />
    <div className="name-project">{item.name}</div>
    <div className="collection-footer">
        <a href={item.content} className="link">
            {item.content.substr(0,51)}
        </a>
    </div>
</div>
</div>
    )); 
 
        
    
};
const Projectlist = () => {
    return (
        <div className="collection-projects">
            <Project></Project>
        </div>
    )
}

export default Projectlist
