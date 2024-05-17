// nintendoMicroservice.js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
// Charger le fichier nintendo.proto
const nintendoProtoPath = 'nintendo.proto';
const nintendoProtoDefinition = protoLoader.loadSync(nintendoProtoPath, {
keepCase: true,
longs: String,
enums: String,
defaults: true,
oneofs: true,
});
const nintendoProto = grpc.loadPackageDefinition(nintendoProtoDefinition).nintendo;
// Implémenter le service nintendo
const nintendoService = {
getnintendo: (call, callback) => {
// Récupérer les détails du film à partir de la base de données
const nintendo = {
id: call.request.nintendo_id,
title: 'Exemple de film',
description: 'Ceci est un exemple de film.',
// Ajouter d'autres champs de données pour le film au besoin
};
callback(null, { nintendo });
},
searchnintendos: (call, callback) => {
const { query } = call.request;
// Effectuer une recherche de films en fonction de la requête
const nintendos = [
{
id: '1',
title: 'wii',
description: 'ceci est la troisième console en nintendo.',
},
// Ajouter d'autres résultats de recherche de films au besoin
];
callback(null, { nintendo });
},
// Ajouter d'autres méthodes au besoin
};
// Créer et démarrer le serveur gRPC
const server = new grpc.Server();
server.addService(nintendoProto.nintendoService.service, nintendoService);
const port = 50053;
server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(),
(err, port) => {
if (err) {
console.error('Échec de la liaison du serveur:', err);
return;
}
console.log(`Le serveur s'exécute sur le port ${port}`);
server.start();
});
console.log(`Microservice de films en cours d'exécution sur le port ${port}`);