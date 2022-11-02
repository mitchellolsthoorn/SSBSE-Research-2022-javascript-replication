export {}
import {addSubtract} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/add-subtract.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('addSubtract', () => {
	it('test for addSubtract', async () => {
		const _momacfDySU = 6.478787759089833;
		const _durationSfuwXmX = false;
		const _isAddingDHnriqa = 2.8953253370900107;
		const _updateOffsetqBGXRM = 2.302351010181521;
		const _returnValueREKJd9O = await addSubtract(_momacfDySU, _durationSfuwXmX, _isAddingDHnriqa, _updateOffsetqBGXRM)
	});
})