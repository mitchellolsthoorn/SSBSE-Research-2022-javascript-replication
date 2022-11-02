export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _returnValueBHMLryM = undefined;
		const _input3j6rUy = () => { return _returnValueBHMLryM };
		const _unitsVhGSx4X = "nPLPDIMQP2HiJzqTUPTSEz3CDkaFr0uCXUbs8F1GBq70fiHu5tk7rxe8vF5430pTcQMXWg1EVYmE5BSSSm6p1I";
		const _returnValueL0vzPSH = await isSameOrBefore(_input3j6rUy, _unitsVhGSx4X)
	});
})