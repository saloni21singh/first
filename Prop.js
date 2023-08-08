import React from 'react';
import ReactDOM  from 'react-dom';
function Prop(props){
    console.log(props);
    return(<>
    
        <div className="cards">
            <div className="card">
            <div className="card_info">
                <img src={props.imgsrc} alt="myPic" className='card_img'></img>
                <span className="card_category">{props.title}</span>
                <h3 className="card_title">{props.sname}</h3>
                <a href={props.link} target="_blank">
                    <button >Watch Now</button>
                </a>
            </div>
            </div>
        </div>
    </>);}

export default Prop;
