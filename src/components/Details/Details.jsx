import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import './Details.css';
import Main from '../Main/Main';
import useLaunches from '../hooks/useLaunches';

import { useHistory } from "react-router-dom";


    const Details = (props) => {

        const [launch, setLaunch] = useState(null);
        const {getLaunch} = useLaunches();

        useEffect(() => {
            setLaunch(getLaunch(props.match.params.id));
        }, [getLaunch]);

        console.log(launch)

        //получение предыдущего route path
        let history = useHistory();
        const historyPrevPath = () => {
            history.goBack();
        }

        if(!launch) return null;

        return (
            <>
                <Main name={launch.name}/>
                <main className="details">
                    <div className="container">
                        <div className="details-row">
                            <div className="details-image">
                                <img src={launch.links.patch.small} alt={launch.name} />
                            </div>
                            <div className="details-content">
                                <p className="details-description">{launch?.details}</p>
                            </div>
                        </div>
                        <div>
                            <YouTube className='details-youtube' videoId={launch.links.youtube_id}/>
                        </div>
                    </div>
                    <button onClick={historyPrevPath} className="button button-back">go back</button>
                </main>
            </>
        );
    }

export default Details;