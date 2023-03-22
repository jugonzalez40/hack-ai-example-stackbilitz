const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const brand = '';
const model = '';
const genere = '';
const columnsTypes = [''];

const init = async () => {
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content:
          'give me a size chart example for nike force 1 for women but in json format',
      },
    ],
    temperature: 0,
  });

  console.log(response.data.choices);
};

init();
