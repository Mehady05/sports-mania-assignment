import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import found from '../../images/Icon/found 1.png';
import flag from '../../images/Icon/flag (1) 1.png';
import football from '../../images/Icon/football (1) 1.png';
import gender from '../../images/Icon/male-gender-sign 1.png';
import male from '../../images/Photo/male.png';
import female from '../../images/Photo/female.png';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const LeagueDetails = () => {
    const {leagueId} = useParams();
    console.log(leagueId)
    const [league, setLeague] = useState({});
    console.log(league)

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
        .then(res => res.json())
        .then(data => {
            setLeague(data.leagues[0])
        })
    },[leagueId])



    const toggleImg =()=>{
        let gender = league.strGender;
        console.log(gender)
        let image;
        if(gender === "Male"){
            image = <img class="img-fluid" src={male} alt=""/>
        }
        if(gender === "Female"){
            image = <img class="img-fluid" src={female} alt=""/>
        }
        return image;
    }
    return (
        <div>
            <div class="header-area header-second text-center ">
                <div class="header-overlay header-another ">
                </div>
                <div class="header-league">
                    <img class=" rounded" src={league.strBadge} alt=""/>
                </div>
            </div>

            <main>
        <div class="background">
            <div class="league-details">
               <div class="container">
                   <div class="row all-details align-items-center">
                       <div class="col-md-4 text-white">
                           <div class="name">
                               <p>{league.strLeague}</p>
                           </div>
                          <div class="foundation d-flex align-items-center">
                              <span class="icon">
                                  <img src={found} alt=""/></span>
                              <p class="icon-detail">Founded: {league.intFormedYear}</p>
                          </div>
                          <div class="foundation d-flex align-items-center">
                            <span class="icon">
                            <img src={flag} alt=""/></span>
                            <p class="icon-detail">Country: {league.strCountry}</p>
                        </div>
                        <div class="foundation d-flex align-items-center">
                            <span class="icon">
                            <img src={football} alt=""/></span>
                            <p class="icon-detail">Sport Type: {league.strSport}</p>
                        </div>
                        <div class="foundation d-flex align-items-center">
                            <span class="icon">
                            <img src={gender} alt=""/></span>
                            <p class="icon-detail">Gender: {league.strGender}</p>
                        </div>
                       </div>
                       <div class="col-md-4 offset-md-4">
                           <div class="player">
                                {
                                    toggleImg()
                                }
                           </div>
                       </div>
                   </div>
                   <div class="row">
                       <div class="col-md-12 text-white-50 pt-3 pb-3">
                           <p>{league.strDescriptionEN}</p>
                           <br/>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, vero? Excepturi sunt labore atque beatae? Ex adipisci asperiores commodi optio facere iste. Praesentium accusamus obcaecati exercitationem eos fuga at veniam similique, autem quisquam animi esse consectetur. Sed asperiores magni, tempore aliquid, quos minima repudiandae, hic excepturi praesentium adipisci architecto atque tempora voluptatum? Ducimus at voluptatum rerum, aliquam eligendi asperiores ab expedita laboriosam ipsa quasi blanditiis aut doloribus quis, placeat ipsam laborum deserunt? Consequatur ullam accusantium repellat ducimus nihil commodi quam sed impedit at dolores iure, iusto similique. Repellat quae dolore omnis iste sint vero quasi. Corporis sint ab tempora ipsa?</p>
                       </div>
                       <div>
                           <button class="explore"><Link to="/"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link></button>
                       </div>
                   </div>
                   <div class="row">
                       <div class="col-md-12 d-inline-flex align-items-center justify-content-center">
                        <ul class="d-flex">
                            <li><a href={league.strFacebook}><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href={league.strTwitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href={league.strYoutube}><FontAwesomeIcon icon={faYoutube} /></a></li>
                        </ul>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    </main>
        </div>

    );
};

export default LeagueDetails;