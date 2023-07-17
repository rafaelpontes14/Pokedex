'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function PokemonCard() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons()
  }, []);

  const getPokemons = () => {
    var endpoints = []
    for ( var i = 1; i < 91; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }

    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
  };

  // const typeHandler = () => {
  //   if (pokemons.data.types[1]) {
  //     return pokemons.data.types[0].type.name + " " + pokemons.data.types[1].type.name
  //   }
  //   return pokemons.data.types[0].type.name
  // }



  return (

    <div className='flex flex-wrap justify-center  mt-16 mb-16'>
      <div className='grid grid-cols-6 gap-10'>
          {pokemons.map((pokemons) =>  (
            <div key={pokemons.id}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia/>
                          <img src={pokemons.data.sprites.front_default} alt="imgPokemons" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {pokemons.data.name}
                          </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                            {pokemons.data.types[0].type.name}
                            </Typography>
                          {/* <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                          </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions> */}
                </Card>
            </div> 
          ))}
      </div>
    </div>

  );
}
