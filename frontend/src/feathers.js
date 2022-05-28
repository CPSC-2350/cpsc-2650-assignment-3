import feathers from '@feathersjs/client';
import rest from '@feathersjs/rest-client';

const client = feathers();

const restClient = rest();

client.configure(restClient.fetch(window.fetch));
client.configure(feathers.authentication({
  storage: window.localStorage
}));

export default client;
