import  { FlowGrid }  from "@/components/flowHome/grid";
import FlowHeader from "@/components/flowHome/header";
import FlowHeader2 from "@/components/flowHome/header2";
import FlowHeader3 from "@/components/flowHome/header3";
import { Box } from "grommet";

export default function flowPage() {

    return (
    <Box>
        <FlowHeader/>
        <FlowHeader2/>
        <FlowHeader3/>
        <FlowGrid/>
    </Box>
    )
  }
  