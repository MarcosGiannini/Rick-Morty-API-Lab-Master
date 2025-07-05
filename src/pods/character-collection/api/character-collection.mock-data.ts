// src/pods/character-collection/api/character-collection.mock-data.ts

// Importamos la interfaz CharacterFromApi para tipar correctamente los datos mock.
// Aseguramos que los datos de prueba coincidan con la estructura esperada de la API.
import { CharacterFromApi } from './character-collection.api-model';

/**
 * @description Datos mock de una lista de personajes de Rick & Morty.
 * Estos datos se utilizan para simular respuestas de la API en entornos de desarrollo
 * o para pruebas, sin necesidad de hacer llamadas a un servidor real.
 * Incluyen un campo 'bestSentence' adicional para el Ejercicio 2.
 */
export const characterCollectionMockData: CharacterFromApi[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
    bestSentence: 'Wubba Lubba Dub Dub!', // Campo adicional para la práctica.
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z',
    bestSentence: 'Aw geez, Rick.',
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/6'],
    url: 'https://rickandmortyapi.com/api/character/3',
    created: '2017-11-04T19:09:56.428Z',
    bestSentence: "Lick my balls!",
  },
  {
    id: 4,
    name: 'Beth Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/6'],
    url: 'https://rickandmortyapi.com/api/character/4',
    created: '2017-11-04T19:22:43.665Z',
    bestSentence: "I'm not a monster.",
  },
  {
    id: 5,
    name: 'Jerry Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/6'],
    url: 'https://rickandmortyapi.com/api/character/5',
    created: '2017-11-04T19:26:50.418Z',
    bestSentence: "I just want to be loved.",
  },
];