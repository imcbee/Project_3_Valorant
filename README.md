# General Assembly Project 3: Val.halla
---
```

 _          _      _                  _               _       _   _                  _            _            _          
/\ \    _ / /\    / /\               _\ \            / /\    / /\/ /\               _\ \         _\ \         / /\        
\ \ \  /_/ / /   / /  \             /\__ \          / / /   / / / /  \             /\__ \       /\__ \       / /  \       
 \ \ \ \___\/   / / /\ \           / /_ \_\        / /_/   / / / / /\ \           / /_ \_\     / /_ \_\     / / /\ \      
 / / /  \ \ \  / / /\ \ \         / / /\/_/       / /\ \__/ / / / /\ \ \         / / /\/_/    / / /\/_/    / / /\ \ \     
 \ \ \   \_\ \/ / /  \ \ \       / / /           / /\ \___\/ / / /  \ \ \       / / /        / / /        / / /  \ \ \    
  \ \ \  / / / / /___/ /\ \     / / /           / / /\/___/ / / /___/ /\ \     / / /        / / /        / / /___/ /\ \   
   \ \ \/ / / / /_____/ /\ \   / / / ____      / / /   / / / / /_____/ /\ \   / / / ____   / / / ____   / / /_____/ /\ \  
    \ \ \/ / /_________/\ \ \ / /_/_/ ___/\_  / / /   / / / /_________/\ \ \ / /_/_/ ___/\/ /_/_/ ___/\/ /_________/\ \ \ 
     \ \  / / /_       __\ \_/_______/\__\/\_/ / /   / / / / /_       __\ \_/_______/\__\/_______/\__\/ / /_       __\ \_\
      \_\/\_\___\     /____/_\_______\/   \/_\/_/    \/_/\_\___\     /____/_\_______\/   \_______\/   \_\___\     /____/_/
                                                                                                                          

```
---
##### Table of Contents  
1. [Website Link](#websitelink)
2. [Project Description](#projectdescription)  
3. [Goals and Stretch Features](#goalsandstretchfeatures)  
4. [Wireframe](#wireframe)
5. [Example Pictures](#examplepictures)     
6. [Tech Stack](#techstack) 
7. [Coding Challenges](#codingchallenges)

---  
### [Website Link] <a name="websitelink"></a>
---

## Project Description:<a name="projectdescription"></a>
Val.halla is a companion application that tracks current players of the popular FPS game Valorant, created by Riot Games.  We drew inspiration from other apps like Tracker.gg to be able to display specific online players.  As a software development team, we all shared a common interest in gaming and wanted to create an application that would allow users to be able to see interesting statistics, player profiles, and the global leaderboard. Val.halla is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games and all associated properties are trademarks or registered trademarks of Riot Games, Inc. 


## Goals and Stretch Features:<a name="goalsandstretchfeatures"></a>
### MVP Goals:
Utilize a Back-end and Front-end framework that work cohesively together.
Incorporate a Mongo database.
Include data from a third-party API.
Style design with CSS flexbox and grid. 
Search a player by using their game name and tag, and then display the player’s information. 
Display the top three players in the North-America (NA) region. 
Deploy Back-end on Heroku.
Deploy Front-end on Netlify. 

### Stretch Goals:
Create user profiles that link to their own player profile. 
Create player groups that show distinct group statistics from previous games played. 
Display current Valorant store shop. 
Display stats dynamically (graphs and charts) with a React library.
Implement User Authentication.  
Display common player patterns, such as, favorite guns, damage points and agents. 

## Wireframe:<a name="wireframe"></a>
### Back-end
![Screen Shot 2022-09-22 at 8 40 18 PM](https://user-images.githubusercontent.com/107007458/191874295-a591fc79-0fc4-492e-8352-f7c4d0b1b55d.png)

### Front-end
![Screen Shot 2022-09-22 at 8 40 50 PM](https://user-images.githubusercontent.com/107007458/191874300-fc4e6926-5504-4862-b684-ded47919e394.png)

### Figma Designs
![Screen Shot 2022-09-22 at 8 51 29 PM](https://user-images.githubusercontent.com/107007458/191874773-22b892c4-5e96-46c0-a06d-e05169d11e86.png)


## Example Site Pictures:<a name="examplepictures"></a>
![projec 3-1](https://user-images.githubusercontent.com/107007458/191875914-1ecead79-f442-4ef4-bef3-f3307a41e4e5.png)
![project3-2](https://user-images.githubusercontent.com/107007458/191875917-09aec7dc-5dfb-43d8-a47c-60483ae9cd57.png)


## Tech Stack:<a name="techstack"></a>
### Node.js and Express
Our Back-end was built using Node.js with Express being the framework.

### React (JSX)
React was used to create our Front-end pages and components. 

### Mongoose and MongoDB
MongoDB was used as our Back-end database to hold information such as users, comments, usergroups, and player info. We were able to navigate this using the Mongoose interface.

### Postman
Postman was used to test our controllers, routes and ensure that they were properly functioning. 

## Coding Challenges:<a name="codingchallenges"></a>
Utilizing the API package to make calls within the Front-end.
Taking information given from one API call and incorporating it into different api calls.
Correcting preformatted CSS from figma. 
Efficiently incorporating the API within the Back-end. 

Being able to fetch the API and define a new state taught me a lot to understand how a new state can be defined and passed as a prop through multiple components. - Ian McBee
```jsx
export default function Main({ signup, isLoggedIn, login, user }) {
  const initialState = {
    gameName: "",
    tag: "",
  };
  const [submitForm, setSubmitForm] = useState(initialState);
  const navigate = useNavigate();

  const getPlayer = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          Authorization: REACT_APP_API_KEY,
        },
      };
      let id = submitForm.gameName;
      let tag = submitForm.tag;
      const response = await fetch(`${URL}${id}/${tag}`, options);
      const data = await response.json();
      console.log("Main.jsx test: ", data);
      setSubmitForm(data.data)
      navigate("/test/profile/"+id)
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const data = { ...submitForm, [e.target.name]: e.target.value };
    setSubmitForm(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPlayer();
  };
...
```
Kingley's
```jsx
router.get("/", async (req, res) => {
  try {
    async function getLeaderBoard() {
      let leaderBoard = [];
      try {
        const response = await Models.Player.find({
          leaderboardRank: { $gte: 1 } && { $lte: 4 },
        });
        res.send(response);
      } catch (err) {
        console.log(err);
      }
    }
    getLeaderBoard();
  } catch (err) {
    console.log(err);
  }
});
```

## Future Goals
Fully incorporate user authentication.
Incorporate more user data (User ranking, win/loss ratio, kill/death ratio)
Larger leaderboard 
Group creation 
Mobile adaptation

---
## Contributors
[Ian McBee](https://github.com/imcbee) | Front-end Lead, Back-end |   
[Corey Neal](https://github.com/BadMeme) | Back-end Lead |\
[Estrella Alvarez](https://github.com/estrellalvarez) | Design Lead, Front-end |\
[Kingsley Le](https://github.com/Codesley) | API Lead, Back-end |
