import { cellIterator } from './cell_iterator';

export class Remover {
  static genRegexReplacer = (regex): (() => void) => {
    return () => cellIterator(str => str.toString().replace(regex, ''));
  };
}
