import Errawr from './errawr';
import rawr from './rawr';
import { hasName, isError } from './helpers';

const { invariant } = Errawr;

export { Errawr, Errawr as Error, rawr, invariant, hasName, isError };
export default Errawr;
