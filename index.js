const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  basePath: 'https://openai-proxy.melioffice.com/v1',
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

const sentence2 =
  'Me puedes dar las tallas AR, Largo de pie, US, UK y EU en formato json devolviendo solamiente los arrays de AR, Largo de pie, US, UK y EU para el siguiente producto: Tipo: zapatillas, Marca: Fierros, Genero: Hombre, pero solo necesito las tallas';

const sentence = `give me a size chart example for ${domain} ${brand} ${model} for ${genere} with ${humanizedColumns} sizes but in json format`;

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
