import Poster from "./Poster";
import "./PosterList.css"

const PosterList = ({ posters }) => {
  // output an array of Poster elements from an array of posters

  const posterList = posters.map(({id, imgSource, title, quote}) => (
    <Poster
      key={id}
      id={id}
      imgSource={imgSource}
      title={title}
      quote={quote}
    />
  ));

  return <section className="poster-list">{posterList}</section>;
};

export default PosterList;
