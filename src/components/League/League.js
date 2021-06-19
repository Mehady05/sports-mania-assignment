import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ListLeague from '../ListLeague/ListLeague';

const League = () => {
    const [leagues, setLeagues] = useState([]);
    const league = leagues.slice(0, 30);
    

    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])
    return (
        <main class="background">
            <div class="container">
                <div class="row g-0">
                    {
                        league.map(lg => <ListLeague lg={lg}></ListLeague>)
                    }
                </div>
            </div>
        </main>
    );
};

export default League;