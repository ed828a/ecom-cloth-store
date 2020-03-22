// import './homepage.scss';
import React, { Profiler } from "react";
import Directory from "../../component/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

function HomePage() {
    // throw Error;
    return (
        <HomePageContainer className="homepage">
            <Profiler
                id="directory"
                onRender={(id, phase, actualDuration) => {
                    console.log({ id, phase, actualDuration });
                }}
            >
                <Directory />
            </Profiler>
        </HomePageContainer>
    );
}

export default HomePage;
