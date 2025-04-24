import React from 'react';

const PeopleProfileCard = ({ cast }) => {
  const castProfilePic = `https://image.tmdb.org/t/p/w500${cast.profile_path}`;

  return (
    <div className="flex gap-2 items-center">
      <img src={castProfilePic} alt="" className="h-20 w-20 rounded-full" />
      <div>
        <p className="font-bold">{cast.name}</p>
        <p>{cast.character}</p>
      </div>
    </div>
  );
};

export default PeopleProfileCard;
