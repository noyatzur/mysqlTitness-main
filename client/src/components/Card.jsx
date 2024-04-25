function Card(){
     var myPicture= "./img/logo.jpg"
     return(
        <button className="card">
            <img className="card-image" src={myPicture} alt="my picture"></img>
            <p className="card-text"> 
            אין לך חשבון? 
            <br></br>
           !לחץ כדי להירשם
                 </p> 
        </button>
    )

}
export default Card