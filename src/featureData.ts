export type featureType = {
  title: string,
  desc: string,
  color: string,
  image: string
}
const imageUrl = (target: string) => `./featureSvg/icon-${target}.svg` 
export const features: featureType[] = [
  {
    title: 'Supervisor',
    desc: 'Monitors activity to identify project roadblocks',
    color: 'hsl(180, 62%, 55%)',
    image: imageUrl('supervisor')
  },
  {
    title: 'Team Builder',
    desc: 'Scans our talent network to create the optimal team for your project',
    color: 'hsl(0, 78%, 62%)',
    image: imageUrl('team-builder')
  },
  {
    title: 'Karma',
    desc: 'Regularly evaluates our talent to ensure quality',
    color: 'hsl(34, 97%, 64%)',
    image: imageUrl('karma')
  },
  {
    title: 'Calculator',
    desc: 'Uses data from past projects to provide better delivery estimates',
    color: 'hsl(212, 86%, 64%)',
    image: imageUrl('calculator')
  }
]