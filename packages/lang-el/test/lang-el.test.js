/*
 * Copyright (c) AXA Group Operations Spain S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const { Container } = require('@nlpjs/core');
const { SentimentManager } = require('../../node-nlp/src/index');
const { LangEl } = require('../src');

describe('Language Greek', () => {
  describe('Use plugin', () => {
    test('Should register the classes', () => {
      const instance = new Container();
      instance.use(LangEl);
      const tokenizer = instance.get('tokenizer-el');
      expect(tokenizer.constructor.name).toEqual('TokenizerEl');
      const stemmer = instance.get('stemmer-el');
      expect(stemmer.constructor.name).toEqual('StemmerEl');
      const stopwords = instance.get('stopwords-el');
      expect(stopwords.constructor.name).toEqual('StopwordsEl');
      const normalizer = instance.get('normalizer-el');
      expect(normalizer.constructor.name).toEqual('NormalizerEl');
    });
  });

  describe('Sentiment evaluation', () => {
    test('Accentuation matching between sentiment input and afinn data', async () => {
      const sentiment = new SentimentManager();
      const result = await sentiment.process(
        'el',
        'Γεια σου, τι κάνεις? Εγώ είμαι πολυ περιωρισμένος'
      );
      expect(result.score).toEqual(-1);
    });
  });
});
