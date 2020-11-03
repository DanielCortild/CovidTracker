import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import axios from './axios';
import Stats from './Components/Stats';
import Map from './Components/Map';
import { Card, CardContent, Grid } from '@material-ui/core';
import Table from './Components/Table';
import Chart from './Components/Chart';

const colors = {
  cases: "#0000dd",
  recovered: "#00dd00",
  deaths: "#dd0000"
}

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [country, setCountry] = useState("all");
  const [countryInfo, setCountryInfo] = useState({});
  const [historicalData, setHistoricalData] = useState();

  const buildChartData = (data) => ({
    cases: Object.keys(data['cases']).map(date => ({
      x: date, 
      y: data['cases'][date]
    })),
    recovered: Object.keys(data['recovered']).map(date => ({
      x: date, 
      y: data['recovered'][date]
    })),
    deaths: Object.keys(data['deaths']).map(date => ({
      x: date, 
      y: data['deaths'][date]
    }))
  })

  useEffect(() => {
    const fetchCountries = async () => {
      await axios.get('/countries')
      .then(res => {setCountriesData(res.data)})
    }
    fetchCountries();
    const fetchCountryInfo =  async () => {
      await axios.get("/all").then(res => setCountryInfo(res.data));
    }
    fetchCountryInfo();
  }, []);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      await axios.get(`/historical/${country}?lastdays=all`)
        .then(res => setHistoricalData(buildChartData(country==='all' ? res.data : res.data.timeline)))
        .catch(error => setHistoricalData(null))
    }
    fetchHistoricalData();
  }, [country])

  const onCountryChange = async e => {
    console.log(e.target.value)
    setCountry(e.target.value);
    const url = (e.target.value === "all") 
      ? "/all" 
      : `/countries/${e.target.value}`;
    await axios.get(url).then(res => {
      setCountryInfo(res.data);
    });

  }

  return (
    <Grid container spacing={3} className="app">

      <Grid item xs={12} md={7} lg={8} className="app__left">
        <Header countries={countriesData.map(({country, countryInfo: {iso3}}) => ({country, iso3})).filter(({iso3}) => iso3)} country={country} onCountryChange={onCountryChange}/>
        <Stats countryInfo={countryInfo} colors={colors} />
        <Chart data={historicalData} colors={colors}/>
      </Grid>

      <Grid item xs={12} md={5} lg={4} className="app__right">
        <Card>
          <CardContent className="app__rightCard">
            <Table countriesData={countriesData} onCountryChange={onCountryChange}/>
            <Map countriesData={countriesData}/>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
}

export default App;
