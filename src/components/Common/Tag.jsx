import { useState } from 'react';
import PropTypes from 'prop-types';

const Tag = ({ name, selected, setCurrentSelection }) => {
  return (
    <button
      onClick={() => setCurrentSelection(name)}
      className={`h-[30px] px-4 rounded-[15px] flex items-center text-base cursor-pointer font-medium ${
        selected
          ? 'bg-orange-500 hover:bg-orange-300 text-black'
          : 'hover:bg-white border border-white'
      }`}
    >
      {name}
    </button>
  );
};

Tag.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Tag;
