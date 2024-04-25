function Card2(){
    var myPicture= "./img/logo.jpg"
    return(
        <button className="card">
            <img className="card-image" src={myPicture} alt="my picture"></img>
            <p className="card-text"> 
            יש לך חשבון?
            <br></br>
           !לחץ כדי להתחבר
                 </p> 
        </button>
    )

}
export default Card2
