import React from 'react';

const Astronaut = () => {
	const length = 20;
	return (
		<div className="ast-container">
			<div className="astronaut">
				<div className="helmet">
					<div className="left-lug"></div>
					<div className="right-lug"></div>
					<div className="visor"></div>
				</div>
				<div className="neck"></div>
				<div className="body">
					<div className="left-arm">
						<div className="shadow"></div>
						<div className="hoop-1"></div>
						<div className="hoop-2"></div>
					</div>
					<div className="right-arm">
						<div className="shadow"></div>
						<div className="hoop-1"></div>
						<div className="hoop-2"></div>
					</div>
					<div className="chest-pack">
						<div className="flag"></div>
						<div className="dot1"></div>
						<div className="dot2"></div>
						<div className="dot3"></div>
						<div className="lower-console">
							<div className="box1"></div>
							<div className="box2"></div>
							<div className="box3"></div>
						</div>
					</div>
					<div className="belt">
						<div className="loop1"></div>
						<div className="loop2"></div>
						<div className="loop3"></div>
					</div>
				</div>

				<div className="backpack"></div>

				<div className="legs">
					<div className="thigh-gap"></div>
					<div className="left-knee"></div>
					<div className="right-knee"></div>
					<div className="left-foot"></div>
					<div className="right-foot"></div>
				</div>
			</div>

			<div className="planet1">
				<div className="dot1"></div>
				<div className="dot2"></div>
				<div className="dot3"></div>
			</div>

			<div className="planet2">
				<div className="dot1"></div>
				<div className="dot2"></div>
				<div className="dot3"></div>
				<div className="dot4"></div>
				<div className="dot5"></div>
			</div>

			{[...Array(length)].map((e, i) => (
				<div className="star" key={i}></div>
			))}
		</div>
	);
};

export default Astronaut;
