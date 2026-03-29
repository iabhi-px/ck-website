import { useDialKit, DialRoot } from 'dialkit';
import 'dialkit/styles.css';
import { useEffect } from 'react';

function IntegrationControls() {
  const params = useDialKit('All Icons', {
    // Languages
    Java: [1.3, 0.5, 3, 0.1],
    Go: [1.3, 0.5, 3, 0.1],
    Python: [1, 0.5, 3, 0.1],
    '.NET': [1.2, 0.5, 3, 0.1],
    // Clouds
    AWS: [1.1, 0.5, 3, 0.1],
    GCP: [1, 0.5, 3, 0.1],
    Azure: [1.1, 0.5, 3, 0.1],
    // Databases
    MySQL: [1.5, 0.5, 3, 0.1],
    Postgres: [1, 0.5, 3, 0.1],
    MongoDB: [1, 0.5, 3, 0.1],
    DynamoDB: [1.2, 0.5, 3, 0.1],
    Redis: [1.1, 0.5, 3, 0.1],
    Cosmos: [1.8, 0.5, 3, 0.1],
    MariaDB: [1.4, 0.5, 3, 0.1],
    HBase: [1.4, 0.5, 3, 0.1],
    Elastic: [1, 0.5, 3, 0.1],
    // Queues
    Kafka: [1, 0.5, 3, 0.1],
    Pulsar: [1.1, 0.5, 3, 0.1],
    RabbitMQ: [0.9, 0.5, 3, 0.1],
    SQS: [1.1, 0.5, 3, 0.1],
    SNS: [1.4, 0.5, 3, 0.1],
    // Infra
    Kubernetes: [1, 0.5, 3, 0.1],
    // Protocols
    'HTTP/S': [1, 0.5, 3, 0.1],
    gRPC: [1.3, 0.5, 3, 0.1],
    // IDEs & AI Tools
    JetBrains: [1, 0.5, 3, 0.1],
    'VS Code': [1, 0.5, 3, 0.1],
    Cursor: [1, 0.5, 3, 0.1],
    Windsurf: [1.1, 0.5, 3, 0.1],
    Copilot: [1.1, 0.5, 3, 0.1],
    Claude: [1, 0.5, 3, 0.1],
    'Custom Agents': [1.2, 0.5, 3, 0.1],
  });

  const iconScaleMap: Record<string, number> = {
    java: params.Java,
    go: params.Go,
    python: params.Python,
    dotnet: params['.NET'],
    aws: params.AWS,
    gcp: params.GCP,
    azure: params.Azure,
    mysql: params.MySQL,
    postgres: params.Postgres,
    mongodb: params.MongoDB,
    dynamodb: params.DynamoDB,
    redis: params.Redis,
    cosmos: params.Cosmos,
    mariadb: params.MariaDB,
    hbase: params.HBase,
    elastic: params.Elastic,
    kafka: params.Kafka,
    pulsar: params.Pulsar,
    rabbitmq: params.RabbitMQ,
    sqs: params.SQS,
    sns: params.SNS,
    kubernetes: params.Kubernetes,
    https: params['HTTP/S'],
    grpc: params.gRPC,
    jetbrains: params.JetBrains,
    vscode: params['VS Code'],
    cursor: params.Cursor,
    windsurf: params.Windsurf,
    copilot: params.Copilot,
    claude: params.Claude,
    customagents: params['Custom Agents'],
  };

  useEffect(() => {
    for (const [iconId, scale] of Object.entries(iconScaleMap)) {
      const swatch = document.querySelector(`[data-icon-id="${iconId}"]`);
      if (swatch) {
        swatch.querySelectorAll<HTMLElement>('.swatch-icon').forEach((icon) => {
          icon.style.setProperty('--icon-scale', String(scale));
        });
      }
    }
  });

  return <DialRoot position="top-right" defaultOpen={true} mode="popover" />;
}

export default IntegrationControls;
