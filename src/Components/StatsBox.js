import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import numeral from 'numeral';
import React, { useState } from 'react'
import CountUp from 'react-countup';
import './StatsBox.css';

const StatsBox = ({title, today, total, color}) => {
  const [lastTotal, setLastTotal] = useState(0);
  const [lastToday, setLastToday] = useState(0);
  
  return (
    <Grid item xs={12} sm={4} className="statsBox">
      <Card className="statsBox__card" style={{borderColor: color}}>
        <CardContent>
          
          <Typography className="statsBox__title" color="textSecondary" >
            {title}
          </Typography>

          <h2 className="statsBox__today" style={{color: color}}>
            {today != null && <CountUp start={lastToday} end={today} formattingFn={value => numeral(value).format("+0.[0]a")} duration={2} onEnd={() => setLastToday(today)} />}
          </h2>

          <Typography className="statsBox__total" color="textSecondary">
            {total != null && <CountUp start={lastTotal} end={total} formattingFn={value => numeral(value).format("0.[0]a")} duration={2} onEnd={() => setLastTotal(total)} />} Total
          </Typography>

        </CardContent>
      </Card>
    </Grid>
  )
}

export default StatsBox
