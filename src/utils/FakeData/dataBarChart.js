export const dataBarChart = {
    type: 'bar',
    labels: ["Aug 1","Aug 2","Aug 3","Aug 4","Aug 5","Aug 6","Aug 7"],
    datasets: [{
        label: 'This Year',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: '#3f51b5',
        barThickness: 10,
        borderRadius: 10,
    },
    {
        label: 'Last Year',
        data: [9, 7, 5, 8, 6, 5, 4],
        backgroundColor: '#e53935',
        barThickness: 10,
        borderRadius: 10,
    }],

}
