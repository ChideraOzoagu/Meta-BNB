import React from "react";
import metaverseHomes from "../assets/metaverse-homes.png";
import mbtoken from "../assets/mbtoken.png";
import metamask from "../assets/metamask.png";
import opensea from "../assets/opensea.png";
import { GrFavorite } from "react-icons/gr";
import { FiStar } from "react-icons/fi";
import image7 from '../assets/image 7.png'
import image8 from '../assets/image 8.png'
import image9 from '../assets/image 9.png'
import { metaverseHome } from "../data";

const MetaSection = () => {
  return (
    <>
      <section className="metaverse-section">
        <img
          src={metaverseHomes}
          alt="metaverse homes"
          className="metaverse-homes"
        />
        <div className="metaverse-textContent">
          <p className="text-lg">
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </p>
          <p className="text-md">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="search">
            <input type="text" />
            <button type="submit">Search</button>
          </div>
        </div>
      </section>
      <div className="sponsors">
        <img src={mbtoken} alt="mbtoken" />
        <a href="https://metamask.io/" target="_blank">
          <img src={metamask} alt="metamask" />
        </a>
        <a href="https://opensea.io/" target="_blank">
          <img src={opensea} alt="opensea" />
        </a>
      </div>
      <main className="cards-section">
        <h2>Inspiration for your next adventure</h2>
        <div className="cards">
          {metaverseHome.map((home, index)=>{
            const {img} = home
            return <div className="card" key={index}>
               <div className="img-container">
              <img src={img} alt="metaverse homes" />
              <GrFavorite className="favorite-icon" />
            </div>
            <div className="details">
              <p>Desert king</p>
              <h4>1MBT per night</h4>
            </div>
            <div className="details">
              <p>2345km away</p>
              <p>Available for 2weeks stay</p>
            </div>
            <div className="stars">
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
            </div>
            </div>
          })}
        </div>
      </main>
      <section className='meta-nfts'>
<div className="meta-text">
    <h2>Metabnb NFTs</h2>
    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
    <button>Learn more</button>
</div>
<div className="images-container">
    <img src={image7} alt="" />
    <img src={image8} alt="" />
    <img src={image9} alt="" />
</div>
      </section>
    </>
  );
};

export default MetaSection;
