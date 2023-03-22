const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const domain = 'sneakers';
const brand = 'nike';
const model = 'air force 1';
const genere = 'women';
const columnsTypes = ['US', 'EU', 'UK', 'CO', 'foot_length_cm'];

const humanizedColumns = columnsTypes
  .join(', ')
  .replace('_', ' ')
  .replace(/, ([^,]*)$/, ' and $1');

const sentence = `give me a size chart example for ${domain} ${brand} ${model} for ${genere} with ${humanizedColumns} but in json format`;

console.log(sentence);

const init = async () => {
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: sentence,
      },
    ],
    temperature: 0,
  });

  console.log(response.data.choices);
};

init();
