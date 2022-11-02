export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputa2zJ5QB = false;
		const _arrayValueQcgpdYO = "ElaVknL9LkUSyu8PAkWsXV2BGtFtIHBcg1VSnbl9o51UuDvTQMUjhWpzc6kMblvHH77D9nMyOyTN4m";
		const _arrayValue5ob0Hp = true;
		const _arrayValueXXvNELg = "blSXcX5D5pBRHgzuSLCAEIFcsWeGbNhDvlFK8QdF9qhIIjqQmWlLAxI7ztWatTtpQl3WLqrT3aas1J6rwYVj5PccRlfvIQrux";
		const _arrayValuei0YZzh5 = undefined;
		const _arrayValueg5vr0ON = [_arrayValueXXvNELg, _arrayValuei0YZzh5]
		const _arrayValuegHcoTFG = 2.682925527026798;
		const _arrayValueQUnQ8Z2 = "YDIV8EMNLtrVUNJuVzGLZHd5azve78sAU7FIVYSvcTKvvmpGyy4sfn63SWsCZdiT3L4TRfi9v5bXgpPJhye1";
		const _unitsmG5cT04 = [_arrayValueQcgpdYO, _arrayValue5ob0Hp, _arrayValueg5vr0ON, _arrayValuegHcoTFG, _arrayValueQUnQ8Z2]
		const _returnValuetWrdFJh = await isBefore(_inputa2zJ5QB, _unitsmG5cT04)
	});
})