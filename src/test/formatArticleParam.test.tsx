import { formatArticleParam } from "../util/formatArticleParam";

describe('formatArticleParam', () => { 
  test('should transform "ini article kini kopi" to "ini-article-kini-kopi', () => { 
    const Param = 'ini article kini kopi'
    const expected = 'ini-article-kini-kopi'

    const result = formatArticleParam(Param)

    expect(result).toBe(expected)
  })

  test('should no space', () => {
    const param = 'article'
    const expected = 'article'

    const result = formatArticleParam(param)

    expect(result).toBe(expected)
  })
})