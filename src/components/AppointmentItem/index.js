// Write your code here

import './index.css'

const AppointmentIem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="appointment-item-list">
      <div className="header-app-container">
        <p className="title">{title}</p>
        <button type="button" className="star-btn" onClick={onClickStar}>
          <img src={starImgUrl} className="star-image" alt="star" />
        </button>
      </div>
      <p className="date-details">Date: {date}</p>
    </li>
  )
}

export default AppointmentIem
