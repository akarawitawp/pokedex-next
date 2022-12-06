import  React  from "react";
import { NextPage }  from "next";
declare type NextCustomPage = NextPage & {
    Layout?: React.FC<any>;
};