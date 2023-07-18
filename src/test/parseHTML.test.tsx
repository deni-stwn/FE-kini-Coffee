import { parseHTML } from "../util/parseHTML";

describe('parseHTML', () => {
  test('should transform string to HTML format', () => {
    const html = '<p>hallo</p>'
    const expected = '<p>hallo</p>'

    const result = parseHTML(html)

    expect(result).toBe(expected)
  })
})