import React from 'react';
import './App.css';
import Team from './components/Team'
class App extends React.Component{
  constructor(){
    super();
    this.state = {
     //img source, team name, vote count.
     data: [
      {
        imgSrc: 'https://i.pinimg.com/originals/8f/6d/73/8f6d733872856c6f1fd9452d6ee6e896.jpg',
        teamName: 'FC Barcelona',
        voteCount: 0
       },
       {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3d-gGxaFm2gKKH7QkIWI8e92R8TyZ0sKYMQ&usqp=CAU',
        teamName: 'Juventus',
        voteCount: 0
       },
       {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XD1K7CisJLo9mgoDDKBSLAcvpyvuiRX3aFmSFCHXeoGrqc9NcwAwcA7mMRjj7CPdjy4&usqp=CAU',
        teamName: 'Manchester',
        voteCount: 0
       }
     ],
     highest:0
    }
  }
  
  handleClick = (teamName)=>{
    const newData = this.state.data.map((el)=>{
      if(el.teamName == teamName){
        el.voteCount++;
        if(el.voteCount>=this.state.highest){
          this.setState({highest:el.voteCount})
          console.log(this.state.highest,el.teamName)
          return {...el};
        }
      }
      
      
      return {...el};
      
    })
    this.setState({data:newData})
    console.log(this.state.data)
  }

  render(){
    console.log(this.state.highest)
    return(
      <div className='App'>
       
       {
        this.state.data.map(item => {
          const {teamName, imgSrc, voteCount} = item;
          return(

            <Team teamName={item.teamName} imgSrc={item.imgSrc} voteCount={item.voteCount} handleClick = {this.handleClick} highest={this.state.highest}/>
      
          )
        })
       }
      </div>
    )
  }
}

export default App;