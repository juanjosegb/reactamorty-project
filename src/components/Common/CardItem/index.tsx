import React from 'react'

import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { CardDescription } from '../../Custom/Card/CardDescrption';
import { CustomCardMedia } from '../../Custom/Card/CardMedia';
import { CardTitle } from '../../Custom/Card/CardTitle';
import { CardDivider } from '../../Custom/Divider';
import { CustomGridCenterItems } from '../../Custom/Grid';

export type CardProps = { title?: string, description?: any, url?: string, urlToImage?: string }

const CardItem = (props: CardProps) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Card>
                <CustomGridCenterItems container spacing={2} >

                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <CustomCardMedia
                            image={props.urlToImage ? props.urlToImage : "https://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png"}
                            title="Contemplative Reptile"
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <CardTitle>
                            {props.title}
                        </CardTitle>
                    </Grid>

                </CustomGridCenterItems>


                <CardContent>

                    <CardDivider orientation={"horizontal"} />
                    <CardDescription>
                        {props.description}
                    </CardDescription>
                </CardContent>

                <CardActions>
                    <Button size="small" color="primary">
                        See details
                </Button>
                </CardActions>
            </Card>
        </Grid >
    )
}

export default CardItem