import profileNikhil from './assets/img/nikhil_image.jpg';
import classes from './App.module.css';
import Socials from './UI/Socials';
import Buttons from './UI/Buttons';

function App() {
  return (
    <div>
      <div className={classes.profile}>
        <img src={profileNikhil} alt="nikhil karve"></img>
        <h1 className={classes.name}>Nikhil Karve</h1>
        <p className={classes.tag}>Software Developer</p>
      </div>
      <Buttons />
      <Socials />
    </div>
  );
}

export default App;
