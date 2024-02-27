function Tweet (date, message, name, username){
    return(
        <div className = "tweet">
            <h2>{name}</h2>
            <h2 className = "username">{username}</h2>
            <h2 className = "date">{date}</h2>
            <p>{message}</p>



        </div>
    )
}