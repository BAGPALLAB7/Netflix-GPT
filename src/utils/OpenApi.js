import OpenAI from 'openai';
import { OPEN_API } from './constaints';

const openApi = new OpenAI({
  apiKey: OPEN_API, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default openApi;