import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import {TextInput} from "@abbvie-internal/unity"
import {Field} from "@abbvie-internal/unity"
import {Stepper} from "@abbvie-internal/unity"
import {Step} from "@abbvie-internal/unity"
import {Card, CardMedia, CardTitleRow, CardActionArea, CardBody} from "@abbvie-internal/unity";
import './Home.css';

const Home = () => {

    const uploaderLink = "https://go.abbvienet.com/study-uploader"
    const header = "OmicNavigator Study Builder"
    const onDoc = "https://github.com/abbvie-external/OmicNavigator"
    const [selected, setSelected] = useState(1);
    const [statuses, setStatuses] = useState([
        'incomplete',
        'incomplete',
        'incomplete',
    ]);

    const stepContents = [
        <>
            <h2>OmicNavigator: Open-Source Software for Omic Data Analysis and Visualization</h2>
            <p>This tool provides a web-app solution to building OmicNavigator study tarballs ready to be uploaded.
            The tarball provided by this app will be used as the input for the <a href={onDoc} style={{
                    color: "black",
                    backgroundColor: "orange",
                    borderRadius: '100px',
                    background: "orange"

                }}>Study Uploader</a></p>
                <p>To begin building your study, proceed to Step 2</p>
            <img style={{ width: 1000, height: 500 }} src={require('C:/Users/carusax/WebstormProjects/react-studybuilder/src/media/OmicNavigator.gif')} alt="loading..." />
        </>,
        <>
            <Card style={{maxWidth: '600px'}}>
                <CardBody>
                    <CardTitleRow title="Name"/>
                    <p style={{margin: 0, textAlign: "left"}}>
                        Name of your study. Please be short, but descriptive.
                    </p>
                </CardBody>
            </Card>
            <br/>
            <Field
                block
                inlineLabel
                label="Study Name"
                required
                validateStatus="warning"
            >
                <TextInput placeholder="Study.name.example"/>
            </Field>
            <br/>
            <Card style={{maxWidth: '600px'}}>
                <CardBody>
                    <CardTitleRow title="Description"/>
                    <p style={{margin: 0, textAlign: "left"}}>
                        Description of your study, be sure to
                        include AbbVie terms and IDs when relevant.
                        Example: RNAseq study of compound in tissue
                    </p>
                </CardBody>
            </Card>
            <br/>
            <Field
                block
                inlineLabel
                label="Description"
                required
                validateStatus="warning"
            >
                <TextInput placeholder="Description example"/>
            </Field>
            <br/>
            <Card style={{maxWidth: '600px'}}>
                <CardBody>
                    <CardTitleRow title="Maintainer Email"/>
                    <p style={{margin: 0, textAlign: "left"}}>
                        Name of study maintainer:
                    </p>
                </CardBody>
            </Card>
            <br/>
            <Field
                block
                inlineLabel
                label="Maintainer Email"
                required
                validateStatus="warning"
            >
                <TextInput placeholder="john.scientist@abbie.com"/>
            </Field>
        </>,
        <><Card style={{maxWidth: '600px'}}>
            <CardBody>
                <CardTitleRow title="Model"/>
                <p style={{margin: 0, textAlign: "left"}}>
                    Model of the study: Proteomics, RNA, Transcriptomics, Metabolimcs, etc
                </p>
            </CardBody>
        </Card>
            <br/>
            <Field
                block
                inlineLabel
                label="Study Model"
                required
                validateStatus="warning"
            >
                <TextInput placeholder="Study Model Example"/>
            </Field></>,

        <><><Card style={{maxWidth: '600px'}}>
            <CardBody>
                <CardTitleRow title="Assay"/>
                <p style={{margin: 0, textAlign: "left"}}>
                    A `.csv` file format that contains raw/normalized assay values
                    in a table with 'featureIDs' (gene symbols) in the first column and numeric assay values in the
                    following columns (which has unique 'sampleID' as column headings)
                </p>
            </CardBody>
        </Card>
            <br/>
            <Field
                block
                inlineLabel
                label="Assay"
                required
                validateStatus="warning"
            >
                <TextInput placeholder="Assay Example"/>
            </Field>
            <br/>
            <Card style={{maxWidth: '600px'}}>
                <CardBody>
                    <CardTitleRow title="Results"/>
                    <p style={{margin: 0, textAlign: "left"}}>
                        A `.xlsx` file format that contains comparison values for each conducted comparison test.
                        Please note that this tool assumes the columns are arranged as the following:
                        ```
                        (ex. "symbol"    "logFC"    "AveExpr"    "P.Value"    "adj.P.Val"    "tests")
                        ```
                        If there are additional columns of numeric values, please have them arranged between "AveExpr" and P.Value columns.
                        If there are multiple comparisons between groups conducted, please include each data table per comparison as its own tab
                        in the '.xlsx' results file.
                    </p>
                </CardBody>
            </Card>
            <br/>
            <Field
                block
                inlineLabel
                label="Results"
                required
                validateStatus="warning"
            >
                <TextInput placeholder="Results Example"/>
            </Field>
            <br/>
            <Card style={{maxWidth: '600px'}}>
                <CardBody>
                    <CardTitleRow title="Samples"/>
                    <p style={{margin: 0, textAlign: "left"}}>
                        A `.csv` file format that contains samples metadata with 'sampleIDs' in the first column
                        Please make sure the first column (sampleIDs) correspond to the 'sampleIDs' in Assays File column headings
                        Please make sure there is a column named 'Group_order' (with a capital G and an underscore between words) that contains the group order information in numbers: (1 ~ # of groups)
                        Please make sure there is a column named 'Group' that specifies the group names of the sample and corresponds to the group order numbering in the last column
                    </p>
                </CardBody>
            </Card>
            <br/>
            <Field
                block
                inlineLabel
                label="Sample"
                required
                validateStatus="warning"
            >
                <TextInput placeholder="Sample Example"/>
            </Field>

        </></>
    ]

    return (
        <div className="home">
            <h1>{header}</h1>
            <a href={onDoc} style={{
                color: "black",
                backgroundColor: "orange",
                borderRadius: '100px',
                background: "orange"

            }}>OmicNavigator GitHub</a>
            <br/>
            <br/>
            <form>
                <Stepper className="large-margin-bottom" value={selected} onClick={(event) => {
                    setSelected(+event.currentTarget.value);
                }}>
                    <Step value={1} status={statuses[0]} type='button'>
                        Intro
                    </Step>
                    <Step value={2} status={statuses[0]} type='button'>
                        Study
                    </Step>
                    <Step value={3} status={statuses[0]} type='button'>
                        Model
                    </Step>
                    <Step value={4} status={statuses[0]} type='button'>
                        Test
                    </Step>
                </Stepper>

                {
                    stepContents.map((content, idx) => <div style={{display: selected === idx + 1 ? 'block' : 'none'}}
                                                            key={idx}> {content}</div>)
                }
            </form>
        </div>
    )
}


export default Home;