// microsftMicroservice.js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
// Charger le fichier microsft.proto
const microsftProtoPath = 'microsoft.proto';
const microsoftProtoDefinition = protoLoader.loadSync(microsftProtoPath, {
keepCase: true,
longs: String,
enums: String,
defaults: true,
oneofs: true,
});
const microsftProto = grpc.loadPackageDefinition(microsftProtoDefinition).microsft;
// Implémenter le service microsft
const microsftService = {
getgames: (call, callback) => {
// Récupérer les détails du film à partir de la base de données
const microsft = {
id: call.request.microsft_id,
title: 'Exemple de jeu',
description: 'Ceci est un exemple de jeu.',
// Ajouter d'autres champs de données pour le film au besoin
};
callback(null, { game });
},
searchmicrosfts: (call, callback) => {
const { query } = call.request;
// Effectuer une recherche de films en fonction de la requête
const microsoft = [
{
id: '3',
title: 'xox 360',
description: 'le deuxième console',
},

// Ajouter d'autres résultats de recherche de films au besoin
];
callback(null, { microsfts });
},
// Ajouter d'autres méthodes au besoin
};
// Créer et démarrer le serveur gRPC
const server = new grpc.Server();
server.addService(microsftProto.microsftService.service, microsftService);
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