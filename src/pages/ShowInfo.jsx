import StarIcon from '@mui/icons-material/Star';
import ImdbTag from '../components/Common/ImdbTag';
import RecommendedShows from '../components/Common/RecommendedShows';
import TrendingList from '../components/Home/TrendingList';

const ShowInfo = () => {
  return (
    <div className="px-10 flex flex-col gap-10">
      <div className="flex gap-6">
        <img src="" alt="" className="h-[400px] w-[270px]" />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-[25px]">Kraven the Hunter</h2>
            <div className="flex gap-5 items-center">
              <p>2022</p>
              <div className="flex gap-2 items-center">
                <StarIcon sx={{ color: 'yellow' }} />
                <p>7.6</p>
                <ImdbTag />
              </div>
              <p>127 mins</p>
              <p>Drama</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              dolor minima vero fugit dolorum odio libero sint cum illum totam
              rem corporis maiores debitis dolorem cupiditate, consectetur,
              accusantium ipsa dolore nulla? Officiis maiores possimus iusto
              fuga illo, accusamus eaque quis quam consequatur. Beatae
              dignissimos obcaecati, similique eveniet sunt recusandae
              voluptates.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p>
              Type: <span>MOVIE</span>
            </p>
            <p>
              Country: <span>India</span>
            </p>
            <p>
              Genre: <span>Action, Adventure, Thriller</span>
            </p>
            <p>
              Release: <span>Dec 11, 2024</span>
            </p>
            <p>
              Director: <span>J.C. Chandor</span>
            </p>
            <p>
              Production:{' '}
              <span>
                Columbia Pictures, Matt Tolmach Productions, Arad Productions
              </span>
            </p>
            <p>
              Cast:{' '}
              <span>
                Aaron Taylor-Johnson, Ariana DeBose, Fred Hechinger, Alessandro
                Nivola, Christopher Abbott
              </span>
            </p>
            <p>
              Tagline: <span>Villains aren't born. They're made.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <RecommendedShows />
        <TrendingList />
      </div>
    </div>
  );
};

export default ShowInfo;
