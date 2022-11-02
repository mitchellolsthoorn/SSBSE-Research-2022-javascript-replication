export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _inputB8K94dd = true;
		const _arrayValuea7YtveO = true;
		const _arrayValuefGBiJVX = "YkgfQh2e5ydt52XNHQa2P7aS8Dmwa9J6i0rXpWTw3HVNJmsx5lxWARSB";
		const _arrayValueZSs1qHy = undefined;
		const _arrayValueOV7mb3S = "M9vKi3gwPi5qb5OzQda90zUYvrPJMPhAoew1rqvxmsg8Enn7SqB4pn1rjhhhGE";
		const _arrayValuevi5i5v = "meLejkMoEaurAuNHlgjxLSIIno1c9LWy9sJBbuBVtLkjePFj95RVfiLAZMRg2My6YFvWxBg4s09qoyhNS0x";
		const _arrayValuewIAB5U2 = undefined;
		const _arrayValueW9voek3 = [_arrayValuevi5i5v, _arrayValuewIAB5U2]
		const _arrayValueVzq6n79 = undefined;
		const _arrayValuebMepxQX = [_arrayValuefGBiJVX, _arrayValueZSs1qHy, _arrayValueOV7mb3S, _arrayValueW9voek3, _arrayValueVzq6n79]
		const _arrayValuelmsV08q = undefined;
		const _arrayValueHr5vlWk = "IMXqnj4bDhEdyo7kfjtHfOhSycsPYkQY4z6agczjrf4P2bGLfE9OYG";
		const _unitsQKsnlI0 = [_arrayValuea7YtveO, _arrayValuebMepxQX, _arrayValuelmsV08q, _arrayValueHr5vlWk]
		const _returnValueNo2qapg = await isAfter(_inputB8K94dd, _unitsQKsnlI0)
	});
})