import React from 'react'
import Datatable from "../../components/Common/Datatable";
import {EpisodesTableColumns} from "../../constants/EpisodesTableColumns";
import {CustomContainerDatatable} from "../../components/Custom/Container";

const EpisodesScreen = () => {

    return (
        <CustomContainerDatatable>
            <Datatable columns={EpisodesTableColumns} data={[{
                name: "Test",
                air_date: "1 de Diciembre",
                episode: "E1S4",
                created: "1 de Noviembre"
            }, {
                name: "Episodio 1",
                air_date: "1 de Diciembre",
                episode: "E1S4",
                created: "1 de Noviembre"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }, {
                name: "Episodio 2",
                air_date: "1 de Mayo",
                episode: "E3S2",
                created: "1 de Enero"
            }]}/>
        </CustomContainerDatatable>
    );
};

export default EpisodesScreen