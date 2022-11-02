export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputxMtBzyE = {
		
	}
		const _unitsEceeQzX = {
		
	}
		const _returnValueKwvUsvJ = await isSame(_inputxMtBzyE, _unitsEceeQzX)
	});

	it('test for isSame', async () => {
		const _arrayValueyt5bxVX = "k6iIGoGRHGmGIJG9yikuUkfTrYp9rMnhPCGDWz6gTBCGKmgmqeJgQBbayOB9bTADYWDcXqjv";
		const _arrayValueeILu73Z = true;
		const _returnValueuNUFSVK = [_arrayValueyt5bxVX, _arrayValueeILu73Z]
		const _inputXUNZx8 = () => { return _returnValueuNUFSVK };
		const _unitsuhxZpv1 = {
		
	}
		const _returnValuetis19Te = await isSame(_inputXUNZx8, _unitsuhxZpv1)
	});
})