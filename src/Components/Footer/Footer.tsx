import { hotelData } from "../About/About"
import './Footer.css'

export default function Footer() {


  return (
    <div className="FooterContainer">
      <div className="Footer">
        <ul>
          <div>{hotelData.name}</div>
          <div>Phone: {hotelData.phone}</div>
          <div>Email: {hotelData.email}</div>
        </ul>

        <div className="colz">
          <div className="colz-icon">
            <a href="mailto:leon.antonio.rodriguez.sanpere@gmail.com">
              <i className="fa fa-envelope"> </i>
            </a>
            <a href="https://www.linkedin.com/in/leon-r-60a370214/">
              <i className="fa fa-linkedin-square"> </i>
            </a>
            <a href="https://github.com/GuaBaiChi">
              <i className="fa fa-github-square"> </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )

}