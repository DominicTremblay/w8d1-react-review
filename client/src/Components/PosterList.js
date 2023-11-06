import Poster from './Posters';
import './PosterList.css';

const PosterList = ({ posters }) => {
  const posterList = posters.map(({ id, imgSource, title, quote }) => (
    <Poster key={id} imgSource={imgSource} title={title} quote={quote} />
  ));

  return <section className="poster-list">{posterList}</section>;
};

export default PosterList;
