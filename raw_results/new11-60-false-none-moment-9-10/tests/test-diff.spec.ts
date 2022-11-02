export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _arrayValuedlnN2SO = "AumEco6Q5RaNLlaaK1zr2uiQKnFyOsA5N5YyQpU24q";
		const _arrayValueTGeiQdv = {
		
	}
		const _inputmiD8iYU = [_arrayValuedlnN2SO, _arrayValueTGeiQdv]
		const _unitseyVnGSL = "3u72EXBS9SOqFBF8AASgF7V4MdedzTnLXrq5oYWU9xqMXDbar7Q7k7WDfxv5RRe25q87BFGr2u3";
		const _arrayValueWmie15y = undefined;
		const _arrayValuemGLLTAU = 5.439073030138745;
		const _arrayValueX8XkxLc = 4.362118787702784;
		const _asFloatO54BwE = [_arrayValueWmie15y, _arrayValuemGLLTAU, _arrayValueX8XkxLc]
		const _returnValueqJmWqZz = await diff(_inputmiD8iYU, _unitseyVnGSL, _asFloatO54BwE)
	});
})