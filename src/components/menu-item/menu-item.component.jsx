import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (

        <div className={`${size} menu-item`} onClick={()=> {
            console.log(match, linkUrl)
            history.push(`${linkUrl}`)
            
            }}>
            <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}>

            </div>
            <div className="content">
                {console.log(size)}
                <div className="title">{title.toUpperCase()}</div>
                <div className="subtitle">SHOP NOW</div>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);