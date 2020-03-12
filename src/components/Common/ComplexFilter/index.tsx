import {Field, Formik} from "formik";
import React from "react";
import {Grid, TextField} from "@material-ui/core";
import {ComplexButton} from "@Components/Custom/Button/ComplexButton";
import {CustomGridCenterItems} from "@Components/Custom/Grid";
import {ICriteria} from "../../../types/filter";
import {SelectInput} from "@Components/Common/SelectInput";

export type Props = { topicCriteria: ICriteria[], initialValues: any };

export const ComplexFilter = (props: Props) => {
    const {topicCriteria, initialValues} = props;

    return <Formik
        initialValues={initialValues}
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
                    {topicCriteria.map((criteria: ICriteria, key: number) => (
                        <CustomGridCenterItems item xs={12} sm={6} key={key}>
                            {
                                Array.isArray(criteria.value) && (
                                    <Field as="select" name={criteria.topic} component={SelectInput}
                                           label={criteria.topic} options={criteria.value}/>)
                            }
                            {
                                !Array.isArray(criteria.value) && (
                                    <TextField id={`${criteria.topic}`} label={`${criteria.value}`}
                                               onChange={handleChange}/>)
                            }

                        </CustomGridCenterItems>
                    ))}
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