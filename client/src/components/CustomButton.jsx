import { useSnapshot } from 'valtio';
import PropTypes from 'prop-types'; // Import PropTypes
import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    } else if(type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

// Define the prop type validation
CustomButton.propTypes = {
  type: PropTypes.oneOf(['filled', 'outline']).isRequired,
  title: PropTypes.string.isRequired,
  customStyles: PropTypes.string,
  handleClick: PropTypes.func,
};

export default CustomButton