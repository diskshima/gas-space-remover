export class Remover {
  static genRegexReplacer = (regex): (() => void) => {
    return () => Remover.cellIterator(str => str.toString().replace(regex, ''));
  };

  private static cellIterator = replacer => {
    const activeSheet = SpreadsheetApp.getActiveSheet();
    const selection = activeSheet.getSelection();

    const ranges = selection.getActiveRangeList().getRanges();

    ranges.forEach(range => {
      const values = range.getValues();
      values.forEach(row => {
        for (let i = 0; i < row.length; i++) {
          row[i] = replacer(row[i]);
        }
      });
      range.setValues(values);
    });
  };
}
