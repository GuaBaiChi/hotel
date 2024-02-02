import { hotelData } from "../About/About"
import './Footer.css'

export default function Footer() {


  return (
    <div className="Footer">
      <ul>
        <div>{hotelData.name}</div>
        <div>Phone: {hotelData.phone}</div>
        <div>Email: {hotelData.email}</div>
      </ul>
    </div>
  )

}