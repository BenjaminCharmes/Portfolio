// React router dom
import { Link } from 'react-router-dom';

// SCSS
import "./FooterTitle.scss"


const FooterTitle = () => {

  return (
    <div className="FooterTitle">
      <Link to="/">Benjamin Charmes || Portfolio © 2022 - {new Date().getFullYear()}</Link>
    </div>
  )
}

export default FooterTitle;