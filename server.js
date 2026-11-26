const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

const services = [
  {
    serviceId: 'compute-001',
    serviceName: 'Amazon EC2',
    category: 'IaaS',
    pricingModel: 'Pay-as-you-go per instance-hour',
  },
  {
    serviceId: 'compute-002',
    serviceName: 'AWS Lambda',
    category: 'PaaS',
    pricingModel: 'Pay per request and compute duration',
  },
  {
    serviceId: 'storage-001',
    serviceName: 'Amazon S3',
    category: 'IaaS',
    pricingModel: 'Pay for storage, requests, and data transfer',
  },
  {
    serviceId: 'platform-001',
    serviceName: 'Google Cloud Run',
    category: 'PaaS',
    pricingModel: 'Pay per vCPU, memory, and request',
  },
];

app.get('/api/services', (_req, res) => {
  res.json(services);
});

app.get('/api/status', (_req, res) => {
  res.json({
    status: 'Operational',
    developer: 'Annanya Gogia',
    environment: 'Cloud PaaS',
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Cloud Catalog listening on port ${PORT}`);
  });
}

module.exports = app;
