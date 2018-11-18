import { getModuleName } from 'common/utils';

const getAllowRouter = ['/'];
const getAllowModule = ['auth', 'home'];

export const isNotCheckAuth = () => {
  const allowModules = getAllowModule;
  const currentModule = getModuleName();
  return allowModules.indexOf(currentModule) !== -1;
}