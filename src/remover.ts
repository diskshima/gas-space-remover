import { cellIterator } from './cell_iterator';

export class Remover {
  static regexRemover = regex => cellIterator(str => str.toString().replace(regex, ''));
}
