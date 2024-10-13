import routerBackService from "./routerBackService";

export default function frontServiceConnect(axiosIns, jwtOverrideConfig) {
  const jwt = new routerBackService(axiosIns, jwtOverrideConfig);
  return {
    jwt,
  };
}
