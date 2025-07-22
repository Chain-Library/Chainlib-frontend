import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Check } from "lucide-react";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

// Custom connector styling
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20,
    left: "calc(-50% + 20px)",
    right: "calc(50% + 20px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#096cff",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#096cff",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));

// Custom step icon
interface CustomStepIconProps {
  active: boolean;
  completed: boolean;
  icon: React.ReactNode;
}

const CustomStepIcon: React.FC<CustomStepIconProps> = ({
  active,
  completed,
  icon,
}) => {
  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
        active || completed
          ? "bg-[#096cff] text-white border-[#096cff]"
          : "bg-white text-gray-500 border-gray-300"
      }`}
    >
      {completed ? <Check size={16} /> : icon}
    </div>
  );
};

// Custom step label styling
const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    marginTop: 8,
    fontSize: 14,
    "&.Mui-active": {
      color: theme.palette.text.primary,
    },
    "&.Mui-completed": {
      color: theme.palette.text.primary,
    },
  },
}));

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, title: "Book Content" },
    { number: 2, title: "Book Details" },
    { number: 3, title: "Pricing" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        padding: "0px 0",
      }}
    >
      <Stepper
        activeStep={currentStep - 1} // MUI Stepper is 0-indexed, so adjust accordingly
        alternativeLabel
        connector={<CustomConnector />}
        sx={{ width: "100%" }}
      >
        {steps.map((step) => (
          <Step key={step.number}>
            <CustomStepLabel
              StepIconComponent={(props) => (
                <CustomStepIcon
                  active={props.active ?? false}
                  completed={props.completed ?? false}
                  icon={step.number}
                />
              )}
            >
              {step.title}
            </CustomStepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepIndicator;
