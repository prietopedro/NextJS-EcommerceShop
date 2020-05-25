import React from "react";

export default function InstagramSVG(props) {
	return (
		<svg
			className="navi-icon"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			id="Layer_1"
			x="0px"
			y="0px"
			viewBox="0 0 16 16"
		>
			<path
				d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
				fill={props.color || "#fff"}
			/>
			<path
				fill={props.color || "#fff"}
				d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
				fill={props.color || "#fff"}
			/>
			<circle fill={props.color || "#fff"} cx="12.3" cy="3.7" r="0.533" />
		</svg>
	);
}
