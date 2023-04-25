const Team = ({imgSrc, teamName, voteCount, handleClick,highest}) => {
    const classN = voteCount == highest? "high":"";
    console.log(highest)
    return(
        <div className= {`team-wrapper ${classN?classN:''}`}>
            <img src={imgSrc}/>
            <h3>{teamName}</h3>
            <button onClick={()=>handleClick(teamName)}>Vote</button>
            <p>Vote Count: {voteCount}</p>
            <p>{(voteCount==highest)&&voteCount!=0?"With highest amnt of votes":''}</p>
        </div>
    )
}
export default Team;