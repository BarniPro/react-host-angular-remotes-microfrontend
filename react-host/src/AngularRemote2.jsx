import React, { useRef, useEffect } from "react";
import { mount } from "angular_remote_2/angularRemote2";

const AngularRemote2 = () => {
    const ref = useRef(null);
    useEffect(() => {
        mount();
    }, []);
    return <angular-remote-2-root></angular-remote-2-root>
};

export default AngularRemote2;