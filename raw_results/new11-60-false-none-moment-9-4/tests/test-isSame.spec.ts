export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputKcvT9K5 = true;
		const _unitsv1LY2TZ = "n69FNdhuCaEcBLJRkb49hBkGrVpZ65aET8xOGr0Afrbj5br1zrw34vDnl2hTfRdM6qQrWB7I2o5KtxtFi";
		const _returnValuebJOkGFV = await isSame(_inputKcvT9K5, _unitsv1LY2TZ)
	});
})