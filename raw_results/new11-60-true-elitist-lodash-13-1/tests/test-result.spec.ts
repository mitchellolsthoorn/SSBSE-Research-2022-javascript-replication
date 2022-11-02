export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectc9BrKLi = undefined;
		const _lengthsBZ8ucU = 9.877693257545253;
		const _pathpGfSOKo = {
			"length": _lengthsBZ8ucU
	}
		const _defaultValuemDxUEi = {
		
	}
		const _returnValueuJw9quO = await result(_objectc9BrKLi, _pathpGfSOKo, _defaultValuemDxUEi)
	});

	it('test for result', async () => {
		const _objectpPXuue = undefined;
		const _pathu4AgFyn = null;
		const _defaultValuejWe5l19 = {
		
	}
		const _returnValueXfBj5Px = await result(_objectpPXuue, _pathu4AgFyn, _defaultValuejWe5l19)
	});

	it('test for result', async () => {
		const _objectpKXllC = undefined;
		const _pathrRixxf = []
		const _defaultValueztjAKp2 = {
		
	}
		const _returnValueAhYH6eC = await result(_objectpKXllC, _pathrRixxf, _defaultValueztjAKp2)
	});

	it('test for result', async () => {
		const _objectYEUaKZl = undefined;
		const _pathiubyKug = "USTGvW7HufF4kqc7B65BbNVKD9Gv7fdhr4m9T2wuxdmukdfsuIaYF3Wh9w2IxheYQqo26";
		const _returnValuedB6hbz = -1.9864550711695;
		const _returnValueoG685wj = () => { return _returnValuedB6hbz };
		const _defaultValuelH3lKbA = () => { return _returnValueoG685wj };
		const _returnValueAYdhyLa = await result(_objectYEUaKZl, _pathiubyKug, _defaultValuelH3lKbA)
	});
})