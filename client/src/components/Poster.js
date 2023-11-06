import './Poster.css';

const Poster = ({id, imgSource, title, quote}) => {

  // {
  //   imgSource: 'https://images.nintendolife.com/b6c9a277682f9/1280x720.jpg',
  //   title: 'The Super Mario Bros. Movie',
  //   quote: `Not sure if you know who I am, but I'm about to marry a princess and
  // rule the world.`,
  // }

  const defaultImg = "https://staticg.sportskeeda.com/editor/2023/10/7f6c2-16972619758770-1920.jpg?w=840";

  return (
    <article className="poster">
      <img
        className="poster--img"
        src={imgSource ?? defaultImg}
        alt={title?? "Among Us"}
      />

      <h3>{title?? "No Title"}</h3>

      <h4>
        {quote?? "Not quote"}
      </h4>
    </article>
  );
};

export default Poster;
