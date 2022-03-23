import classes from './styles/Youtube.module.css';
import BellA from './bellA.png';
import BellB from './bellB.png';
import { useState } from 'react';
const Subcribe = () =>{
    const [msg,setMsg] = useState('Please Subscribe to our channel');
    const [subscribe,setSubscribe] = useState('Subscribe');
    const [imgB, setImg] = useState(BellA);

    const subcribeHandler = ()=>{
        setSubscribe('Subscribed');
        setMsg('Click on Bell Icon');
        //msg shd change 
        //  btn msg shd change
    }
    const imgHandler = () =>{
        setImg(BellB);
        setMsg("Enjoy OFS");
        // img shd change 
        // msg shd change 
    }
    return (
        <div>
            <div className = {classes.header}>OFS Youtube</div>
            <div className={classes.videoPlay}>
                <video className={classes.videoPlay}  height="240" src="https://www.youtube.com/watch?v=QFaFIcGhPoM" controls autoPlay="off">
                 </video>
            </div>
            <div className={classes.subscribe}>
               {msg}
            </div>
            <div className={classes.subscribe}>
                <button className={classes.btn} onClick = {subcribeHandler}> {subscribe} </button>
            </div>
            <div className={classes.subscribe}>
                <img src = {imgB} width="30" onClick = {imgHandler}></img>
            </div>
        </div>
    )
}
export default Subcribe;