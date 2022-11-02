export {}
import split from "../../.syntest/instrumented/benchmark/top10npm/lodash/split.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('split', () => {
	it('test for split', async () => {
		const _stringS7QbiT4 = "cqCyJUzzwg7C8bxzGAulNHS7B0EQ3Jpcb4M5Sy4eCDLvlUoS13LIO9HGIL54th2ILyICNxecYExPyJLUPwWn";
		const _separatorqrUI5S6 = null;
		const _limitwQJ3gkW = {
		
	}
		const _returnValueh7H3aYI = await split(_stringS7QbiT4, _separatorqrUI5S6, _limitwQJ3gkW)
	});

	it('test for split', async () => {
		const _stringUXcOZLI = "93WD5BkBjT3TPOjkNaNMlTdos6Yt59bhPZ1dUMblnJojfeJezERRNtp3EgOA6ut9swNtaFiAnID3fY";
		const _separatoruOSupkY = null;
		const _limittrrNrmY = 3.319981929205042;
		const _returnValuelWmZ9XV = await split(_stringUXcOZLI, _separatoruOSupkY, _limittrrNrmY)
	});

	it('test for split', async () => {
		const _stringci8FQt8 = undefined;
		const _separatorOV0RkHc = null;
		const _limitWy4fEN0 = undefined;
		const _returnValueBmWI5fM = await split(_stringci8FQt8, _separatorOV0RkHc, _limitWy4fEN0)
	});

	it('test for split', async () => {
		const _returnValuen6JO2mv = 0.03737508415595414;
		const _stringyRPqDvV = () => { return _returnValuen6JO2mv };
		const _separatorWHVClRM = -6.955252179785517;
		const _limitSj0rXxt = undefined;
		const _returnValuewoS4Kk = await split(_stringyRPqDvV, _separatorWHVClRM, _limitSj0rXxt)
	});
})