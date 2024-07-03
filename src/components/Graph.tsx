import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { FormEvent, useLayoutEffect, useState } from "react";
import generateRandomPoints from "../utils/generatePoints";

ChartJS.register(...registerables);

const Graph = () => {
  const [graphType, setGraphType] = useState<"excel" | "field">("excel");
  const [pointsCount, setPointsCount] = useState<number>(15);
  const [graphRange, setGraphRange] = useState<number>(100);
  const [data, setData] = useState(
    generateRandomPoints({
      graphType,
      pointsCount,
      graphLength: graphRange,
    })
  );
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pointsCountInput = e.currentTarget.querySelector(
      "#points-count"
    ) as HTMLInputElement;
    const pointsRangeInput = e.currentTarget.querySelector(
      "#points-range"
    ) as HTMLInputElement;

    setGraphRange(Number(pointsRangeInput.value));
    setPointsCount(Number(pointsCountInput.value));
  };

  useLayoutEffect(
    () =>
      setData(
        generateRandomPoints({
          graphType,
          pointsCount,
          graphLength: graphRange,
        })
      ),
    [pointsCount, graphRange, graphType]
  );

  return (
    <div className="space-y-12 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        <div className="flex items-center gap-2 flex-col">
          <div className="flex gap-2 flex-wrap justify-center">
            <input
              type="number"
              id="points-count"
              min={5}
              className="p-2 min-w-0 rounded-lg border focus:border-blue-500 outline-none"
              placeholder="Points count"
            />
            <input
              type="number"
              id="points-range"
              min={5}
              className="p-2 min-w-0 rounded-lg border focus:border-blue-500 outline-none"
              placeholder="Points range"
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="excel">
              <input
                type="radio"
                id="excel"
                name="graph-type"
                checked={graphType === "excel"}
                onChange={() => setGraphType("excel")}
              />{" "}
              Excel points
            </label>
            <label htmlFor="field">
              <input
                type="radio"
                id="field"
                name="graph-type"
                checked={graphType === "field"}
                onChange={() => setGraphType("field")}
              />{" "}
              Field points
            </label>
          </div>
        </div>
        <button className="bg-gradient-to-b from-blue-700 to-blue-500 text-white h-10 inline-flex justify-center items-center min-w-28 rounded-xl active:scale-[98%]">
          Generate
        </button>
      </form>
      <div className="max-w-screen-lg mx-auto">
        <Scatter
          data={{
            datasets: [
              {
                label:
                  graphType === "excel"
                    ? "Excel Random Points"
                    : " Field random points",
                data,
                backgroundColor: "rgba(54, 162, 235, 1)",
              },
            ],
          }}
          options={{ maintainAspectRatio: true }}
        />
      </div>
      <div className="overflow-auto max-w-screen relative max-h-[320px]">
        <table className="w-full max-w-screen-lg mx-auto text-sm font-mono rounded-xl overflow-hidden">
          <thead className="text-left border-b border-collapse bg-blue-500 text-white">
            <tr>
              <th className="p-4 border-r">X</th>
              <th className="p-4">Y</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((datum) => (
              <tr className="p-4 [&:nth-child(odd)]:bg-slate-50">
                <td className="p-2 border-r">{datum.x.toFixed(2)}</td>
                <td className="p-2">{datum.y.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Graph;
