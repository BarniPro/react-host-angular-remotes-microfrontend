import React, { useRef, useEffect } from "react";
import { mount } from "angular_remote_1/angularRemote1";

const AngularRemote1 = () => {
    const ref = useRef(null);
    useEffect(() => {
        mount();
    }, []);
    return <angular-remote-1-root></angular-remote-1-root>
};

export default AngularRemote1;