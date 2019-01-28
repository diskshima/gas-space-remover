import { cellIterator } from './cell_iterator';

export class Replacer {
  static replaceSoundMark = () => {
    cellIterator(str => {
      let result = '';
      const dakuKeys = Object.keys(Replacer.dakuMapping);
      const handakuKeys = Object.keys(Replacer.handakuMapping);
      for (let i = 0; i < str.length; i++) {
        let resultChar = str[i];
        for (let j = 0; j < dakuKeys.length; j++) {
          const key = dakuKeys[j];
          if (str[i] + str[i + 1] === key + '\u3099') {
            resultChar = Replacer.dakuMapping[key];
            i++;
            break;
          }
        }

        for (let j = 0; j < handakuKeys.length; j++) {
          const key = handakuKeys[j];
          if (str[i] + str[i + 1] === key + '\u309a') {
            resultChar = Replacer.handakuMapping[key];
            i++;
            break;
          }
        }

        result += resultChar;
      }

      return result;
    });
  };

  private static dakuMapping = {
    か: 'が',
    き: 'ぎ',
    く: 'ぐ',
    け: 'げ',
    こ: 'ご',
    さ: 'ざ',
    し: 'じ',
    す: 'ず',
    せ: 'ぜ',
    そ: 'ぞ',
    た: 'だ',
    ち: 'ぢ',
    つ: 'づ',
    て: 'で',
    と: 'ど',
    は: 'ば',
    ひ: 'び',
    ふ: 'ぶ',
    へ: 'べ',
    ほ: 'ぼ',
    カ: 'ガ',
    キ: 'ギ',
    ク: 'グ',
    ケ: 'ゲ',
    コ: 'ゴ',
    サ: 'ザ',
    シ: 'ジ',
    ス: 'ズ',
    セ: 'ゼ',
    ソ: 'ゾ',
    タ: 'ダ',
    チ: 'ヂ',
    ツ: 'ヅ',
    テ: 'デ',
    ト: 'ド',
    ハ: 'バ',
    ヒ: 'ビ',
    フ: 'ブ',
    ヘ: 'ベ',
    ホ: 'ボ'
  };

  private static handakuMapping = {
    は: 'ぱ',
    ひ: 'ぴ',
    ふ: 'ぷ',
    へ: 'ぺ',
    ほ: 'ぽ',
    ハ: 'パ',
    ヒ: 'ピ',
    フ: 'プ',
    ヘ: 'ペ',
    ホ: 'ポ'
  };
}
