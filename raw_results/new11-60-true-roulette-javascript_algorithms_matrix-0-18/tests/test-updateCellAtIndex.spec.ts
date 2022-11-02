export {}
import {updateCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('updateCellAtIndex', () => {
	it('test for updateCellAtIndex', async () => {
		const _returnValueCMYjt2P = -4.2442502771584625;
		const _mOordYKf = () => { return _returnValueCMYjt2P };
		const _lengthgV6EvFb = -4.8502452483533105;
		const _cellIndicesfidw1pE = {
			"length": _lengthgV6EvFb
	}
		const _cellValueddMzxGc = 9.4772044017549;
		const _returnValueHJAMGz = await updateCellAtIndex(_mOordYKf, _cellIndicesfidw1pE, _cellValueddMzxGc)
	});

	it('test for updateCellAtIndex', async () => {
		const _arrayValueVtmFE5P = 5.110454601515599;
		const _arrayValueMPlWb7G = {
		
	}
		const _arrayValuezMDqWvM = true;
		const _mkwX94ni = [_arrayValueVtmFE5P, _arrayValueMPlWb7G, _arrayValuezMDqWvM]
		const _lengthHhCMC5 = 8.228550836586408;
		const _cellIndiceskwWBhpw = {
			"length": _lengthHhCMC5
	}
		const _cellValueMisisFl = -5.6629566674489284;
		const _returnValuesniqctX = await updateCellAtIndex(_mkwX94ni, _cellIndiceskwWBhpw, _cellValueMisisFl)
	});
})