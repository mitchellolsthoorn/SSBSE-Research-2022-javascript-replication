export {}
import {createInvalid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('createInvalid', () => {
	it('test for createInvalid', async () => {
		const _arrayValueTNWNw0p = undefined;
		const _arrayValueXAtnZL = null;
		const _arrayValueYPDM9tT = [_arrayValueXAtnZL]
		const _arrayValueoRVwM7g = "jIRQp9sezuRooC";
		const _arrayValuespUwzOK = "SctjArhHqZ0zu3iMzTmM6bDvpHFIwl4t";
		const _arrayValueixDTS8L = [_arrayValueYPDM9tT, _arrayValueoRVwM7g, _arrayValuespUwzOK]
		const _flagsX8nktNd = [_arrayValueTNWNw0p, _arrayValueixDTS8L]
		const _returnValuezoVi2Vq = await createInvalid(_flagsX8nktNd)
	});
})