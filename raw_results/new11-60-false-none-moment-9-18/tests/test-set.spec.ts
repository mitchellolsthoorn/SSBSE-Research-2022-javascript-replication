export {}
import {set} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('set', () => {
	it('test for set', async () => {
		const _momv0h3vHf = "Dt1NN3S7hyiaKFGA3bKCEj9GbWBGNQHj48OSSpwRBXF4OcMytd";
		const _unitvblPdFc = true;
		const _returnValuePsGwT1u = false;
		const _valueokPROe = () => { return _returnValuePsGwT1u };
		const _returnValueJlcXOTr = await set(_momv0h3vHf, _unitvblPdFc, _valueokPROe)
	});
})