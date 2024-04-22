import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="border border-black p-2 mt-7 rounded-full ">
        <img
          className="w-64 h-auto"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAkFBMVEX///8iM2gXuu0AtuyytsYNJWFTx/Do6e+v4/cAFlvi5OkABlag3fYEIWBEv+6l3/aD1PPv+f3h9PwYLGQAAFNNWIDR0dn09fcTKWNhao24u8gAD1hCT3o3RXNGw+/R7/rZ3OOPlawAsesAG1yYnbEsPXBwzvJ+hJ/Bw9C75vjH6/qT2vVtdZR1fJilqbxVXoNSf4HcAAADO0lEQVR4nO2Y63aiMBRGAxERFS8EAYs3QJSplr7/2w1JABHqeKnFzlrf/uPhE5e7aXJIJAQAAAAAAAAAAAAAAAAAAAAAAAAA4L/D2qnrVzs0WFHae7VDnQlVf51Uj6q/TmqYOT1RSu+f0HW3kVcyGem1emq9H1Yqhw4ty+LJWsDf6h1666n4QFaO8/Iqjm0PSuxo3mnkxnKfiMj1eWT7XHJjiFpzyXQVUqpKKKXhH0J2WZJVw/eueB0NCfnTFZk6vkmroylVPPNDDkwyKDOmaSLs2+LS7gtnUZs6sUZqFTompFte5C+7Q5msbrGqSSmKsZdS/ll4rEsNbpEqQ3oquzdYNaQUz2lKKVHyHan6DfdLmcEXUt7Hs6RU9aGRmvMJlNhMks+rhf40qesPo0LKz1abFGAzLqXPF4KlmVtdkpqOQhoWRmHIV18hJdZbTlhOrBu6WSGV9PvOjJ2kSrbSyuhfkMqakZWPFp3IPtU9DckhNxlZ4kEkuFkq3pTfX5PqRFekOLnUUF5JKbrLymk+OoesXquPSAVnUrqTdNI0XbBHpSYVqd5TpNxgafiGYUT5TK9L2fdJjZ8htWHm+Zo8SQ02D4zUY1L8zw+0QspdesolKe+YOMmn14KUEnQ6W6VsCftIaUrpUkrxfN/P/6l3SVl3S5lRZJZSblx34lIua6T3SY3ulTrhHYlT9PGoOtHJvvlIakvK3JI3OWPYIk23y7IlEOdlUkzRyZsMNb5fSIxSiqT+i6T8lBRSTEj5J6ms52usdSkWMb4fvihFNsGnWARmK1Jyvc0C8d2XpbJWr3Nkn/1hqbhfDf8lJXGMNqQ2X0hpHdetbF24S5CTr8mflVqeDUSSP2S0bJOXl0LKjQ1TUkx0tz2pTTnxi+1wIXW+UllMrkmtniZFFo0nypdSvH20J5XUu+SXUvw00aIU2detmN6Q8nynuP3ZUgY/R3lxTYpsY9P0SjRDHAbdWGMFpvlZOpERPZOiFSmaHd5pKLcuMr8upc9nGYvArb/RT/fHecFH/rtHsJgV7N8qN0/kGLzLq15XIM53w5WAH3LIQcS7G396AQAAAAAAAAAAAAAAAAAAAAAAAAD4Pn8BuptURFdsYoMAAAAASUVORK5CYII="
          alt=""
        />
      </div>
      <Link to="/signup">
        <Button label="Click for signup" />
      </Link>
      <p>This is A Testing Application</p>
    </div>
  );
};

export default Home;
