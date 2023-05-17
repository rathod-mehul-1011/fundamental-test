import React, { Fragment, useState } from "react";
import Deafault from "../components/Deafault";
import ItemCard from "../components/Items/ItemCard";

import "./Items.css";

import Mountain from "../assets/images/mountains.jpg";
import Beach from "../assets/images/beach.jpg";
import Canyons from "../assets/images/canyons.jpg";
import Glaciers from "../assets/images/glaciers.jpeg";
import MajesticWaterfalls from "../assets/images/majestic-waterfalls.jpg";
import RainForest from "../assets/images/rainforest.png";
import Reefs from "../assets/images/reefs.jpg";
import Sunset from "../assets/images/sunset.jpg";
import TranquilLake from "../assets/images/tranquil-lake.jpg";
import Waterfall from "../assets/images/waterfalls.jpg";
import ItemModal from "../components/Items/ItemModal";
import _ from "underscore";

const itemsData = [
  {
    title: "Majestic Mountains",
    description:
      "Towering peaks covered in snow, piercing the clear blue sky. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur aliquid odit voluptatum atque ab. Reiciendis libero provident a perspiciatis.",
    imageURL: Mountain,
    isFavorite: false,
  },
  {
    title: "Enchanting Waterfalls",
    description:
      "Gushing water cascading down rocky cliffs, creating a mesmerizing sight. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur aliquid odit voluptatum atque ab. Reiciendis libero provident a perspiciatis.",
    imageURL: Waterfall,
    isFavorite: false,
  },
  {
    title: "Serene Beaches",
    description:
      "Golden sand, crystal-clear waters, and gentle waves inviting you to relax and unwind. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur aliquid odit voluptatum atque ab. Reiciendis libero provident a perspiciatis.",
    imageURL: Beach,
    isFavorite: false,
  },
  {
    title: "Lush Rainforests",
    description:
      "Dense vegetation, vibrant colors, and a symphony of wildlife create a captivating experience. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur aliquid odit voluptatum atque ab. Reiciendis libero provident a perspiciatis.",
    imageURL: RainForest,
    isFavorite: false,
  },
  {
    title: "Spectacular Sunsets",
    description:
      "A breathtaking display of colors as the sun dips below the horizon, painting the sky. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur aliquid odit voluptatum atque ab. Reiciendis libero provident a perspiciatis.",
    imageURL: Sunset,
    isFavorite: false,
  },
  {
    title: "Exquisite Coral Reefs",
    description:
      "A kaleidoscope of marine life and vibrant coral formations beneath the ocean's surface. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur aliquid odit voluptatum atque ab. Reiciendis libero provident a perspiciatis.",
    imageURL: Reefs,
    isFavorite: false,
  },
  {
    title: "Majestic Canyons",
    description:
      "Steep walls carved by the forces of nature, revealing layers of Earth's history. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur aliquid odit voluptatum atque ab. Reiciendis libero provident a perspiciatis.",
    imageURL: Canyons,
    isFavorite: false,
  },
  {
    title: "Tranquil Lakes",
    description:
      "Mirror-like surfaces reflecting surrounding landscapes, creating a peaceful ambiance. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur aliquid odit voluptatum atque ab. Reiciendis libero provident a perspiciatis.",
    imageURL: TranquilLake,
    isFavorite: false,
  },
  {
    title: "Breathtaking Glaciers",
    description:
      "Massive rivers of ice, sparkling under the sun, with an otherworldly beauty. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur aliquid odit voluptatum atque ab. Reiciendis libero provident a perspiciatis.",
    imageURL: Glaciers,
    isFavorite: false,
  },
  {
    title: "Majestic Waterfalls",
    description:
      "Powerful torrents of water plunging into mist-filled chasms, captivating all who behold them. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur aliquid odit voluptatum atque ab. Reiciendis libero provident a perspiciatis.",
    imageURL: MajesticWaterfalls,
    isFavorite: false,
  },
];

const Items = () => {
  const [items, setItems] = useState(itemsData);
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorite = (i) => {
    var cloneItems = [...items];
    cloneItems[i].isFavorite = !cloneItems[i].isFavorite;
    setItems(cloneItems);
  };

  const favoriteData = items.filter((item) => item.isFavorite);

  const filteredData = showFavorites ? favoriteData : items;


  const handleSort = (e) => {
    const sortValue = e.target.value;
    let sortedItems = [...items];

    if(sortValue == 'title') {
      sortedItems = _.sortBy(sortedItems, 'title');
    } else if(sortValue == 'description') {
      sortedItems = _.sortBy(sortedItems, 'description')
    }
    setItems(sortedItems);
  }

  return (
    <Deafault>
      <div className="sticky d-flex justify-content-between align-items-center">
        <p className="mb-0 fw-bold flex-1">
          Favorite Items : <span>{favoriteData.length}</span>
        </p>
        <div className="ms-auto me-2 d-inherit align-items-center">
          <p className="mb-0 text-nowrap me-2">Sort by : </p>
          <select 
            defaultValue={''} 
            className="form-select"
            onChange={handleSort}
          >
            <option value={''} disabled>
              Select
            </option>
            <option value={'title'}>Title</option>
            <option value={'description'}>Description</option>
          </select>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites ? "Show All" : "Show Favorites"}
        </button>
      </div>
      <div style={{ height: "80px" }}></div>
      {filteredData.length <= 0 ? (
        <div className="text-center pt-3">No data found!</div>
      ) : (
        <>
          {filteredData.map((item, i) => {
            return (
              <Fragment key={i}>
                <ItemCard
                  item={item}
                  databstoggle="modal"
                  databstarget={`#${i}`}
                  toggleFavorite={() => toggleFavorite(i)}
                />
                <ItemModal id={i} item={item} />
              </Fragment>
            );
          })}
        </>
      )}
    </Deafault>
  );
};

export default Items;
