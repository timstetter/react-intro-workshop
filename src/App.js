import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Switch from './components/Switch';
import Votes from './components/Votes';
import Weather from './components/Weather';
import Quotes from './components/Quotes';
import { useEffect, useState } from 'react';
import QuoteList from './components/QuoteList';

function App() {

    const [weatherList, setWeatherList] = useState([]);

    useEffect(() => {
        fetch("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
            .then((res) => res.json())
            .then((data) => {
                // Set the state with the data we need.
                setWeatherList(data.properties.periods);
            });
    }, []);


    return (
        <div className="App">
            {weatherList.length === 0
                ? "Loading..."
                : weatherList.map((wx) => (
                    <Weather
                        key={wx.number}
                        time={wx.name}
                        tempF={wx.temperature}
                        conditions={wx.shortForecast}
                    />
                ))}

            <Counter />
            <h2>Another Counter ...</h2>
            <Counter />

            <br />

            <Switch />
            <Switch />

            <br />

            <Votes />

            <QuoteList />

            <Quotes author="Yoda" text="Do. Or do not. There is no try." date="Along time ago." />
            <Quotes author="Nelson Mandela" text="It always seems impossible until it's done" date={2001} />
            <br />
            <Quotes author="Bugs Bunny" text="What's up doc?" />



        </div>
    );
}

export default App;
