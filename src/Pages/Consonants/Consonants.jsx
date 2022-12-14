import React from 'react'
// import Card from 'react-bootstrap/Card';
import './Consonants.css';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import kaw from '../../images/kaw.png'
import khaw from '../../images/khaw.png'
import gaw from '../../images/gaw.png'
import ghaw from '../../images/ghaw.png'
import ungo from '../../images/ungo.png'
import chhaw from '../../images/chhaw.png'
import jhaw from '../../images/jhaw.png'
import daw from '../../images/daw.png'
import thaw from '../../images/thaw.png'
import murdhonno from '../../images/murdhonno.png'

function Consonants() {
  return (
    <div className='test-card-wrapper'>
      <div className='card1'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {kaw}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Ka </Button>
      </CardActions>
    </Card>
    </div>
    
    <div className='card2'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {khaw}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Kha </Button>
      </CardActions>
    </Card>
    </div>
    <div className='card3'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {gaw}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Ga </Button>
      </CardActions>
    </Card>
    </div>
    <div className='card4'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {ghaw}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Gha </Button>
      </CardActions>
    </Card>
    </div>

    <div className='card5'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {ungo}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Ungo </Button>
      </CardActions>
    </Card></div>

    <div className='card6'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {chhaw}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Chhaw </Button>
      </CardActions>
    </Card>
    </div>

    <div className='card7'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {jhaw}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">jhaw </Button>
      </CardActions>
    </Card>
    </div>

    <div className='card8'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {daw}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">daw </Button>
      </CardActions>
    </Card>
    </div>

    <div className='card9'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {thaw}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">thaw </Button>
      </CardActions>
    </Card>
    </div>

    <div className='card10'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {murdhonno}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">murdhonno </Button>
      </CardActions>
    </Card>
    </div>

    </div>
  
  )
}

export default Consonants