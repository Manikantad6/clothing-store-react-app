import './menu-item.styles.scss'

export const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
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