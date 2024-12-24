import React, { FunctionComponent } from "react";
import VideoList from "./VideoList";
import TotalComponent from "components/total";
import { Box, Button } from "zmp-ui";

const VideoSection: FunctionComponent<any> = props => {

    return (
        <Box>
            <TotalComponent amount="4 videos" />
            <Box>
                <VideoList />
                <div className="flex items-center justify-center gap-3 pb-5 pt-3">
                    <Button onClick={() => console.log(123)} size="medium">Xem thêm</Button>
                </div>
            </Box>
        </Box>
    )
};

export default VideoSection