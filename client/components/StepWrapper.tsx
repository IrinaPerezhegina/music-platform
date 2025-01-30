import { Card, Container, Grid2, Step, StepLabel, Stepper } from "@mui/material";
import { ReactNode } from "react";

type StepWrapperProps = {
  activeStep: number;
  children:ReactNode
}
const steps=['Информация о треке','Загрузите  обложку','Загрузите сам трек']
const StepWrapper = ({ activeStep, children }: StepWrapperProps) => {
  return (
    <Container >
        <Stepper activeStep={activeStep}>
            {steps.map((step,index)=>(
                <Step key={index} completed={activeStep>index}>
                    <StepLabel>{step}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <Grid2 container justifyContent={'center'} style={{margin:'70px 0', height:270}}>
            <Card style={{width:680}}>
                {children}
            </Card>
        </Grid2>
        </Container>
  )
}

export default StepWrapper
