import { VictoryBar, VictoryChart, VictoryTheme } from "victory";


export const Chart = () => {
    return (
        <VictoryChart
            domainPadding={25}
            theme={VictoryTheme.clean}
        >
            <VictoryBar
                categories={{
                    x: [
                        "birds",
                        "cats",
                        "dogs",
                        "fish",
                        "frogs",
                    ],
                }}
                data={[
                    { x: "cats", y: 1 },
                    { x: "dogs", y: 2 },
                    { x: "birds", y: 3 },
                    { x: "fish", y: 2 },
                    { x: "frogs", y: 1 },
                ]}
            />
        </VictoryChart>
    )
}

export default Chart;