import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 2 auto;
  border-color: red;
`;

export const Spinner = (props) => {
    return (
        <div className="sweet-loading">
            <ClipLoader
                css={override}
                size={15}
                color={"#123abc"}
                loading={props.loading}
            />
        </div>
    );
};