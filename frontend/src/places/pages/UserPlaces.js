import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world.',
    imageUrl:
      'https://www.findingtheuniverse.com/wp-content/uploads/2020/07/Empire-State-Building-view-from-uptown_by_Laurence-Norah-2.webp',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'The White House',
    description: 'Where the president of the U.S. lives.',
    imageUrl:
      'https://www.whitehouse.gov/wp-content/uploads/2021/01/white_house_grounds.jpg?w=700&h=530&crop=1',
    address: '1600 Pennsylvania Ave, Washington, D.C 20500',
    location: {
      lat: 38.8976763,
      lng: -77.0365298,
    },
    creator: 'u2',
  },
];

function UserPlaces() {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
}

export default UserPlaces;
