import Youtube from 'react-youtube';
import React from 'react';
import { Box } from 'grommet';
import { Video } from 'grommet-icons';

export function FlowGrid() {
    const VideoList = [
        { id: "14ACQSYNdiM", title: "titulo 1" }, { id: "sK3msyye1ow", title: "titulo 2" }, { id: "x4gtz7VRW8E", title: "titulo 3" }, { id: "NfdvIvs7a4E", title: "titulo 4" }, { id: "OlpSfS-mDQY", title: "titulo 5" }, { id: "61cLi6ocdoo", title: "titulo 6" }
    ]
    return (
        <Box align='center' pad="small">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" >

                {VideoList.map((item) => {
                    return (
                        <FlowCard key={item.id} videoId={item.id} title={item.title} />
                    )
                })}
            </div>
        </Box>
    )
}

export function FlowCard({ videoId, title }) {
    const opts = {
        height: "202",
        width: "360"
    }
    return (
        <Box >
            <Youtube videoId={videoId} opts={opts} style={{ borderRadius: '10px', overflow: 'hidden' }}/>
            <Box pad={"small"}>
                <h1>{title}</h1>
            </Box>
        </Box>
    )
}
