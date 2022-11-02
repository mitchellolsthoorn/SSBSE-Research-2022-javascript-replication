export {}
import {addSubtract} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/add-subtract.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('addSubtract', () => {
	it('test for addSubtract', async () => {
		const _returnValueZTcUTMC = -3.275147563531081;
		const _momP6KzZt = () => { return _returnValueZTcUTMC };
		const _durationxh1CC4O = 6.716926116739895;
		const _isAddingtRE4ad8 = true;
		const _updateOffsetFArH6ot = false;
		const _returnValueqygTtj7 = await addSubtract(_momP6KzZt, _durationxh1CC4O, _isAddingtRE4ad8, _updateOffsetFArH6ot)
	});
})