import React from 'react'

import { Grid } from '@material-ui/core'

import CardItem from '../../components/Common/CardItem'
import { CustomContainerRaw } from '../../components/Custom/Container'
import { CustomTitle } from '../../components/Custom/Title'

const CharactersScreen = () => {

    return (
        <CustomContainerRaw>
            <CustomTitle>
                List of all Characters
            </CustomTitle>

            <Grid container spacing={4} >

                <CardItem
                    title={"Character Name"}
                    urlToImage={"https://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png"}
                    description={"Loren ipsum dummy text"}
                    url={"details"}
                />

                <CardItem
                    title={"Character Name"}
                    urlToImage={"https://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png"}
                    description={"Loren ipsum dummy text"}
                    url={"details"}
                />

                <CardItem
                    title={"Character Name"}
                    urlToImage={"https://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png"}
                    description={"Loren ipsum dummy text"}
                    url={"details"}
                />

                <CardItem
                    title={"Character Name"}
                    urlToImage={"https://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png"}
                    description={"Loren ipsum dummy text"}
                    url={"details"}
                />

                <CardItem
                    title={"Character Name"}
                    urlToImage={"https://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png"}
                    description={"Loren ipsum dummy text"}
                    url={"details"}
                />

                <CardItem
                    title={"Character Name"}
                    urlToImage={"https://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png"}
                    description={"Loren ipsum dummy text"}
                    url={"details"}
                />

                <CardItem
                    title={"Character Name"}
                    urlToImage={"https://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png"}
                    description={"Loren ipsum dummy text"}
                    url={"details"}
                />

                <CardItem
                    title={"Character Name"}
                    urlToImage={"https://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png"}
                    description={"Loren ipsum dummy text"}
                    url={"details"}
                />
            </Grid>
        </CustomContainerRaw>

    )
}

export default CharactersScreen