import { Link } from "react-router-dom";

export default function OptionsNav() {
  // we will have to figure out how to display different screens in a div container....
  // this might have to be a stretch feature

  return (
    <div className="options-nav">
      <Link>Options 1</Link>
      <Link>Options 2</Link>
      <Link>Options 3</Link>
      <Link>Options 4</Link>
    </div>
  );
}
