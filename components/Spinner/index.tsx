import { PulseLoader } from 'react-spinners'

interface PropType {
  size?: number
  color?: string
}

const Spinner: React.FC<PropType> = ({ size = 15, color = 'white' }) => (
  <PulseLoader size={size} color={color} margin={2}/>
)

export default Spinner
