

export const DataStats=(props)=>{
    
    return(
        <div className= {`data ${props.class? props.class : ``}`}>
             <h4>{props.h4}<span>{props.span}</span></h4>
             <h5>{props.h5}</h5>
        </div>
    )
}