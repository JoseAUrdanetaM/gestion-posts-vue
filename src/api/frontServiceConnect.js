import backServiceConnect from "./backServiceConnect";
import axios from "./axios";

const { jwt } = backServiceConnect(axios, {});
export default jwt;
