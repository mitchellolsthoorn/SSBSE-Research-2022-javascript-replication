export {}
const {isAbsolute} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAbsolute', () => {
	it('test for isAbsolute', async () => {
		const _arrayValuepaFK6cq = true;
		const _arrayValueAWCR50N = undefined;
		const _substring06BHlN = [_arrayValuepaFK6cq, _arrayValueAWCR50N]
		const _pathwMonDM9 = {
			"substring": _substring06BHlN
	}
		const _returnValueJxUYnFA = await isAbsolute(_pathwMonDM9)
	});
})