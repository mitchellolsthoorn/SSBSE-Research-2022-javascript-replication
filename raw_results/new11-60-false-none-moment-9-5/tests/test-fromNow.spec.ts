export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _arrayValued6F36Tv = "clQ7QG95lW61yKKdxc5kfrKlCyG9tDEWUxVuGkPbp5wfHNkTfvhNn9lQnmMubpZleF7HaerSf6n9LLoD";
		const _withoutSuffixSXEJgxI = [_arrayValued6F36Tv]
		const _returnValueTqPx5sJ = await fromNow(_withoutSuffixSXEJgxI)
	});
})