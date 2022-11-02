export {}
import {addSubtract} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/add-subtract.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('addSubtract', () => {
	it('test for addSubtract', async () => {
		const _momFGnB43r = 7.165671705808506;
		const _durationaw0NZP9 = false;
		const _isAddingvFJytoZ = true;
		const _updateOffsetrtPVpi = 8.810288853489418;
		const _returnValuebb17vQY = await addSubtract(_momFGnB43r, _durationaw0NZP9, _isAddingvFJytoZ, _updateOffsetrtPVpi)
	});
})