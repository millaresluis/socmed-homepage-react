import React, {useState} from 'react'
import "../style/CreatePost.css"
import {Avatar} from "@material-ui/core"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function CreatePost() {
    const [input, setInput] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <div className="createPost">
            <div className="createPost__top">
                <Avatar/>
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="createPost__input"
                    placeholder={'Sample text...'}
                    />


                    <button onClick={handleSubmit} type="submit">
                        Hidden
                    </button>
                </form>

            </div>
            <div className="createPost__bottom">
                <div className="createPost__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="createPost__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="createPost__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feelings</h3>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
