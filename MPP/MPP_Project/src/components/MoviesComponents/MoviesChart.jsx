// a chart component that displays a bar chart with how many movies were released each decade.
import { useContext } from 'react';
import MoviesContext from './../ContextComponent.jsx';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

function ChartByYear() {
    const { movies } = useContext(MoviesContext);

    // get the decades
    let decades = [];
    movies.forEach((movie) => {
        let year = movie.year;
        let decade = Math.floor(year / 10) * 10;
        if (!decades.includes(decade)) {
            decades.push(decade);
        }
    });
    // console.log(decades);

    // count the number of movies in each decade
    let moviesPerDecade = [];

    decades.forEach((decade) => {
        let count = movies.filter((movie) => {
            let year = movie.year;
            let decadeOfMovie = Math.floor(year / 10) * 10;
            return decadeOfMovie === decade;
        }).length;
        moviesPerDecade.push(count);
    });
    // console.log(moviesPerDecade);

    // create the data for the pie chart
    let pieChartData = [];
    decades.forEach((decade, index) => {
        pieChartData.push({
            id: index,
            value: moviesPerDecade[index],
            label: decade.toString(),
        });
    });
    console.log(pieChartData);

    return (
        <div style={{ marginTop: 50, width: 'auto', height: 'auto' }}>
            <PieChart
                series={[
                    {
                        data: pieChartData,
                        innerRadius: 30,
                        outerRadius: 300,
                        paddingAngle: 1,
                        cornerRadius: 5,
                        arcLabel: (item) => `${item.label} (${item.value})`,
                        arcLabelMinAngle: 5,
                    },
                ]}
                colors={[
                    '#FFD6A5',
                    '#FDFFB6',
                    '#CAFFBF',
                    '#9BF6FF',
                    '#A0C4FF',
                    '#BDB2FF',
                    '#FFC6FF',
                    '#FFFFFC',
                    '#E0E0E0',
                ]}
                width={1000}
                height={700}
                sx={{ fontFamily: 'cursive' }}
            />
        </div>
    );
}

export default ChartByYear;
