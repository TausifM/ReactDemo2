import classes from './styles/Box.module.css';
export const Box = (props) =>{
    return (
        <div className ={classes.card}>
            <h1>Learn {props.learn}</h1>
            <div> Assigned to {props.name}</div>
        </div>
    )
}