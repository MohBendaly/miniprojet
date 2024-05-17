// sonyMicroservice.js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
// Charger le fichier sony.proto
const sonyProtoPath = 'sony.proto';
const sonyProtoDefinition = protoLoader.loadSync(sonyProtoPath, {
keepCase: true,
longs: String,
enums: String,
defaults: true,
oneofs: true,
});
const sonyProto = grpc.loadPackageDefinition(sonyProtoDefinition).sony;
// Implémenter le service sony
const sonyService = {
getsony: (call, callback) => {
// Récupérer les détails du film à partir de la base de données
const sony = {
id: call.request.sony_id,
title: 'Exemple de film',
description: 'Ceci est un exemple de film.',
// Ajouter d'autres champs de données pour le film au besoin
};
callback(null, { sony });
},
searchsonys: (call, callback) => {
const { query } = call.request;
// Effectuer une recherche de films en fonction de la requête
const sonys = [
{
id: '2',
title: 'playstation 2',
description: 'ceci est le deuxième console de sony.',
},
// Ajouter d'autres résultats de recherche de films au besoin
];
callback(null, { sonys });
},
// Ajouter d'autres méthodes au besoin
};
// Créer et démarrer le serveur gRPC
const server = new grpc.Server();
server.addService(sonyProto.sonyService.service, sonyService);
const port = 50053;
server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(),
(err, port) => {
if (err) {
console.error('Échec de la liaison du serveur:', err);
return;
}n
console.log(`Le serveur s'exécute sur le port ${port}`);
server.start();
});
console.log(`Microservice de films en cours d'exécution sur le port ${port}`);