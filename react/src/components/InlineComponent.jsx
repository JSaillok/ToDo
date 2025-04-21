const header = {color:"blue", fontSize:"180px"} 

export default function InlinneComponent() {
    return(
        <div>
            {/* <h1 style={{ color:"blue", fontSize:"140px" }} >Inline Component</h1> */}
            <h1 style={header} >Inline Component</h1>
        </div>
    );
}