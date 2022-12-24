import { features } from "./featureData"
import FeatureCard from "./FeatureCard"

function FeatureSection() {
  return (
    <section className="FeatureSection">
      <header>
        <h1><span>Reliable, efficient delivery</span><br />Powered by Technology</h1>
        <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </header>
      <div className="feature-box">
        {features.map((feature) => <FeatureCard props={feature} />)}
      </div>
    </section>
  )
}

export default FeatureSection