export {}
import {now} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/now.js";

describe('now', () => {
	it('test for now', async () => {
		const _returnValueeoInMHP = await now()
	});
})