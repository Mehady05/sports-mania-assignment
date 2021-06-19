import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ListLeague = (props) => {
    console.log(props)
    const{idLeague, strLeague, strLeagueAlternate} = props.lg;

    const [img, setImg] = useState({})
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then(data => {
            setImg(data.leagues[0])
        })
    },[])



    return (
        <div className=" col-md-4" >
            <div class=" single-league text-center border-box rounded" style={{ height: '400px'}}>
                <div class="league-logo p-3">
                    <img src={img.strBadge} alt=""/>
                </div>
                <div class="league-details">
                    <p class="league-name">{strLeague}</p>
                    <p class="league-about">{strLeagueAlternate}</p>
                    <button class="explore"><Link to={`/league/${idLeague}`} class="text-white">Explore <FontAwesomeIcon icon={faArrowRight} /></Link></button>
                </div>
            </div>
        </div>
    );
};

export default ListLeague;