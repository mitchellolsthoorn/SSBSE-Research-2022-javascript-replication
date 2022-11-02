export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputSe0jRQN = "Ff2s9TmyRdA5N8qYVYXdCxcQntl39p6apKAx9eJ67tNOD948zUBj";
		const _arrayValuewXomuFJ = -0.28928482482354667;
		const _arrayValueZmenk9 = [_arrayValuewXomuFJ]
		const _arrayValueR5jRX4j = false;
		const _arrayValuerVOyE1e = -8.394433583302458;
		const _arrayValueeT3TidK = [_arrayValuerVOyE1e]
		const _unitswscML3S = [_arrayValueZmenk9, _arrayValueR5jRX4j, _arrayValueeT3TidK]
		const _returnValuebjSSCG7 = await isSameOrAfter(_inputSe0jRQN, _unitswscML3S)
	});
})