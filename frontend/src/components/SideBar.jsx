export default function SideBar() {
  // need to call API to fetch info to display (keep 3 items)
  //current rating
  //most use weapons
  //top maps

  const weapon = xxx
    .filter((item, index) => index < 2)
    .map((filteredItem) => {
      return (
        <div className="weapon-container">
          <img src={filteredItem.img} alt="" /> //! what are the properties?
          <span>{filteredItem.name}</span> //! what is the weapon name?
          <span>{filteredItem.weapon - category}</span>
        </div>
      );
    });

  return (
    <div className="Sidebar">
      <div className="current-rating"></div>
      {weapon}
      <div className="maps"></div>
    </div>
  );
}
