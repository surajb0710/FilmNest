import getPersonInfo from '../../utils/getPersonInfo';
import imageUnavailable from '../../assets/image_unavailable.png';

const PersonCard = ({ person }) => {
  const fullPosterUrl = `https://image.tmdb.org/t/p/original${person.profile_path}`;

  const personInfo = getPersonInfo(person.id);

  return (
    <div className="relative">
      <div className="max-w-[170px] cursor-pointer">
        <img
          src={
            !fullPosterUrl.includes('null') ? fullPosterUrl : imageUnavailable
          }
          alt=""
          className="h-[260px] w-[170px] rounded-lg mb-4"
        />
        <h3 className="text-base font-semibold mb-2 text-wrap">
          {person.name}
        </h3>
        {personInfo?.birthday && (
          <p>
            DOB: <span>{personInfo?.birthday}</span>
          </p>
        )}
        {personInfo?.place_of_birth && (
          <p>
            Birth Place: <span>{personInfo?.place_of_birth}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default PersonCard;
