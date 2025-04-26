import PropTypes from 'prop-types';

const Tag = ({
  name,
  selected,
  setCurrentSelection,
  handleClick,
  navigationUrl,
}) => {
  return name === 'View More' ? (
    <button
      onClick={handleClick}
      className={`h-[30px] px-2 xl:px-4 rounded-[15px] flex items-center text-base cursor-pointer font-medium ${
        selected
          ? 'bg-orange-500 hover:bg-orange-300 text-black'
          : 'hover:bg-white hover:text-black border border-white'
      }`}
    >
      {name}
    </button>
  ) : (
    <button
      onClick={() => {
        setCurrentSelection(name);
      }}
      className={`h-[30px] px-4 rounded-[15px] flex items-center text-base cursor-pointer font-medium ${
        selected
          ? 'bg-orange-500 hover:bg-orange-300 text-black'
          : 'hover:bg-white hover:text-black border border-white'
      }`}
    >
      {name}
    </button>
  );
};

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  setCurrentSelection: PropTypes.func,
};

export default Tag;
