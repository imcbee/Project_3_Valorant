// homepage.jsx

export default function HomePage() {
    //pass User Auth useState into components to render data
    const [newLB, setNewLB] = useState(null)
      const leaderBoard = async () => {
        try {
          //console.log("testing: HEllo")
          const response = await fetch('https://api.henrikdev.xyz/valorant/v1/leaderboard/na');
          //console.log("testing: ", response)
          const lbData = await response.json();
          console.log ("testing: ", lbData)
          setNewLB(lbData); //finds top 3 ranked players on the leader board
          console.log ("testing state: ", newLB)
        
        } catch(err) {
          console.log(err);
        }
        
      }
  
      leaderBoard()
  
    return (
      <>
        <div class="v3_4">
          <Header />
          <HeroLarge />
          <LeaderBoard data={newLB}/>
        </div>
      </>
    );
  }
  

// end homepage

//leaderboard.jsx

export default function LeaderBoard({newLB}) {
    // map out all of the valorant
  
    // return newLB.map((item, i) =>  
      
    //   <div>
    //     <span>{item.playerName}</span>
    //     <span>{item.leaderboardRank}</span>
    //   </div>)
    return (
      <div>
         <span>{newLB[0].playerName}</span>
         {console.log(newLB)}
         <span>{newLB[0].leaderboardRank}</span>
      </div>
    )
  }

// end leaderboard.jsx
  
  
  const CityArray = (props) => {
    return newLB.map((item) =>  
    <div>
      <span>{item.playerName}</span>
      <span>{item.leaderboardRank}</span>
    </div>)
  }