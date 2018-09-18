import React from 'react';

/*
* This is the child tweet component representing a single row
*/
const TweetComponent = (props) => {
    // console.log(props.tweet);
    // debugger;
    const tweet = props.tweet;

    return (
        <div className="box box-container">
            <div className="box-container-panel box-container-panel-user">
                <img src={tweet.user.profile_image_url} alt={tweet.user.name}/>
            </div>
            <div className="box-container-panel box-container-panel-text">
                {tweet.text}
            </div>
        </div>
    );
}

export default TweetComponent;