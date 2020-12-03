import React from 'react'
import "../style/Timeline.css";
import CreatePost from "./CreatePost"
import Post from "./Post"
function Timeline() {
    return (
        <div className="timeline">
            <CreatePost/>
            <Post
            profilePic="https://img.pngio.com/one-piece-png-one-piece-chibi-png-image-564-e-free-download-one-piece-chibi-png-564_880.png"
            message="Test"
            timestamp="timestamp test"
            username="Luffy"
            image="https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.0-9/129638447_3964991850179085_2602377752716764285_n.jpg?_nc_cat=1&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEm4oOMvR4x3os289pmY34_cIzuEwr_7n9wjO4TCv_uf63MyChkh6GOI3rviblDRm-FsluEU_QCZj3Jyy07UzW1&_nc_ohc=9Ml9XHxh2U0AX-8jzEd&_nc_ht=scontent.fmnl17-3.fna&oh=2f4a27147e6f3a8ffd8cff1e8664f2e9&oe=5FEF2E7B"

            />
            <Post
            profilePic="https://img.pngio.com/one-piece-png-one-piece-chibi-png-image-564-e-free-download-one-piece-chibi-png-564_880.png"
            message="Test"
            timestamp="timestamp test"
            username="Luffy"
            image="https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.0-9/129638447_3964991850179085_2602377752716764285_n.jpg?_nc_cat=1&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEm4oOMvR4x3os289pmY34_cIzuEwr_7n9wjO4TCv_uf63MyChkh6GOI3rviblDRm-FsluEU_QCZj3Jyy07UzW1&_nc_ohc=9Ml9XHxh2U0AX-8jzEd&_nc_ht=scontent.fmnl17-3.fna&oh=2f4a27147e6f3a8ffd8cff1e8664f2e9&oe=5FEF2E7B"
            />
            <Post
            profilePic="https://img.pngio.com/one-piece-png-one-piece-chibi-png-image-564-e-free-download-one-piece-chibi-png-564_880.png"
            message="Test"
            timestamp="timestamp test"
            username="Luffy"
            image="https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.0-9/129638447_3964991850179085_2602377752716764285_n.jpg?_nc_cat=1&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEm4oOMvR4x3os289pmY34_cIzuEwr_7n9wjO4TCv_uf63MyChkh6GOI3rviblDRm-FsluEU_QCZj3Jyy07UzW1&_nc_ohc=9Ml9XHxh2U0AX-8jzEd&_nc_ht=scontent.fmnl17-3.fna&oh=2f4a27147e6f3a8ffd8cff1e8664f2e9&oe=5FEF2E7B"
            />
        </div>
    )
}

export default Timeline
