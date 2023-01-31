export default function Header(props){

    return <>
    <label htmlFor="dark">Dark</label>
    <input onChange={props.changeHandler} type="radio" id="dark "name="theme" value="dark"/>
    <label htmlFor="light">Light</label>
    <input onChange={props.changeHandler} type="radio" id="light" name="theme" value="light"/>
    </>;
}