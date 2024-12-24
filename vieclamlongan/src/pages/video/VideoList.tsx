import React, { FunctionComponent } from "react";
import VideoItem from "./VideoItem";
import { Box } from "zmp-ui";

const VideoList: FunctionComponent<any> = props => {

    return (
        <Box p={4} pt={8}>
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
        </Box>
    )
};

export default VideoList