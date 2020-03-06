import {Formik} from "formik";
import React from "react";
import {Grid, TextField} from "@material-ui/core";
import {ComplexButton} from "@ComponentsCustom/Button/ComplexButton";
import {CustomGridCenterItems} from "@ComponentsCustom/Grid";
import {SelectInput} from "@ComponentsCommon/SelectInput";

export const ComplexFilter = () => {
    return <Formik
        initialValues={{name: '', status: '', species: '', type: '', gender: '', origin: ''}}
        validate={values => {
            return {};
        }}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }}
    >
        {({
              values,
              handleChange,
              handleSubmit,
              isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
                <Grid container>
                    <CustomGridCenterItems item xs={12} sm={6}>
                        <SelectInput label={"Status"} options={["Alive", "Dead", "unknown"]}/>
                    </CustomGridCenterItems>
                    <CustomGridCenterItems item xs={12} sm={6}>
                        <SelectInput label={"Gender"} options={["Female", "Male", "Genderless", "unknown"]}/>
                    </CustomGridCenterItems>
                    <CustomGridCenterItems item xs={12} sm={6}>
                        <TextField id="name" label="Name" value={values.name} onChange={handleChange}/>
                    </CustomGridCenterItems>
                    <CustomGridCenterItems item xs={12} sm={6}>
                        <TextField id="species" label="Species" value={values.species} onChange={handleChange}/>
                    </CustomGridCenterItems>
                    <CustomGridCenterItems item xs={12} sm={6}>
                        <TextField id="type" label="Type" value={values.type} onChange={handleChange}/>
                    </CustomGridCenterItems>
                    <CustomGridCenterItems item xs={12} sm={6}>
                        <TextField id="origin" label="Origin" value={values.origin} onChange={handleChange}/>
                    </CustomGridCenterItems>
                    <CustomGridCenterItems item xs={12} sm={12}>
                        <ComplexButton type="submit" disabled={isSubmitting}>
                            Find
                        </ComplexButton>
                    </CustomGridCenterItems>
                </Grid>
            </form>


        )}
    </Formik>
};