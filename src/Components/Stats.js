import { Grid } from '@material-ui/core'
import React from 'react'
import './Stats.css'
import StatsBox from './StatsBox'

const Stats = ({countryInfo: {todayCases, cases, todayRecovered, recovered, todayDeaths, deaths}, colors}) => {
  return (
    <Grid container spacing={3} className="stats">

      <StatsBox color={colors.cases} title="Cases" today={todayCases} total={cases} />
      <StatsBox color={colors.recovered} title="Recovered" today={todayRecovered} total={recovered} />
      <StatsBox color={colors.deaths} title="Deaths" today={todayDeaths} total={deaths} />
      
    </Grid>
  )
}

export default Stats
