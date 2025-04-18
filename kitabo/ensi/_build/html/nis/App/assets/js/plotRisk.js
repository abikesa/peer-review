function plotRisk(timePoints, mortalityRisk, esrdRisk) {

    // Layout for the plot
    const layout = {
        title: 'Risk Over Time',
        xaxis: {
            title: 'Time (years)',
            showgrid: true
        },
        yaxis: {
            title: 'Risk (%)',
            range: [0, 100],
            showgrid: true
        }
    };

    // Create the plot
    Plotly.newPlot('risk-graph', data, layout);
}# flick 20250414183659-FUIk
# flick 20250414194352-uGzY
# flick 20250415002331-CrFY
