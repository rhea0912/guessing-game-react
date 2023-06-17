

function Button ({label, clickButton, className, bg }){
return(

    <div>
        <button onClick={clickButton} className={className} style={{background:bg}}>{label}</button>
    </div>
)
}

export default Button;