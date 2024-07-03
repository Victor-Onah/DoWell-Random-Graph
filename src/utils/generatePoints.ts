type Params = {
	graphType: "field" | "excel";
	pointsCount: number;
	graphLength: number;
};

type ReturnType = { x: number; y: number }[];

const generateRandomPoints = ({
	graphType,
	pointsCount,
	graphLength
}: Params): ReturnType => {
	const points: ReturnType = [];

	if (graphType === "field") {
		for (let i = 0; i < pointsCount; i++) {
			// Generate random x and y coordinates within the specified graphLength length
			const x = Math.random() * graphLength - graphLength / 2;
			const y = Math.random() * graphLength - graphLength / 2;
			points.push({ x, y });
		}
	} else {
		for (let i = 0; i < pointsCount; i++) {
			// Generate random x and y coordinates within the grid
			const x = Math.floor(Math.random() * graphLength) + 1;
			const y = Math.floor(Math.random() * graphLength) + 1;
			points.push({ x, y });
		}
	}

	return points;
};

export default generateRandomPoints;
