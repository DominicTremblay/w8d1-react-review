import React from 'react';

import PosterItem from './PosterItem';
import './PosterList.css';

const PosterList = ({posters, deletePoster}) => {


  const posterItems = posters?.map((poster) => (
    <PosterItem
      key={poster.id}
      id={poster.id}
      imgSource={poster.imgSource}
      title={poster.title}
      quote={poster.quote}
      deletePoster={deletePoster}
    />
  ));

  return (
    <section className="poster-list">
      {/* React.createElement(
      PosterItem,
      {
        imgSource: 'https://images.nintendolife.com/b6c9a277682f9/1280x720.jpg',
        title: 'The Super Mario Bros. Movie',
        quote:
          "Not sure if you know who I am, but I'm about to marry a princess and rule the world.",
      },
      [child1, child2, child3, ...]

    ) */}

      {posterItems}
    </section>
  );
};

export default PosterList;
