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
}# flick 20250414183708-sRCw
# flick 20250414205103-CXHg
