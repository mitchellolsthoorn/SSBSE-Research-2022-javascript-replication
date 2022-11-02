export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputnhYzryW = "ggfP718hroZv12If5glpAAJ3hZl6Msh8VpHK3IwpqDz";
		const _unitsEf3iBa1 = "yk3sXEJhUqpWc7s12EJIeGQAHdYDH3a0Y1b6u";
		const _returnValueyK47W6 = await isSame(_inputnhYzryW, _unitsEf3iBa1)
	});

	it('test for isSame', async () => {
		const _inputUPWvT6c = true;
		const _unitspXNfLne = {
		
	}
		const _returnValuedjVuG9c = await isSame(_inputUPWvT6c, _unitspXNfLne)
	});
})