import { featureType } from "./featureData"

type FeatureCardProp = {
  props: featureType
}

function FeatureCard({props}: FeatureCardProp) {
  const {title, desc, color, image} = props
  const cardStyle = {
    borderTop: `5px solid ${color}`
  }
  return (
    <div className="FeatureCard" style={cardStyle}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

export default FeatureCard