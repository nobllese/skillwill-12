import React from 'react';
import Card from './Card';

const data =[
  {id:1,
  title: "The Knight in the Panther's Skin",
  image: 'https://tse1.mm.bing.net/th?id=OIP.KHnIiprJCIiaNRqYby9BxwAAAA&pid=Api&P=0&h=180',
  description:"The summary of the chapters tells how the long search for this mysterious hero took place. After all, for three whole years Avtandil wandered all over the world, but he never found him. And then one day, when he decided to return home, he met six wounded travelers who were repulsed by a warrior dressed in a tiger skin.",
  characters:{
    1:"Avtandil",
    2:"Tinatin",
    3:"Tariel"
  }
},
  {id:2,
  title: "Sherlock Holmes",                 
  image:'https://tse2.mm.bing.net/th?id=OIP.8Bq8_yZgI61f2E6B5uEOxQHaKe&pid=Api&P=0&h=180',
  description:"Sir Arthur Conan Doyle’s (1859-1930) The Adventures of Sherlock Holmes was published in 1892 as a collection of 12 short stories. The texts detail some of the earliest cases of the fictional detective Sherlock Holmes as narrated by his friend and collaborator, Doctor John Watson. The stories appear in the order in which they were originally published in The Strand Magazine.",
  characters:{
    1:"Inspector Baynes",
    2:"Inspector Bradstreet",
    3:"Inspector Gregson"
  }
},
  {id:3,
  title: "Romeo and juliet",                
  image:'https://tse3.mm.bing.net/th?id=OIP.3QOw0azuwOIk5q7RBPn5dgHaLb&pid=Api&P=0&h=180',
  description:"Shakespeare’s Romeo and Juliet tells the tale of a young man and woman, who fall in love but are destined for tragedy due to their warring families - the Montagues and the Capulets. Romeo and Juliet is a play written by Shakespeare.",
  characters:{
    1:"Romeo",
    2:"Juliet",
    3:"Mercutio"
  }
},

  {id:4, 
  title: "Jane Eyre",                       
  image:'https://tse3.mm.bing.net/th?id=OIP.0J74vePsUQK2eEAv4HIX6QHaLf&pid=Api&P=0&h=180',  
  description:"Jane Eyre is a first-person narrative told from the perspective of Jane, a seemingly ‘plain’ girl who meets a lot of challenges in life. The novel presents Jane’s life from childhood to adulthood.", 
  characters:{
    1:"Jane Eyre",
    2:"Mrs. Reed",
    3:"Edward Rochester"
  }
}
]

const CardList = () => {
  return (
    <div className='card-list'>
      {data.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          image={card.image}
          description={card.description}
          characters={card.characters}
        />
      ))}
    </div>
  );
}

export default CardList;