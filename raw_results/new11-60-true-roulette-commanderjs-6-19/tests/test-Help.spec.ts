export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
const {Command} = require("../../benchmark/top10npm/commanderjs/lib/command.js");
const {Argument} = require("../../benchmark/top10npm/commanderjs/lib/argument.js");
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const {CommanderError} = require("../../benchmark/top10npm/commanderjs/lib/error.js");

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpZA0963 = new Help()
		const _cmdtkGQRoc = undefined;
		const _returnValuefruLqTg = "LoEiPr5WtdvD1kCBOH3doRKdzL9QD6BKQFmjvwJgI9M1bxmfzPae7OwMu";
		const _longestOptionTermLengthRdre0v5 = () => { return _returnValuefruLqTg };
		const _returnValueUz0rthv = {
		
	}
		const _longestSubcommandTermLengthFqwKVxR = () => { return _returnValueUz0rthv };
		const _arrayValueqDb0R47 = "9mcwJmPrjFn1vfsBb3nltwPGf5KgKOAFWH4uTCivzbxkneIQW";
		const _arrayValueWxHWCqo = false;
		const _returnValueija9VVi = [_arrayValueqDb0R47, _arrayValueWxHWCqo]
		const _longestArgumentTermLengthn1PsMfT = () => { return _returnValueija9VVi };
		const _helperqNOqwHC = {
			"longestOptionTermLength": _longestOptionTermLengthRdre0v5,
		"longestSubcommandTermLength": _longestSubcommandTermLengthFqwKVxR,
		"longestArgumentTermLength": _longestArgumentTermLengthn1PsMfT
	}
		const _returnValueWiWFHmX = await _HelpZA0963.padWidth(_cmdtkGQRoc, _helperqNOqwHC)
		const _optionaAsQgLP = "RkfdwyrKVf1E28CLhdL8yNRiSeiAK1tBxRxoKamxxi7lXhnTYySOyeX4upYvQL4fMEkHuzo5AIHoZpl6pak8AV";
		const _returnValuetfp1hg = await _HelpZA0963.optionDescription(_optionaAsQgLP)
		const _returnValueycaFaQI = 2.442101948625128;
		const _returnValuewaXW4nv = () => { return _returnValueycaFaQI };
		const _matchC3BSBkp = () => { return _returnValuewaXW4nv };
		const _returnValueSRlgOLt = null;
		const _substrJc47Hb = () => { return _returnValueSRlgOLt };
		const _strX5YFl4H = {
			"match": _matchC3BSBkp,
		"substr": _substrJc47Hb
	}
		const _returnValueKMBElPR = undefined;
		const _widthbrslsC = () => { return _returnValueKMBElPR };
		const _indentiP1otML = 4.114914166654117;
		const _minColumnWidthtpLnd2c = 1.8185517335314305;
		const _returnValuecV9jyRJ = await _HelpZA0963.wrap(_strX5YFl4H, _widthbrslsC, _indentiP1otML, _minColumnWidthtpLnd2c)
	});

	it('test for Help', async () => {
		const _HelpJ6J1MGk = new Help()
		const _arrayValuestj8amg = true;
		const _arrayValueLGjjvh7 = "deR6Tpfvv7Ap5wjwQslVEz3";
		const _arrayValueq85A25C = [_arrayValuestj8amg, _arrayValueLGjjvh7]
		const _argumentyZT4N9h = [_arrayValueq85A25C]
		const _returnValueOl20cPq = await _HelpJ6J1MGk.argumentDescription(_argumentyZT4N9h)
		const _cmdfl44DdJ = false;
		const _returnValueWuavxkN = null;
		const _longestOptionTermLengtheaKLjd7 = () => { return _returnValueWuavxkN };
		const _returnValueHZdW736 = undefined;
		const _returnValuekLBeaCy = () => { return _returnValueHZdW736 };
		const _longestSubcommandTermLengthph2op4 = () => { return _returnValuekLBeaCy };
		const _arrayValueqz5nVnq = true;
		const _arrayValueg5QiP8 = null;
		const _returnValuecnsfVu0 = [_arrayValueqz5nVnq, _arrayValueg5QiP8]
		const _longestArgumentTermLengthzLG71DL = () => { return _returnValuecnsfVu0 };
		const _helperfGkOUnO = {
			"longestOptionTermLength": _longestOptionTermLengtheaKLjd7,
		"longestSubcommandTermLength": _longestSubcommandTermLengthph2op4,
		"longestArgumentTermLength": _longestArgumentTermLengthzLG71DL
	}
		const _returnValuezcwPtI = await _HelpJ6J1MGk.padWidth(_cmdfl44DdJ, _helperfGkOUnO)
		const _arrayValueTTgan72 = {
		
	}
		const _argumentMXKMuoU = [_arrayValueTTgan72]
		const _returnValueWFGDyMM = await _HelpJ6J1MGk.argumentTerm(_argumentMXKMuoU)
		const _arrayValueYaQQFP = "RXVyETI5JXM3BTXDD3ySTvmOxi18kjN4DQxxhXz7hKtsfot8";
		const _cmdrrDr2z = [_arrayValueYaQQFP]
		const _returnValuepr7qaCJ = await _HelpJ6J1MGk.commandUsage(_cmdrrDr2z)
	});

	it('test for Help', async () => {
		const _HelpToVFVCk = new Help()
		const _arrayValueZ49d9Qd = true;
		const _arrayValuejGKvxl9 = true;
		const _cmdUSG8iUA = [_arrayValueZ49d9Qd, _arrayValuejGKvxl9]
		const _returnValuewKJBlRi = null;
		const _helperiM2jwmb = () => { return _returnValuewKJBlRi };
		const _returnValueqJxAvxr = await _HelpToVFVCk.longestOptionTermLength(_cmdUSG8iUA, _helperiM2jwmb)
		const _cmdtq5qXrK = true;
		const _arrayValueSulIwtI = null;
		const _sortSubcommandsoJgd1Ei = [_arrayValueSulIwtI]
		const _returnValueP3MLGi = true;
		const _subcommandTermC47qgtj = () => { return _returnValueP3MLGi };
		const _helperTceX1tE = {
			"sortSubcommands": _sortSubcommandsoJgd1Ei,
		"subcommandTerm": _subcommandTermC47qgtj
	}
		const _returnValueHHav93m = await _HelpToVFVCk.longestSubcommandTermLength(_cmdtq5qXrK, _helperTceX1tE)
		const _cmdLfqzI5N = false;
		const _returnValuezwlmlhq = await _HelpToVFVCk.subcommandDescription(_cmdLfqzI5N)
		const _cmdO25pCce = undefined;
		const _helperSPL3ddw = new Help()
		const _returnValueinBVi1 = "YSiNiPJBPT6oAX";
		const _returnValueOcuJ7xU = () => { return _returnValueinBVi1 };
		const _arrayValuenFHcmGe = () => { return _returnValueOcuJ7xU };
		const _cmdmJx0wLN = [_arrayValuenFHcmGe]
		const _returnValueb8kxYCW = await _helperSPL3ddw.visibleArguments(_cmdmJx0wLN)
		const _arrayValueghjROT4 = null;
		const _arrayValueE5pkvWb = []
		const _arrayValueElOuDBy = true;
		const _arrayValueHis6jft = undefined;
		const _returnValueTXvoVy = "qAJJJypN";
		const _arrayValuetpD4b3e = () => { return _returnValueTXvoVy };
		const _arrayValueT5rrIkU = [_arrayValuetpD4b3e]
		const _arrayValueMfvb3z = [_arrayValueElOuDBy, _arrayValueHis6jft, _arrayValueT5rrIkU]
		const _arrayValueUOjGYxE = [_arrayValueE5pkvWb, _arrayValueMfvb3z]
		const _arrayValueIzmEhoJ = null;
		const _arrayValuelaBpcMo = undefined;
		const _cmda84uaJI = [_arrayValueghjROT4, _arrayValueUOjGYxE, _arrayValueIzmEhoJ, _arrayValuelaBpcMo]
		const _returnValueQAbcaxO = await _helperSPL3ddw.visibleArguments(_cmda84uaJI)
		const _returnValueBEQOZVa = -2.6957820017297207;
		const _cmdGqsH93i = () => { return _returnValueBEQOZVa };
		const _returnValueVftr4h = await _helperSPL3ddw.visibleArguments(_cmdGqsH93i)
		const _returnValueKJQPGQq = await _HelpToVFVCk.longestArgumentTermLength(_cmdO25pCce, _helperSPL3ddw)
	});

	it('test for Help', async () => {
		const _Helpr1TQ3QK = new Help()
		const _arrayValuefxCTGAS = "iVdpsvPFt2eKFt71KjaKn";
		const _arrayValueLPAAPQJ = false;
		const _arrayValueBgswheo = []
		const _arrayValueS9TvMf6 = 3.081544676617261;
		const _cmdl1uH8NI = [_arrayValuefxCTGAS, _arrayValueLPAAPQJ, _arrayValueBgswheo, _arrayValueS9TvMf6]
		const _returnValuetYO3i3N = await _Helpr1TQ3QK.visibleOptions(_cmdl1uH8NI)
		const _arrayValueIqLuo8b = -9.334804004677183;
		const _cmdRW1viO7 = [_arrayValueIqLuo8b]
		const _returnValueLemuKW7 = {
		
	}
		const _helpertJkshTs = () => { return _returnValueLemuKW7 };
		const _returnValueLrz0V62 = await _Helpr1TQ3QK.longestSubcommandTermLength(_cmdRW1viO7, _helpertJkshTs)
		const _flagsDSfUFwv = 5.24111237877419;
		const _optionJa30pfd = {
			"flags": _flagsDSfUFwv
	}
		const _returnValueL1oFL29 = await _Helpr1TQ3QK.optionTerm(_optionJa30pfd)
		const _cmdEmTJvDo = "YC2BS0jUuicBVlHLltRQqjJfmUAGPv7TXuLSb3CKjjefgC9SMbA6F4qvgFDeaFThr30c1SuPfMmGe";
		const _arrayValuejVYKhwq = undefined;
		const _arrayValueV0u6674 = undefined;
		const _arrayValuerWIfvg8 = null;
		const _arrayValuevGkc1nx = {
		
	}
		const _arrayValuen2YaEq = [_arrayValuerWIfvg8, _arrayValuevGkc1nx]
		const _helperhMrPEUT = [_arrayValuejVYKhwq, _arrayValueV0u6674, _arrayValuen2YaEq]
		const _returnValuePZmnc4M = await _Helpr1TQ3QK.longestOptionTermLength(_cmdEmTJvDo, _helperhMrPEUT)
	});

	it('test for Help', async () => {
		const _HelpzARcmtu = new Help()
		const _returnValuemheWPCr = null;
		const _cmdA4XF1aT = () => { return _returnValuemheWPCr };
		const _returnValueGNDC51s = await _HelpzARcmtu.subcommandDescription(_cmdA4XF1aT)
		const _cmdTpQy2z8 = null;
		const _arrayValuepCsgu4E = 1.8809424754098174;
		const _arrayValueAxNzdVL = undefined;
		const _helperq2OYOx = [_arrayValuepCsgu4E, _arrayValueAxNzdVL]
		const _returnValueBnfDGf6 = await _HelpzARcmtu.longestArgumentTermLength(_cmdTpQy2z8, _helperq2OYOx)
	});

	it('test for Help', async () => {
		const _HelpNRpPZG = new Help()
		const _arrayValueK6HWbW = {
		
	}
		const _arrayValuefqVwJEA = undefined;
		const _arrayValueBotJOV3 = -9.37022207800997;
		const _arrayValuevCxxMOJ = [_arrayValueK6HWbW, _arrayValuefqVwJEA, _arrayValueBotJOV3]
		const _arrayValueuvgD5Af = -0.4076697132516731;
		const _cmdSts038w = [_arrayValuevCxxMOJ, _arrayValueuvgD5Af]
		const _returnValuefChO2h5 = await _HelpNRpPZG.commandUsage(_cmdSts038w)
		const _arrayValueEIUoZYF = undefined;
		const _arrayValueJPlQWVE = 4.398577889936766;
		const _arrayValuedhKZ8OP = false;
		const _arrayValueeXg9h9s = [_arrayValueJPlQWVE, _arrayValuedhKZ8OP]
		const _returnValueWLhX64e = -3.429821851966963;
		const _returnValuehMZof7Z = () => { return _returnValueWLhX64e };
		const _arrayValueqvnlyIY = () => { return _returnValuehMZof7Z };
		const _cmdHT5H2Ny = [_arrayValueEIUoZYF, _arrayValueeXg9h9s, _arrayValueqvnlyIY]
		const _returnValueb98DgYf = await _HelpNRpPZG.visibleCommands(_cmdHT5H2Ny)
		const _returnValueY2YMvzm = 6.273793796182588;
		const _arrayValuebvPSHSG = () => { return _returnValueY2YMvzm };
		const _arrayValueKwpvuum = undefined;
		const _arrayValueIvFDoNq = null;
		const _cmdTrG9OrP = [_arrayValuebvPSHSG, _arrayValueKwpvuum, _arrayValueIvFDoNq]
		const _returnValueqVCy6tR = await _HelpNRpPZG.commandDescription(_cmdTrG9OrP)
		const _arrayValueQTM92el = null;
		const _arrayValueWzq6MJX = undefined;
		const _arrayValueIuHvFW0 = {
		
	}
		const _cmdcYSCKfv = [_arrayValueQTM92el, _arrayValueWzq6MJX, _arrayValueIuHvFW0]
		const _returnValuew3JGmZ0 = await _HelpNRpPZG.commandDescription(_cmdcYSCKfv)
		const _arrayValueH9OOwko = false;
		const _arrayValueTyfbTSg = false;
		const _arrayValuezTLIo1R = "4Qxk471Jfxf3NVYgDxtx44QppU1QyYifue43LThTZrT79";
		const _arrayValuekKY7aFI = "2E0C5SuyrreEmzxAwr8F9O7cN62QzE9njBIHTTroSX3k2W8Lioh3ohMckJX6k27badr2ik";
		const _arrayValueedV0SeL = [_arrayValueH9OOwko, _arrayValueTyfbTSg, _arrayValuezTLIo1R, _arrayValuekKY7aFI]
		const _arrayValuevKK5hkD = []
		const _arrayValuebB77KIe = null;
		const _arrayValuemCXqBCe = [_arrayValuebB77KIe]
		const _arrayValuefb7Mp3D = [_arrayValuevKK5hkD, _arrayValuemCXqBCe]
		const _arrayValueZcolASk = true;
		const _arrayValueY5AFHED = {
		
	}
		const _arrayValueTZjqbwK = "eMRr3qo5Fc2gNokR84dLrD7MMNxtnv6Mn8O2VuLKcwU3NgprOyFSOQ3MhWaWFtesha2tgN70iaas0TJ5xQwwOHlbqGCj0u";
		const _arrayValuecikxkyu = [_arrayValuefb7Mp3D, _arrayValueZcolASk, _arrayValueY5AFHED, _arrayValueTZjqbwK]
		const _cmdo6SnEEG = [_arrayValueedV0SeL, _arrayValuecikxkyu]
		const _returnValueLa3RHqo = 2.685009275193895;
		const _helperA4tDIbW = () => { return _returnValueLa3RHqo };
		const _returnValueH8s0EmM = await _HelpNRpPZG.longestArgumentTermLength(_cmdo6SnEEG, _helperA4tDIbW)
	});

	it('test for Help', async () => {
		const _HelpNpfZgIU = new Help()
		const _commandsufRfM8Q = {
		
	}
		const _returnValueSfQzmB7 = -9.790072214390857;
		const __hasImplicitHelpCommandppmZQpQ = () => { return _returnValueSfQzmB7 };
		const __helpCommandnameAndArgsiI4GDnc = {
		
	}
		const _returnValueNFVEtXr = false;
		const _createCommandjUazteP = () => { return _returnValueNFVEtXr };
		const _returnValueGnR1QWm = 6.747632826853444;
		const __helpCommandDescriptionHTnCsB9 = () => { return _returnValueGnR1QWm };
		const _cmdYUB703a = {
			"commands": _commandsufRfM8Q,
		"_hasImplicitHelpCommand": __hasImplicitHelpCommandppmZQpQ,
		"_helpCommandnameAndArgs": __helpCommandnameAndArgsiI4GDnc,
		"createCommand": _createCommandjUazteP,
		"_helpCommandDescription": __helpCommandDescriptionHTnCsB9
	}
		const _returnValueEAWISuI = await _HelpNpfZgIU.visibleCommands(_cmdYUB703a)
		const _cmdq2mT7oD = "wp5deiLzyI8SSh1V7TcdsRor27Gr6HXptSJDkfvJR5O2YT30pK";
		const _returnValueCan5BG = await _HelpNpfZgIU.commandUsage(_cmdq2mT7oD)
		const _arrayValueHM3LY1R = {
		
	}
		const _arrayValueLyYayGE = true;
		const _cmdvbOaMst = [_arrayValueHM3LY1R, _arrayValueLyYayGE]
		const _returnValueOmCObkA = await _HelpNpfZgIU.visibleOptions(_cmdvbOaMst)
		const _cmdWNp2h0C = "gbwHKWHG";
		const _returnValueLFeyrVY = await _HelpNpfZgIU.visibleCommands(_cmdWNp2h0C)
		const _returnValuecmurRut = "SBsv75LGQiGbtIAhg6kj6W4GEPIbP3U9AjRPYK3WVXmZBBaWWJ1muuGOtk3ybEQmViY4LJvTmVh";
		const _argumentHNbdsss = () => { return _returnValuecmurRut };
		const _returnValueC3PZzdW = await _HelpNpfZgIU.argumentTerm(_argumentHNbdsss)
	});

	it('test for Help', async () => {
		const _HelpRlEkXDx = new Help()
		const _cmdnJO8Xx = null;
		const _helperpvP3Rs = new Help()
		const _cmdeamcOxE = undefined;
		const _sortSubcommandsjHx5ZQu = 0.6967889747869105;
		const _returnValueAUmPLYC = null;
		const _returnValuepupQ37 = () => { return _returnValueAUmPLYC };
		const _subcommandTermyEmSKYA = () => { return _returnValuepupQ37 };
		const _helperu8851sm = {
			"sortSubcommands": _sortSubcommandsjHx5ZQu,
		"subcommandTerm": _subcommandTermyEmSKYA
	}
		const _returnValueimmSoSP = await _helperpvP3Rs.longestSubcommandTermLength(_cmdeamcOxE, _helperu8851sm)
		const _argChoicesyk6swS = {
		
	}
		const _defaultValueI9oQin = undefined;
		const _defaultValueDescriptionGKCw7wb = "K22nBtlKK0x5526DaoEUCllCDtQe";
		const _descriptionNKXhb7 = {
		
	}
		const _argumenthzcFuC = {
			"argChoices": _argChoicesyk6swS,
		"defaultValue": _defaultValueI9oQin,
		"defaultValueDescription": _defaultValueDescriptionGKCw7wb,
		"description": _descriptionNKXhb7
	}
		const _returnValueXWnKqOZ = await _helperpvP3Rs.argumentDescription(_argumenthzcFuC)
		const _argChoicesIQh0ia0 = {
		
	}
		const _defaultValueJM5ZeM = undefined;
		const _returnValuegGHvl4s = -8.758375497075418;
		const _arrayValueIDkBuSW = () => { return _returnValuegGHvl4s };
		const _arrayValuekfl2OUY = -7.2433903089167355;
		const _defaultValueDescriptionMsapX5I = [_arrayValueIDkBuSW, _arrayValuekfl2OUY]
		const _descriptionmsNetcQ = false;
		const _argumentF1Bf5zx = {
			"argChoices": _argChoicesIQh0ia0,
		"defaultValue": _defaultValueJM5ZeM,
		"defaultValueDescription": _defaultValueDescriptionMsapX5I,
		"description": _descriptionmsNetcQ
	}
		const _returnValuey6X5jNM = await _helperpvP3Rs.argumentDescription(_argumentF1Bf5zx)
		const _cmdr3O9Ouw = null;
		const _helpereVovwgS = new Help()
		const _cmdSKMyST3 = 1.3419512374298463;
		const _arrayValueTuA9jMp = undefined;
		const _arrayValuem2XJxLI = true;
		const _arrayValueiagS6ON = null;
		const _arrayValueBgmumQm = [_arrayValueiagS6ON]
		const _arrayValuePP2fYMs = [_arrayValuem2XJxLI, _arrayValueBgmumQm]
		const _helperpNIR8wj = [_arrayValueTuA9jMp, _arrayValuePP2fYMs]
		const _returnValueNFmpIAj = await _helpereVovwgS.longestOptionTermLength(_cmdSKMyST3, _helperpNIR8wj)
		const _returnValueZ6RoPj = await _helperpvP3Rs.padWidth(_cmdr3O9Ouw, _helpereVovwgS)
		const _returnValueoCuppiF = await _HelpRlEkXDx.formatHelp(_cmdnJO8Xx, _helperpvP3Rs)
		const _arrayValuexNLSQAb = undefined;
		const _arrayValuetnwqIio = -8.823665452415394;
		const _arrayValueKgHqEw = [_arrayValuetnwqIio]
		const _argumentA7mzTtp = [_arrayValuexNLSQAb, _arrayValueKgHqEw]
		const _returnValueOIZnEaQ = await _HelpRlEkXDx.argumentDescription(_argumentA7mzTtp)
		const _optionGy3ZyDJ = []
		const _returnValueYE3S7hz = await _HelpRlEkXDx.optionDescription(_optionGy3ZyDJ)
		const _cmdpRx41Rd = undefined;
		const _returnValuenVlWclH = {
		
	}
		const _visibleArgumentsvpsSm9T = () => { return _returnValuenVlWclH };
		const _returnValueN4bNGvo = undefined;
		const _argumentTermErMhJxm = () => { return _returnValueN4bNGvo };
		const _helperFvRSuHK = {
			"visibleArguments": _visibleArgumentsvpsSm9T,
		"argumentTerm": _argumentTermErMhJxm
	}
		const _returnValueggnuZx2 = await _HelpRlEkXDx.longestArgumentTermLength(_cmdpRx41Rd, _helperFvRSuHK)
	});

	it('test for Help', async () => {
		const _HelpRgM5rda = new Help()
		const _cmdKs5hwBi = "zm7grhv6xYQB3PW19J6ENLf5fdXxCbjaI4wMJJmy6TDEmM8W2LQMm6vCTtTkdNLi52VU0fjNOmlPIOQXngjG9r";
		const _returnValueLqcpFpR = await _HelpRgM5rda.visibleArguments(_cmdKs5hwBi)
	});

	it('test for Help', async () => {
		const _HelpG3UGd1 = new Help()
		const __argsDescriptioncaUgGEX = {
		
	}
		const __argsenwQeHq = {
		
	}
		const _cmdrER3xzF = {
			"_argsDescription": __argsDescriptioncaUgGEX,
		"_args": __argsenwQeHq
	}
		const _returnValuenkJISU = await _HelpG3UGd1.visibleArguments(_cmdrER3xzF)
	});

	it('test for Help', async () => {
		const _HelphDFAD5l = new Help()
		const _arrayValueAVOPJXL = undefined;
		const _cmdCbO0LOw = [_arrayValueAVOPJXL]
		const _returnValuecPJxSE = null;
		const _helperqdhZw6y = () => { return _returnValuecPJxSE };
		const _returnValuePAqoawd = await _HelphDFAD5l.longestArgumentTermLength(_cmdCbO0LOw, _helperqdhZw6y)
		const _returnValueFgTpHRO = true;
		const _nameEOvKhWU = () => { return _returnValueFgTpHRO };
		const _argumenthTqussQ = {
			"name": _nameEOvKhWU
	}
		const _returnValue2XllAC = await _HelphDFAD5l.argumentTerm(_argumenthTqussQ)
		const _cmdmrszj3W = false;
		const _returnValueF4MfkHQ = null;
		const _helperEXHlBEB = () => { return _returnValueF4MfkHQ };
		const _returnValueaOeefOo = await _HelphDFAD5l.padWidth(_cmdmrszj3W, _helperEXHlBEB)
	});

	it('test for Help', async () => {
		const _Helplda9Qar = new Help()
		const _returnValuePtgEThm = false;
		const _description7OVVu9 = () => { return _returnValuePtgEThm };
		const _cmdNp2bBLj = {
			"description": _description7OVVu9
	}
		const _returnValueXian6Cz = await _Helplda9Qar.commandDescription(_cmdNp2bBLj)
		const _cmdFFMzyTW = "ddwYBvpYQtTcGup5PhuQJhmydCmWQ0saKDPa8K21Tom21ph7dyJAlRFwe6WVcTB5lsgXaaiIeLTqS2pd48eqZEtzNS43bzs4d";
		const _returnValueC37CZyk = await _Helplda9Qar.visibleOptions(_cmdFFMzyTW)
		const _namePi72Uw3 = 4.747780118441495;
		const _cmdZxgsVDT = new Command(_namePi72Uw3)
		const _promiseRHRSlS6 = {
		
	}
		const _eventcjhUjFh = "LsCL3qF5jtMEIg4eJk98RsnK6YB4VxF14WAeW1Jz6fwWz9HK1t9UDJpbn1uUbRmonJVVl42vD2qJCwsuXRsN9QstXSk";
		const _returnValue1RFc6a = await _cmdZxgsVDT._chainOrCallHooks(_promiseRHRSlS6, _eventcjhUjFh)
		const _returnValueaqVSxGB = false;
		const _eventtIEc8Oq = () => { return _returnValueaqVSxGB };
		const _listenerAQE74kG = undefined;
		const _returnValueaS9uGNV = await _cmdZxgsVDT.hook(_eventtIEc8Oq, _listenerAQE74kG)
		const _arrayValuer9tdkzD = true;
		const _arrayValueBFOmn2q = undefined;
		const _arrayValue4hNpLf = -5.145953902805668;
		const _arrayValuexPZ8V7P = 2.5647470864095663;
		const _arrayValuez09fzxJ = [_arrayValue4hNpLf, _arrayValuexPZ8V7P]
		const _exitCoderhGnMZS = [_arrayValuer9tdkzD, _arrayValueBFOmn2q, _arrayValuez09fzxJ]
		const _codeEXmtyAq = null;
		const _messagefEgsw8h = true;
		const _returnValuez2tjB8k = await _cmdZxgsVDT._exit(_exitCoderhGnMZS, _codeEXmtyAq, _messagefEgsw8h)
		const _eventXRd4qOo = -7.4639870409783695;
		const _arrayValue824AML = null;
		const _listenerT3khrTC = [_arrayValue824AML]
		const _returnValuepvT8pJ = await _cmdZxgsVDT.hook(_eventXRd4qOo, _listenerT3khrTC)
		const _returnValueeYmefa = await _Helplda9Qar.commandDescription(_cmdZxgsVDT)
		const _cmdlJbHpNy = true;
		const _helpera0FAycc = new Help()
		const _cmdTsmDpPC = 8.95361017903921;
		const _helperFtFghU9 = "2UyTvjKvo2qLQGeHFn9IyB5CVbYOb95JxDzJn1GKJOOJJorfShCTKQsyPrPGq5";
		const _returnValueCoUWLQe = await _helpera0FAycc.longestSubcommandTermLength(_cmdTsmDpPC, _helperFtFghU9)
		const __argsVpjIIrF = {
		
	}
		const __namelNv0qL4 = -3.9521566529052397;
		const _arrayValuexVvjQCX = true;
		const _arrayValueqJE0Vv = undefined;
		const _arrayValuee4HcWoQ = -9.888049871465133;
		const __aliasesbNrJ3cO = [_arrayValuexVvjQCX, _arrayValueqJE0Vv, _arrayValuee4HcWoQ]
		const _optionsV6qEmAF = {
		
	}
		const _cmdKApah3A = {
			"_args": __argsVpjIIrF,
		"_name": __namelNv0qL4,
		"_aliases": __aliasesbNrJ3cO,
		"options": _optionsV6qEmAF
	}
		const _returnValueQiAL8fV = await _helpera0FAycc.subcommandTerm(_cmdKApah3A)
		const _optionsbB0Lyu = "Hzla8dQqSHu8YHBwuLy5gbNF1if3Aq73gwUWyKjWqgbQHeOP4xO6axMtj9xP9ZE9Qah5fsE93HRYldtANM6hWnKxNoKPgY8";
		const __hasHelpOptionG6cjd2A = []
		const __helpShortFlagHLHF9hL = undefined;
		const _returnValueI8zxF4z = 3.9041664591151797;
		const __findOptionRA795Lg = () => { return _returnValueI8zxF4z };
		const _arrayValuerqsPFSb = true;
		const _arrayValueI7oPoQ = null;
		const _arrayValuekrD2xPY = {
		
	}
		const _arrayValueUwVGDE = 3.3888360491386553;
		const __helpLongFlagjCmthAr = [_arrayValuerqsPFSb, _arrayValueI7oPoQ, _arrayValuekrD2xPY, _arrayValueUwVGDE]
		const _returnValueRmaCR2s = false;
		const _createOptionq5nIEy9 = () => { return _returnValueRmaCR2s };
		const __helpDescriptionZlIBiJ6 = []
		const __helpFlagsWSG4ACO = null;
		const _cmdry29gK7 = {
			"options": _optionsbB0Lyu,
		"_hasHelpOption": __hasHelpOptionG6cjd2A,
		"_helpShortFlag": __helpShortFlagHLHF9hL,
		"_findOption": __findOptionRA795Lg,
		"_helpLongFlag": __helpLongFlagjCmthAr,
		"createOption": _createOptionq5nIEy9,
		"_helpDescription": __helpDescriptionZlIBiJ6,
		"_helpFlags": __helpFlagsWSG4ACO
	}
		const _returnValuerMKK4KF = await _helpera0FAycc.visibleOptions(_cmdry29gK7)
		const _returnValuefEzmk82 = undefined;
		const _cmdjYjutWH = () => { return _returnValuefEzmk82 };
		const _returnValuefdilTu4 = {
		
	}
		const _returnValueEMkWdRN = () => { return _returnValuefdilTu4 };
		const _helperQEd7jaP = () => { return _returnValueEMkWdRN };
		const _returnValueBt1biew = await _helpera0FAycc.longestOptionTermLength(_cmdjYjutWH, _helperQEd7jaP)
		const _cmdjzKgjo5 = undefined;
		const _helperIUFST0m = "VKBfDw6hCCBTlj5XW7Yb1HzFckgGA2G1zpWy4tneMh5W0jvMR5yLzFLMk";
		const _returnValueC6Qdlqg = await _helpera0FAycc.longestSubcommandTermLength(_cmdjzKgjo5, _helperIUFST0m)
		const _returnValueBOCs3xz = await _Helplda9Qar.longestArgumentTermLength(_cmdlJbHpNy, _helpera0FAycc)
	});

	it('test for Help', async () => {
		const _HelpQbyFp0r = new Help()
		const _returnValuenvDs3W = 6.132402311373962;
		const _cmdJMLovde = () => { return _returnValuenvDs3W };
		const _returnValuexgKR7AV = await _HelpQbyFp0r.subcommandTerm(_cmdJMLovde)
		const _cmdxDHJ0zN = false;
		const _arrayValueO9BMhrD = 5.407074614270362;
		const _arrayValuepAPKDtT = "b0M8mRDxvL3n8xjTTL4UVCAsTHLOwkLFGUhTByc7mRPRqAiBwpNobXXF3BfVbAHso2vav5";
		const _helperlQULLVU = [_arrayValueO9BMhrD, _arrayValuepAPKDtT]
		const _returnValueX9dnjEn = await _HelpQbyFp0r.longestOptionTermLength(_cmdxDHJ0zN, _helperlQULLVU)
	});

	it('test for Help', async () => {
		const _HelpDRDIHK = new Help()
		const __nameyYNB5Eu = "zrMIcJFzAvtlYFKLSCDOElK0g";
		const __aliasesNx8ijY = {
		
	}
		const _returnValues7GfQVK = "pu9115ekOOCV7t0BunLzbpZFlKr1NRjjztG32PDPDQQ6rN1fbAE3TpKQcu4x3vFpk8HS6ASrGIam";
		const _parentT73VcPe = () => { return _returnValues7GfQVK };
		const _returnValuecP1YtrZ = undefined;
		const _usageL4tkib = () => { return _returnValuecP1YtrZ };
		const _cmdwAruvyA = {
			"_name": __nameyYNB5Eu,
		"_aliases": __aliasesNx8ijY,
		"parent": _parentT73VcPe,
		"usage": _usageL4tkib
	}
		const _returnValuecNJJK1B = await _HelpDRDIHK.commandUsage(_cmdwAruvyA)
		const _cmdjbsXXpH = "8dltsAnjMno6Ne7TO1fv6Fsh9VDC8L5NRasjcdf3a11L4XCLlQK";
		const _returnValuegyqFsRc = await _HelpDRDIHK.commandDescription(_cmdjbsXXpH)
		const _cmdzBxEzG4 = undefined;
		const _returnValueaY3gyEv = true;
		const _visibleArgumentsgXZXeKD = () => { return _returnValueaY3gyEv };
		const _returnValuelIbndL2 = null;
		const _argumentTermzveq05u = () => { return _returnValuelIbndL2 };
		const _helperlDQ3OE6 = {
			"visibleArguments": _visibleArgumentsgXZXeKD,
		"argumentTerm": _argumentTermzveq05u
	}
		const _returnValuevgGf1vA = await _HelpDRDIHK.longestArgumentTermLength(_cmdzBxEzG4, _helperlDQ3OE6)
	});

	it('test for Help', async () => {
		const _Helpe3Ob4yp = new Help()
		const _returnValuecjKVC9N = {
		
	}
		const _match5DofRo = () => { return _returnValuecjKVC9N };
		const _arrayValueFhxogw = undefined;
		const _arrayValueYsKoOwn = undefined;
		const _arrayValueLrqHqW = {
		
	}
		const _returnValueAFry4sa = [_arrayValueFhxogw, _arrayValueYsKoOwn, _arrayValueLrqHqW]
		const _substrTxiVs7v = () => { return _returnValueAFry4sa };
		const _strPzEIoiR = {
			"match": _match5DofRo,
		"substr": _substrTxiVs7v
	}
		const _widthQtzo7fx = -4.852555622302525;
		const _indentr1mDVN = -4.232099609139512;
		const _minColumnWidtheFZzzs = 9.520725112910938;
		const _returnValue1gktcB = await _Helpe3Ob4yp.wrap(_strPzEIoiR, _widthQtzo7fx, _indentr1mDVN, _minColumnWidtheFZzzs)
		const _argChoicesxYByQb = "tjf4dc2pEXJ";
		const _defaultValueCozZWEO = undefined;
		const _defaultValueDescriptionn4qNss9 = null;
		const _returnValuerJrvlV2 = null;
		const _descriptiongvHf3n5 = () => { return _returnValuerJrvlV2 };
		const _argumentHwlntFk = {
			"argChoices": _argChoicesxYByQb,
		"defaultValue": _defaultValueCozZWEO,
		"defaultValueDescription": _defaultValueDescriptionn4qNss9,
		"description": _descriptiongvHf3n5
	}
		const _returnValuensLTeIF = await _Helpe3Ob4yp.argumentDescription(_argumentHwlntFk)
		const _returnValuehOpcIF = undefined;
		const _nameAJ60aKi = () => { return _returnValuehOpcIF };
		const _arrayValueucK2JK1 = undefined;
		const _descriptionYAtpFvX = [_arrayValueucK2JK1]
		const _cmddGeYr5g = new Argument(_nameAJ60aKi, _descriptionYAtpFvX)
		const _returnValueHQXTcIu = await _cmddGeYr5g.argOptional()
		const _arrayValueuZDuch = true;
		const _arrayValuea8PWNIf = null;
		const _valueTHnt2RV = [_arrayValueuZDuch, _arrayValuea8PWNIf]
		const _previouszfz39ix = 7.5489253393046845;
		const _returnValueMKpBKoI = await _cmddGeYr5g._concatValue(_valueTHnt2RV, _previouszfz39ix)
		const _returnValueWeRjzLF = await _Helpe3Ob4yp.commandDescription(_cmddGeYr5g)
	});

	it('test for Help', async () => {
		const _HelpGTgvkC7 = new Help()
		const _arrayValueYvqWlJZ = "Wz9lIVrOHFUbLdPaMmoyixDPLgFaf8fb8HOvhpe3AKU5";
		const _arrayValueV91uAZA = {
		
	}
		const _arrayValue45cjnG = {
		
	}
		const _arrayValuepNHiB2 = [_arrayValueYvqWlJZ, _arrayValueV91uAZA, _arrayValue45cjnG]
		const _arrayValuegSulDaN = -7.81209210464156;
		const _arrayValuekhD8wwa = true;
		const _arrayValueYlFx5eM = 6.053130627419062;
		const _arrayValueFmXn3v = "YNr91odVtTS7RTXreY3fg4IH69M7f430jlePOgZFxMoYBT7hrwjZAvnRKzZPMsOYFdOLTXxCAvBKqredYCpqv8t51t";
		const _arrayValueoH5OEOM = [_arrayValuekhD8wwa, _arrayValueYlFx5eM, _arrayValueFmXn3v]
		const _argumentjnIOXoC = [_arrayValuepNHiB2, _arrayValuegSulDaN, _arrayValueoH5OEOM]
		const _returnValuecDcyDV9 = await _HelpGTgvkC7.argumentDescription(_argumentjnIOXoC)
		const _cmdqarKiT9 = null;
		const _sortSubcommandsNRyvPEo = null;
		const _returnValueyI2wfsC = 2.841233322394439;
		const _returnValueKRqUD5y = () => { return _returnValueyI2wfsC };
		const _subcommandTermDRP7Bre = () => { return _returnValueKRqUD5y };
		const _helperBAUoi6W = {
			"sortSubcommands": _sortSubcommandsNRyvPEo,
		"subcommandTerm": _subcommandTermDRP7Bre
	}
		const _returnValueyNuCkr9 = await _HelpGTgvkC7.formatHelp(_cmdqarKiT9, _helperBAUoi6W)
	});

	it('test for Help', async () => {
		const _HelpsOERmd = new Help()
		const _arrayValuehk5Gbvv = true;
		const _arrayValueWeHEFQq = undefined;
		const _arrayValueFJj3d3c = undefined;
		const _arrayValueiAmLMre = undefined;
		const _arrayValueLWTnvaf = [_arrayValueFJj3d3c, _arrayValueiAmLMre]
		const _arrayValueVf6DRz = -7.994483564285234;
		const _flagsD8ZwqL5 = [_arrayValuehk5Gbvv, _arrayValueWeHEFQq, _arrayValueLWTnvaf, _arrayValueVf6DRz]
		const _optionROsp51J = {
			"flags": _flagsD8ZwqL5
	}
		const _returnValueVLru57T = await _HelpsOERmd.optionTerm(_optionROsp51J)
		const _returnValueHBvZSmu = "QplbbEEq7I3EKarEsg63hkMP8NX2iKohspE54XpACON4g8oWdBY99ZX";
		const _includesOhATUv = () => { return _returnValueHBvZSmu };
		const _flagsgSJoiUN = {
			"includes": _includesOhATUv
	}
		const _descriptionkkl7npU = undefined;
		const _optionS7e4AFl = new Option(_flagsgSJoiUN, _descriptionkkl7npU)
		const _argrrNUOZ = {
		
	}
		const _returnValueDn1D8ZX = await _optionS7e4AFl.is(_argrrNUOZ)
		const _returnValueJsub1ms = await _optionS7e4AFl.name()
		const _valuepSBM8Ws = undefined;
		const _descriptionkWGb3CG = undefined;
		const _returnValueRoumfI = await _optionS7e4AFl.default(_valuepSBM8Ws, _descriptionkWGb3CG)
		const _returnValueR8gvcdg = await _HelpsOERmd.optionDescription(_optionS7e4AFl)
		const _cmdF86ggMd = -4.720314741864119;
		const _arrayValue7uJo9g = undefined;
		const _helperTcMNeLm = [_arrayValue7uJo9g]
		const _returnValuexatWs5d = await _HelpsOERmd.padWidth(_cmdF86ggMd, _helperTcMNeLm)
		const _cmdlBtA0ht = true;
		const _helperMeDgrqY = "3g7kiIWgK";
		const _returnValuelLpkKl = await _HelpsOERmd.longestArgumentTermLength(_cmdlBtA0ht, _helperMeDgrqY)
	});

	it('test for Help', async () => {
		const _HelpJ9rOgmg = new Help()
		const _returnValueyBGANaL = -9.515227348180636;
		const _arrayValueGyFP9G = () => { return _returnValueyBGANaL };
		const _namexxwBOKl = [_arrayValueGyFP9G]
		const _cmdaOyREHR = new Command(_namexxwBOKl)
		const _configurationhu6Wf9F = {
		
	}
		const _returnValueBOLAfYr = await _cmdaOyREHR.configureHelp(_configurationhu6Wf9F)
		const _keycEBVIU = null;
		const _returnValuey4yLT88 = await _cmdaOyREHR.getOptionValue(_keycEBVIU)
		const _arrayValueudaFzLb = true;
		const _arrayValuecqVUPS = undefined;
		const _arrayValueoXTV5Uw = {
		
	}
		const _nameQqkufW = [_arrayValueudaFzLb, _arrayValuecqVUPS, _arrayValueoXTV5Uw]
		const _returnValueAZVY1E = await _cmdaOyREHR._findCommand(_nameQqkufW)
		const _returnValuemV2V7j = await _HelpJ9rOgmg.visibleOptions(_cmdaOyREHR)
	});

	it('test for Help', async () => {
		const _HelpStBIC9Y = new Help()
		const _namejrD2rZN = "LiNSSxlvYtJwIOGxFYsoTIuyC3qoh4C";
		const _cmdTkbHSJD = new Command(_namejrD2rZN)
		const _contextOptionsOi4mR5G = undefined;
		const _returnValuessTW3h = await _cmdTkbHSJD.outputHelp(_contextOptionsOi4mR5G)
		const _aliasesXi4eoPd = undefined;
		const _returnValueekiK9BL = await _cmdTkbHSJD.aliases(_aliasesXi4eoPd)
		const _returnValuewvyNd4y = await _cmdTkbHSJD._processArguments()
		const _returnValueSf2XLac = await _HelpStBIC9Y.visibleCommands(_cmdTkbHSJD)
		const _cmdVJKG8Z = 1.603817394478419;
		const _returnValuenWebSba = "l62BwmYYLjwXDOZBjtigu1V1PbP74aJvAoajCkrdOtTvVMT0f9kv6MHgEfBSCJIQfgpNJfoC7Y1JeB6YApbQQG7t4";
		const _visibleOptionsoTtatNS = () => { return _returnValuenWebSba };
		const _returnValueH8vfTMJ = false;
		const _optionTermeJ609bJ = () => { return _returnValueH8vfTMJ };
		const _helperfiaguLj = {
			"visibleOptions": _visibleOptionsoTtatNS,
		"optionTerm": _optionTermeJ609bJ
	}
		const _returnValuess7C22V = await _HelpStBIC9Y.longestOptionTermLength(_cmdVJKG8Z, _helperfiaguLj)
	});

	it('test for Help', async () => {
		const _HelpPM8Cgp3 = new Help()
		const _cmdKNB5thL = {
		
	}
		const _helperyaOB6yy = new Help()
		const _flagsaNjDUzm = {
		
	}
		const _optionMT0xlBd = {
			"flags": _flagsaNjDUzm
	}
		const _returnValueOXAwuFJ = await _helperyaOB6yy.optionTerm(_optionMT0xlBd)
		const _strmZS82MK = "E8OPTGlDLOIBvPqkuJa7KMxuXsVDao3gIOuy";
		const _widthPEERUjm = -8.741063745035854;
		const _indentSwhzLjB = -0.9768613104559059;
		const _minColumnWidthY5vYP5X = 3.147586471093236;
		const _returnValuemgoHLm = await _helperyaOB6yy.wrap(_strmZS82MK, _widthPEERUjm, _indentSwhzLjB, _minColumnWidthY5vYP5X)
		const _cmdMPO5VTd = {
		
	}
		const _helperH0supZP = null;
		const _returnValuebzJNFo5 = await _helperyaOB6yy.formatHelp(_cmdMPO5VTd, _helperH0supZP)
		const _returnValuevSdbXeU = await _HelpPM8Cgp3.longestSubcommandTermLength(_cmdKNB5thL, _helperyaOB6yy)
		const _cmdFC7Hf1Q = undefined;
		const _sortSubcommandsih09cKP = null;
		const _returnValueopCPR96 = -1.860596552948909;
		const _subcommandTermwOns3F = () => { return _returnValueopCPR96 };
		const _helperXllfAo = {
			"sortSubcommands": _sortSubcommandsih09cKP,
		"subcommandTerm": _subcommandTermwOns3F
	}
		const _returnValueoj0fd3J = await _HelpPM8Cgp3.formatHelp(_cmdFC7Hf1Q, _helperXllfAo)
		const _cmdSTPpibJ = false;
		const _helperBFCGxu = new Help()
		const _cmd4YIbCn = "TqDm7DULeFCkjfqLzM87SPU4zZcuvN8Mtmn7cWYEOzj9maM2fLEaxeM62gGlnYk61";
		const _sortSubcommandsNFDk09z = false;
		const _returnValuew8jOPHx = {
		
	}
		const _subcommandTermimJyARl = () => { return _returnValuew8jOPHx };
		const _helperGusHJEg = {
			"sortSubcommands": _sortSubcommandsNFDk09z,
		"subcommandTerm": _subcommandTermimJyARl
	}
		const _returnValueiAgFTjv = await _helperBFCGxu.longestSubcommandTermLength(_cmd4YIbCn, _helperGusHJEg)
		const _arrayValueflyNjUm = "01pice3LvI3zNaX1vH5xiSTzM0NN32pScMtXxG5Un2M7QpC5KEeoddJN3EYFkCyxyOV3WzNpbsBdDEwStM38jHO";
		const _arrayValuezlxS1JG = undefined;
		const _arrayValueVrg7nSE = null;
		const _cmdCM0SfvV = [_arrayValueflyNjUm, _arrayValuezlxS1JG, _arrayValueVrg7nSE]
		const _returnValueC07WUAY = await _helperBFCGxu.commandDescription(_cmdCM0SfvV)
		const _returnValueaNHtaC = await _HelpPM8Cgp3.padWidth(_cmdSTPpibJ, _helperBFCGxu)
	});

	it('test for Help', async () => {
		const _HelpGnQIlCk = new Help()
		const _namej3zjtM = "PjereTV8yqWzsjA665Au2eS3JzrtQHKJ1eBEJjEu69GE9GsKUWxKVFELM";
		const _cmdQ4PXe3b = new Command(_namej3zjtM)
		const _returnValuexqjwwY7 = await _cmdQ4PXe3b._processArguments()
		const _returnValuesIuNzuO = await _HelpGnQIlCk.subcommandTerm(_cmdQ4PXe3b)
		const _argChoicesERd5WjT = {
		
	}
		const _arrayValueAS5OunG = "zpk9hVHsuio71v25mNQVULG4wMxxtLbIYXHvkwBiU5iHePbQisMrWGVEeuznJWcpmYXtmKhhvZqMM9GfdP1gxqt6rQE";
		const _arrayValueMwgTkFU = 1.03969456902891;
		const _arrayValueHNNbFBe = false;
		const _negateDb4wFzw = [_arrayValueAS5OunG, _arrayValueMwgTkFU, _arrayValueHNNbFBe]
		const _defaultValueUW1SSeO = undefined;
		const _defaultValueDescriptionqsEetQp = undefined;
		const _envVarAL647Fs = undefined;
		const _arrayValueyF8y5IW = []
		const _descriptionedKXefX = [_arrayValueyF8y5IW]
		const _optioniBG4DKf = {
			"argChoices": _argChoicesERd5WjT,
		"negate": _negateDb4wFzw,
		"defaultValue": _defaultValueUW1SSeO,
		"defaultValueDescription": _defaultValueDescriptionqsEetQp,
		"envVar": _envVarAL647Fs,
		"description": _descriptionedKXefX
	}
		const _returnValuelCweiH = await _HelpGnQIlCk.optionDescription(_optioniBG4DKf)
		const _namedEJylbz = "F25h3Xclt2lrs2shFMhDhKjzc";
		const _cmd1W5kPZ = new Command(_namedEJylbz)
		const _arrayValueGLTUt2A = null;
		const _arrayValuemusQOCv = undefined;
		const _arrayValueuD6KOO = {
		
	}
		const _arrayValuerZ2TRCh = [_arrayValueGLTUt2A, _arrayValuemusQOCv, _arrayValueuD6KOO]
		const _arrayValueaows6dh = null;
		const _nameqn0oBEe = [_arrayValuerZ2TRCh, _arrayValueaows6dh]
		const _descriptionGC0jWhM = {
		
	}
		const _fnGTnsS1O = undefined;
		const _arrayValueF5g73hi = {
		
	}
		const _defaultValueoIKP3kZ = [_arrayValueF5g73hi]
		const _returnValueNjo4JCf = await _cmd1W5kPZ.argument(_nameqn0oBEe, _descriptionGC0jWhM, _fnGTnsS1O, _defaultValueoIKP3kZ)
		const _flagsKUwXJX = false;
		const _descriptioneUOElfr = null;
		const _fnvBfILHP = -6.6386606808236825;
		const _defaultValuefhiOW0B = undefined;
		const _returnValuexRcLMaw = await _cmd1W5kPZ.option(_flagsKUwXJX, _descriptioneUOElfr, _fnvBfILHP, _defaultValuefhiOW0B)
		const _enableOrNameAndArgsWAWQkIF = "hEcvkEOnboTOkgwZHdpBGLy9UTxUcvIB3OcxwiXOBkKXmTH9d";
		const _descriptionWtIui4y = "mc6BRppnnH58h9X1sDXQ1g";
		const _returnValueogubYII = await _cmd1W5kPZ.addHelpCommand(_enableOrNameAndArgsWAWQkIF, _descriptionWtIui4y)
		const _returnValueiIeJaYg = await _HelpGnQIlCk.commandUsage(_cmd1W5kPZ)
	});

	it('test for Help', async () => {
		const _HelpbrNah6X = new Help()
		const _arrayValueoiQbff = "K3Mxis1fFlxQ";
		const _argumentVBYgZsv = [_arrayValueoiQbff]
		const _returnValue55c91D = await _HelpbrNah6X.argumentDescription(_argumentVBYgZsv)
		const _cmdrQRI9I3 = undefined;
		const _helperA3IMoVd = new Help()
		const _flagsyJXWAIQ = "8BemnQ7xEA4xIOtUfNVJu4WqrQjI2imyde7RV2gu7134iFjL";
		const _descriptionriPBc2t = -6.711707310008534;
		const _argumentvLIXO0v = new Option(_flagsyJXWAIQ, _descriptionriPBc2t)
		const _fn70I09y = undefined;
		const _returnValuem68aijS = await _argumentvLIXO0v.argParser(_fn70I09y)
		const _arrayValueEmLEr9W = 5.70365550239214;
		const _arrayValuenaMY1K7 = {
		
	}
		const _arrayValueol0nIeu = "OGwXKIzm2almAFw4gbaQS9emkxMyTsRMV3nYYNa077r4UcBaXWyayRmiIKbN";
		const _arrayValuew74bLry = undefined;
		const _valueNvJ0Ln0 = [_arrayValueEmLEr9W, _arrayValuenaMY1K7, _arrayValueol0nIeu, _arrayValuew74bLry]
		const _returnValueIL2ndIU = -0.21966084664451024;
		const _previousMqL3GF2 = () => { return _returnValueIL2ndIU };
		const _returnValueaQZNfuy = await _argumentvLIXO0v._concatValue(_valueNvJ0Ln0, _previousMqL3GF2)
		const _returnValueOqbri8B = await _argumentvLIXO0v.name()
		const _valuebLauEPB = -5.359986425001056;
		const _previoushm1HZ2C = "Mi9MA25SCEqXmd75kTEZpHCib1GBBp";
		const _returnValueGk3kyk4 = await _argumentvLIXO0v._concatValue(_valuebLauEPB, _previoushm1HZ2C)
		const _returnValuehaN61a = await _helperA3IMoVd.argumentDescription(_argumentvLIXO0v)
		const _returnValueWBXVCmq = -1.858491386220587;
		const _descriptionJWACwkX = () => { return _returnValueWBXVCmq };
		const _cmdQAWwaJ = {
			"description": _descriptionJWACwkX
	}
		const _returnValueHtthsWz = await _helperA3IMoVd.commandDescription(_cmdQAWwaJ)
		const _returnValueiHuja1I = await _HelpbrNah6X.padWidth(_cmdrQRI9I3, _helperA3IMoVd)
		const _cmdJegLUVr = undefined;
		const _helperEIhBOqq = new Help()
		const _arrayValueKy7DOJG = 8.291946653477897;
		const _returnValueKLloayH = "gRQdA23iCtq5E5ElABIidEXLyMVsyP2otmMgy8ODeruM7Kz3WC29AapjoSSXlLdjPeLqkhvyNHSUtM9pp44xLxi7h9bLjxv";
		const _arrayValueANe7NVy = () => { return _returnValueKLloayH };
		const _cmdFn5NQ1g = [_arrayValueKy7DOJG, _arrayValueANe7NVy]
		const _returnValueOpKYtny = await _helperEIhBOqq.visibleOptions(_cmdFn5NQ1g)
		const _cmdYbkZ6z8 = "aozrZF2vzFaNWDN1nIVwgUUy23cvwcxacZBA66NKpKgnr5pDfXJh44cT1VETtP7OfOrEauN27mO";
		const _returnValuej8jXiSW = await _helperEIhBOqq.visibleArguments(_cmdYbkZ6z8)
		const _returnValueJMCBcnx = await _HelpbrNah6X.formatHelp(_cmdJegLUVr, _helperEIhBOqq)
	});

	it('test for Help', async () => {
		const _Help5xaVR0 = new Help()
		const _strjyvxMAv = "5B2NFg5IQRfGy2uId6AVkmcLvSYZvwAACBWfYM27HK2knzgzxeiVj2sJn2YphUn";
		const _widthG5cGJAf = 3.6242961810539;
		const _indentGdtlekb = 5.425423144695058;
		const _minColumnWidthqpvuniQ = -7.32202833146755;
		const _returnValuet5bWU1T = await _Help5xaVR0.wrap(_strjyvxMAv, _widthG5cGJAf, _indentGdtlekb, _minColumnWidthqpvuniQ)
		const _createCommanduDm5zJh = null;
		const _cmd22nxke = {
			"createCommand": _createCommanduDm5zJh
	}
		const _returnValueAzLpX08 = await _Help5xaVR0.visibleCommands(_cmd22nxke)
		const _returnValueTDLNkpd = false;
		const _argumentuGonVtO = () => { return _returnValueTDLNkpd };
		const _returnValuehpJXIyp = await _Help5xaVR0.argumentTerm(_argumentuGonVtO)
		const _exitCodeKgOtutM = true;
		const _arrayValueSZTx41d = null;
		const _returnValuexBv4JU2 = null;
		const _arrayValues1VaaBs = () => { return _returnValuexBv4JU2 };
		const _arrayValueEZ1LLfO = true;
		const _arrayValueg4gcH7M = undefined;
		const _codexJ3i5PW = [_arrayValueSZTx41d, _arrayValues1VaaBs, _arrayValueEZ1LLfO, _arrayValueg4gcH7M]
		const _messagef3ZAhGA = []
		const _argumentzamfFG = new CommanderError(_exitCodeKgOtutM, _codexJ3i5PW, _messagef3ZAhGA)
		const _returnValueme49R1c = await _Help5xaVR0.argumentTerm(_argumentzamfFG)
	});

	it('test for Help', async () => {
		const _HelpCr3YcvQ = new Help()
		const _optionmCtP11x = "tfLJgTjaX8MDLfioqwFGKmgZKWBPEGqQTdSugScgRIl2S";
		const _returnValuerfc9FS6 = await _HelpCr3YcvQ.optionDescription(_optionmCtP11x)
		const _returnValueUDZ4xGJ = true;
		const _descriptionEHQKnvy = () => { return _returnValueUDZ4xGJ };
		const _cmdCQvHbnm = {
			"description": _descriptionEHQKnvy
	}
		const _returnValueizN7iHh = await _HelpCr3YcvQ.subcommandDescription(_cmdCQvHbnm)
		const _flagsu8DDSM8 = "GPsuzXkJDq9LAWXJpGNtwzHtuvWg";
		const _descriptionZxWVpv = -5.019463640373964;
		const _optionHLG2cu3 = new Option(_flagsu8DDSM8, _descriptionZxWVpv)
		const _arrayValuedheeoZ = undefined;
		const _arrayValueqIZ7wQw = []
		const _namedGd5Exi = [_arrayValuedheeoZ, _arrayValueqIZ7wQw]
		const _returnValueln4W3Pm = await _optionHLG2cu3.env(_namedGd5Exi)
		const _valueeHpWoF = null;
		const _returnValueMkNRhV6 = undefined;
		const _previousEI7cQgs = () => { return _returnValueMkNRhV6 };
		const _returnValueJysixr = await _optionHLG2cu3._concatValue(_valueeHpWoF, _previousEI7cQgs)
		const _returnValuej5dGvLh = await _HelpCr3YcvQ.optionDescription(_optionHLG2cu3)
		const _returnValuewEqq7d8 = null;
		const _arrayValueO1nsVoq = () => { return _returnValuewEqq7d8 };
		const _cmdcW8fsrS = [_arrayValueO1nsVoq]
		const _helpernSLivf1 = "WckQ3vsPBhuXKH3PTQ5R74R68m3SR8NODfkHHiVU3FUp6gGQZh4Pr7nirAaKLLVOEc0uCIFdKeUBAG";
		const _returnValueFFqa3Bp = await _HelpCr3YcvQ.longestOptionTermLength(_cmdcW8fsrS, _helpernSLivf1)
	});

	it('test for Help', async () => {
		const _HelpkfR0Feo = new Help()
		const _nameERpMPqf = []
		const _descriptionOuU47q2 = "DVygMGsZt6sObmeeGixovTFxRLHwoSXENtqQ6mhxsC9gEeKPnuSHFBKAOKzD1";
		const _optioni3zo7n2 = new Argument(_nameERpMPqf, _descriptionOuU47q2)
		const _returnValueE3hu2J = -2.334849378609568;
		const _includesU8day9 = () => { return _returnValueE3hu2J };
		const _returnValuelb9TGNc = null;
		const _joinWe6Apeh = () => { return _returnValuelb9TGNc };
		const _valuesHM9YqIe = {
			"includes": _includesU8day9,
		"join": _joinWe6Apeh
	}
		const _returnValuehzjrUwl = await _optioni3zo7n2.choices(_valuesHM9YqIe)
		const _returnValuetYCfSqN = false;
		const _valuesDfRbzU = () => { return _returnValuetYCfSqN };
		const _returnValuecJz9AEp = await _optioni3zo7n2.choices(_valuesDfRbzU)
		const _returnValuenBErVen = await _HelpkfR0Feo.optionDescription(_optioni3zo7n2)
		const _cmd9SOw3l = false;
		const _returnValuefI3NbNo = await _HelpkfR0Feo.commandDescription(_cmd9SOw3l)
	});

	it('test for Help', async () => {
		const _Helpv20Aid = new Help()
		const _cmdTbVezjB = null;
		const _helperW2gxz5A = new Help()
		const _arrayValuejlmrHqv = undefined;
		const _arrayValueIkBjCsK = "uMfRzV89ZXOHE19U7";
		const _nameJPKYclm = [_arrayValuejlmrHqv, _arrayValueIkBjCsK]
		const _descriptionoL4oGYh = {
		
	}
		const _option5aO1u8 = new Argument(_nameJPKYclm, _descriptionoL4oGYh)
		const _returnValueLqHJIi4 = await _option5aO1u8.argRequired()
		const _returnValueA2Kqrmk = null;
		const _valuehtxUNqm = () => { return _returnValueA2Kqrmk };
		const _descriptionVbv8F53 = undefined;
		const _returnValue3hUGVf = await _option5aO1u8.default(_valuehtxUNqm, _descriptionVbv8F53)
		const _returnValueLXkhknV = await _helperW2gxz5A.optionDescription(_option5aO1u8)
		const _returnValueqBV3gY = "hQWB2MmdGNCxeATkS51KyfCbiJZMKquJPw5qT";
		const _flagsijd7RvN = () => { return _returnValueqBV3gY };
		const _options57Np1f = {
			"flags": _flagsijd7RvN
	}
		const _returnValueB4wYMwK = await _helperW2gxz5A.optionTerm(_options57Np1f)
		const _returnValuegxVmrZA = await _Helpv20Aid.formatHelp(_cmdTbVezjB, _helperW2gxz5A)
		const _arrayValue2jnrMk = "DPLFuHZbnK5UADGEv9wCehAet8XT3rT6Xs4h5D0VRnK1yP514Jzs78q7PpfxswTLoAOXTLEFbIjjBgXPg4WzKGRho7bw";
		const _optionHWgoCqs = [_arrayValue2jnrMk]
		const _returnValueAo9lVrK = await _Helpv20Aid.optionDescription(_optionHWgoCqs)
		const _cmdSLONB2i = 1.0121571802312328;
		const _returnValueKlTxNZi = undefined;
		const _helperRoB4Yv = () => { return _returnValueKlTxNZi };
		const _returnValueLVjl9cX = await _Helpv20Aid.longestSubcommandTermLength(_cmdSLONB2i, _helperRoB4Yv)
		const _flagsEEjMnqC = "";
		const _descriptiona3VxdvC = "x7KP0VPTKJKEcok7wKoWid6MyBMWJ85xPOZBafVZoaagATNcgxse42y3VLE3uxrDfA";
		const _option6h8JNy = new Option(_flagsEEjMnqC, _descriptiona3VxdvC)
		const _returnValuebjIGTXf = "fkKuEFe7x2XkpIgL";
		const _includesfpozuz4 = () => { return _returnValuebjIGTXf };
		const _returnValueTtmeUnX = null;
		const _joinBpOwXsi = () => { return _returnValueTtmeUnX };
		const _valuesIy1mdpn = {
			"includes": _includesfpozuz4,
		"join": _joinBpOwXsi
	}
		const _returnValueTbiwboi = await _option6h8JNy.choices(_valuesIy1mdpn)
		const _mandatoryWcFTLK4 = true;
		const _returnValueVwxAlFf = await _option6h8JNy.makeOptionMandatory(_mandatoryWcFTLK4)
		const _fnVPQ0AL = undefined;
		const _returnValuesnottGW = await _option6h8JNy.argParser(_fnVPQ0AL)
		const _mandatorym5irtj = true;
		const _returnValueYIysLW5 = await _option6h8JNy.makeOptionMandatory(_mandatorym5irtj)
		const _returnValueKINRdl = await _Helpv20Aid.optionDescription(_option6h8JNy)
		const _cmdecFfLOi = true;
		const _helperF8XWZij = new Help()
		const _cmdF6vBpFN = 3.754966714774973;
		const _helperO3h2QuS = new Help()
		const _arrayValueXi3I5rf = false;
		const _optionR4ahPiQ = [_arrayValueXi3I5rf]
		const _returnValueqn5niE4 = await _helperO3h2QuS.optionDescription(_optionR4ahPiQ)
		const _argumentXOHgcY = "9fFlQy4ic0h5aJJy9KJI3";
		const _returnValueoDTzopQ = await _helperO3h2QuS.argumentDescription(_argumentXOHgcY)
		const _arrayValueghnLSYZ = false;
		const _arrayValuezM9xLv4 = 9.158919210208929;
		const _cmdvn7NCuX = [_arrayValueghnLSYZ, _arrayValuezM9xLv4]
		const _helperPX9kHRK = new Help()
		const _arrayValueUN20GWQ = true;
		const _arrayValueRPC6qqg = null;
		const _arrayValueIHfZvMu = true;
		const _arrayValuezxdDk8R = [_arrayValueUN20GWQ, _arrayValueRPC6qqg, _arrayValueIHfZvMu]
		const _optionRcbbnZ9 = [_arrayValuezxdDk8R]
		const _returnValuenT8xk7m = await _helperPX9kHRK.optionTerm(_optionRcbbnZ9)
		const _nameyK6qIU3 = "NeQwEIMeA8iwDk8uZTJjd9dAhM8";
		const _cmdqxsDpsD = new Command(_nameyK6qIU3)
		const _keye5sxvKD = undefined;
		const _valuevouyIJB = null;
		const _returnValueSW2CEaY = await _cmdqxsDpsD.setOptionValue(_keye5sxvKD, _valuevouyIJB)
		const _returnValuekOtLTb0 = await _cmdqxsDpsD._hasImplicitHelpCommand()
		const _returnValueRqjyS6 = await _helperPX9kHRK.visibleArguments(_cmdqxsDpsD)
		const _arrayValueaTbBn00 = true;
		const _namenpbeZL8 = [_arrayValueaTbBn00]
		const _cmdaxazCh4 = new Command(_namenpbeZL8)
		const _strDxdqgic = undefined;
		const _flagsNVP3mBK = {
		
	}
		const _descriptionbvKSGRQ = {
		
	}
		const _returnValuekLmGCM = await _cmdaxazCh4.version(_strDxdqgic, _flagsNVP3mBK, _descriptionbvKSGRQ)
		const _returnValueCSZzAQd = await _cmdaxazCh4._checkNumberOfArguments()
		const _returnValueeBXuuto = await _helperPX9kHRK.subcommandDescription(_cmdaxazCh4)
		const _nameocHB81e = true;
		const _cmdhspfjDg = new Command(_nameocHB81e)
		const _flagsfLTPM19 = null;
		const _descriptionovIlnoZ = undefined;
		const _returnValueeD18rOW = await _cmdhspfjDg.createOption(_flagsfLTPM19, _descriptionovIlnoZ)
		const _returnValueCdc0qPx = await _helperPX9kHRK.subcommandDescription(_cmdhspfjDg)
		const _returnValueMi0MZZK = await _helperO3h2QuS.padWidth(_cmdvn7NCuX, _helperPX9kHRK)
		const _cmdKCsz6k = true;
		const _returnValuelToMwl3 = -6.824770824591971;
		const _helperfwESJqY = () => { return _returnValuelToMwl3 };
		const _returnValueMdCpqdu = await _helperO3h2QuS.padWidth(_cmdKCsz6k, _helperfwESJqY)
		const _returnValueUIeieYu = await _helperF8XWZij.formatHelp(_cmdF6vBpFN, _helperO3h2QuS)
		const _arrayValue8GZfOR = undefined;
		const _arrayValueJRsq8Yg = null;
		const _arrayValueNHqXtyK = -6.8826754008695055;
		const _cmdPIEUeIj = [_arrayValue8GZfOR, _arrayValueJRsq8Yg, _arrayValueNHqXtyK]
		const _returnValuerQpzmJ = await _helperF8XWZij.subcommandDescription(_cmdPIEUeIj)
		const _descriptionbrIkZLm = {
		
	}
		const _cmdqGOy5W = {
			"description": _descriptionbrIkZLm
	}
		const _returnValueXcAErgL = await _helperF8XWZij.subcommandDescription(_cmdqGOy5W)
		const _namex1aBlcc = "RBPYqeVNe6ftkmX4qvmDAv";
		const _descriptioniSlK3wd = -3.9302540167954945;
		const _cmdtPNUHO3 = new Argument(_namex1aBlcc, _descriptioniSlK3wd)
		const _includesTXQlyIr = false;
		const _returnValueqhU168p = null;
		const _arrayValueG09GZ0B = () => { return _returnValueqhU168p };
		const _returnValueeNp9ITk = [_arrayValueG09GZ0B]
		const _returnValuejcAqjMr = () => { return _returnValueeNp9ITk };
		const _joindAI3fW9 = () => { return _returnValuejcAqjMr };
		const _valuesvXLl0rC = {
			"includes": _includesTXQlyIr,
		"join": _joindAI3fW9
	}
		const _returnValueAWs5886 = await _cmdtPNUHO3.choices(_valuesvXLl0rC)
		const _returnValueOtfAQZf = await _cmdtPNUHO3.argOptional()
		const _returnValue5T9B7s = await _helperF8XWZij.commandDescription(_cmdtPNUHO3)
		const _returnValueBoIwIIW = await _Helpv20Aid.longestOptionTermLength(_cmdecFfLOi, _helperF8XWZij)
	});

	it('test for Help', async () => {
		const _Helpob6Vtz6 = new Help()
		const _flagsYnYPxUI = "Uy4tl04BOs3F7CyT7QV";
		const _descriptionpUkDfKa = {
		
	}
		const _argumentcxdKGE7 = new Option(_flagsYnYPxUI, _descriptionpUkDfKa)
		const _returnValueJjMy8Cx = await _argumentcxdKGE7.name()
		const _valuesMwrWJoC = []
		const _returnValueGqkthKc = await _argumentcxdKGE7.choices(_valuesMwrWJoC)
		const _fnCClhw9Z = undefined;
		const _returnValueGiRBNXO = await _argumentcxdKGE7.argParser(_fnCClhw9Z)
		const _returnValueNJf0ERG = await _Helpob6Vtz6.argumentDescription(_argumentcxdKGE7)
		const _argumentHlw0HOM = "Gdclzo9y91LELQwzxsnahJKoH4vzcWu4";
		const _returnValuecNkN3We = await _Helpob6Vtz6.argumentDescription(_argumentHlw0HOM)
	});

	it('test for Help', async () => {
		const _HelpGkaCX4T = new Help()
		const _namezBkkCXO = {
		
	}
		const _descriptionSrkKSCP = 9.974064474253186;
		const _argumentA1ztJWG = new Argument(_namezBkkCXO, _descriptionSrkKSCP)
		const _valuendn3MRx = {
		
	}
		const _arrayValueJYNbbz2 = "oYGAavMR56VBHce44PDhdXmrmKIdxG5n69lINzcgcQVrtnBikzbwpbV7P3aVPVAkV8wCiXQ0zy42QllpY";
		const _arrayValueivVxbPu = "B5UeA1Fs7btUB0C3h9UX3id4wuxWyK8VBsrgxWG72uEBMmuvX6NJ";
		const _arrayValueO2bNQq = "OU5FmVmi9uhu4pzDp";
		const _arrayValueEHCqAXb = [_arrayValueJYNbbz2, _arrayValueivVxbPu, _arrayValueO2bNQq]
		const _returnValueBWcB7v0 = "iItfbKXIYKOluEA1YxZezSTVocO5QRSGtSVqDX5MQUHgDyDtHt8suLx9q2R2nuMqs6VyjYTcGgQMyR9J3T1bOpFyMs9vi8vF8X";
		const _arrayValueCZ7Dbrb = () => { return _returnValueBWcB7v0 };
		const _arrayValueh9jT4xI = undefined;
		const _arrayValueM5091Zs = null;
		const _descriptiongTVtIV = [_arrayValueEHCqAXb, _arrayValueCZ7Dbrb, _arrayValueh9jT4xI, _arrayValueM5091Zs]
		const _returnValuevDyq4Tx = await _argumentA1ztJWG.default(_valuendn3MRx, _descriptiongTVtIV)
		const _returnValuelEhNnV1 = await _argumentA1ztJWG.name()
		const _returnValueKAGupmZ = await _argumentA1ztJWG.argRequired()
		const _valueF1Ni7n0 = false;
		const _descriptionS9pNxa8 = {
		
	}
		const _returnValueVlIYyoi = await _argumentA1ztJWG.default(_valueF1Ni7n0, _descriptionS9pNxa8)
		const _returnValueQtHAldI = await _HelpGkaCX4T.argumentDescription(_argumentA1ztJWG)
		const _cmdqDELjq8 = true;
		const _returnValueNLO2gmT = await _HelpGkaCX4T.subcommandDescription(_cmdqDELjq8)
	});
})